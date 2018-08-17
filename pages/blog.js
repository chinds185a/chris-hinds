import Layout from "../components/layout";
import styled from "styled-components";

// Sanity
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

// Components
import HeroImage from "../components/heroImage";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const theme = 'dark';

const Post = ({ title = 'oops', authorName = 'no name', categories = [], authorImage = {}, body = [], mainImage = '' }) => (
  <Layout title={title} theme={theme}>
    <Container>
      <HeroImage title={title} mainImage={mainImage} />
      <div className="uk-container uk-container-medium">
        <div>
          {categories && (
            <ul>Posted in
              { categories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
            )
          }
        </div>
        <div>
          <span className="uk-text-meta" uk-scrollspy="cls:uk-animation-fade">{authorName}</span>
          <img src={urlFor(authorImage).width(50).url()} />
        </div>
        <BlockContent
          blocks={body}
          imageOptions={{w: 540, h: 360, fit: 'max'}}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </Container>
  </Layout>
);

Post.getInitialProps = async ({ query: { slug } }) => {
  const document = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    "authorName": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    "mainImage": mainImage.asset->url,
    body
  }`, { slug })
  return document
}

export default Post