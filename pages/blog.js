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

const colorTheme = 'blue';

const Blog = ({ posts }) => (
  <Layout title='Blog' backgroundColor={colorTheme}>
    <div className="aboutme-content__container">
      <Hero title="the blog" backgroundColor={colorTheme} />
      
      <div>
        {posts.map(post => (
          <div>
            <img src={imageUrlFor(post.image).ignoreImageParams().width(300)} />
            <a href={`/post/${post.slug}`}>{post.title}</a>
          </div>
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