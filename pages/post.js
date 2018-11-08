// Sanity
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Layouts
import Layout from "../components/layout";
import Container from "../components/layouts/container";

// Components
import HeroImage from "../components/heroImage";
import Tags from "../components/tags";
import ProfileImage from "../components/profileImage";

const theme = "dark";

const Post = ({
  title = "oops",
  authorName = "no name",
  categories = [],
  authorImage = {},
  body = [],
  mainImage = ""
}) => (
  <Layout title={title} theme={theme}>
    <Container size="large">
      <HeroImage title={title} mainImage={mainImage} />
      <Container size="small">
        <div>
          <Tags categories={categories} />
        </div>
        <div>
          <ProfileImage
            image={urlFor(authorImage)
              .width(50)
              .url()}
            name={authorName}
          />
        </div>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 540, h: 360, fit: "max" }}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </Container>
    </Container>
  </Layout>
);

Post.getInitialProps = async ({ query: { slug } }) => {
  const document = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    title,
    "authorName": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    "mainImage": mainImage.asset->url,
    body
  }`,
    { slug }
  );
  return document;
};

export default Post;
