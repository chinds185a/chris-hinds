import Layout from "../components/layout";

// Sanity
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../client'

const imageBuilder = imageUrlBuilder(sanityClient)

function imageUrlFor(source) {
  return imageBuilder.image(source)
}

// Components
import Hero from "../components/hero";
import PostCard from "../components/post-card";

const colorTheme = 'blue';

const Blog = ({ posts }) => (
  <Layout title='Blog' backgroundColor={colorTheme}>
    <div className="aboutme-content__container">
      <Hero title="the blog" backgroundColor={colorTheme} />
      
      <div className="uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-match uk-grid-small" uk-grid="true">
        {posts.map(post => (
          <PostCard {...post} image={imageUrlFor(post.image).ignoreImageParams().width(400)} />
        ))}
      </div>
    </div>
  </Layout>
);

Blog.getInitialProps = async ({ query }) => {
  const document = await sanityClient.fetch(`*[_type == "post"]{
    "slug": slug.current,
    title,
    "image": mainImage.asset->url,
    "authorName": author->name,
    "categories": categories[]->title
  }`)

  console.log(JSON.stringify(document));

  return {
    posts: document
  }
}

export default Blog