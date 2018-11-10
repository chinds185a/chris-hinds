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
import Section from "../components/layouts/section";

// Components
import Tags from "../components/tags";
import ProfileImage from "../components/profileImage";
import Date from "../components/date";

const theme = "dark";

const Post = ({
  title = "oops",
  authorName = "no name",
  lastUpdated,
  categories = [],
  authorImage = {},
  body = [],
  mainImage = ""
}) => (
  <Layout title={title} theme={theme}>
    <Section sectionGradient="sunset" padding="large" style="light">
      <Container marginBottom="medium">
        <h1 className="uk-heading-primary">{title}</h1>
      </Container>
      <Container>
        <Tags categories={categories} />
      </Container>
    </Section>

    <Section padding="small">
      <Container size={"small"}>
        <ProfileImage
          image={urlFor(authorImage)
            .width(50)
            .url()}
          name={authorName}
        />
        <Date dateStamp={lastUpdated} />
      </Container>
    </Section>

    <Section removePadding>
      <Container size="small">
        <BlockContent
          blocks={body}
          imageOptions={{ w: 540, h: 360, fit: "max" }}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </Container>
    </Section>
    {/* <Container size="large">
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
    </Container> */}
  </Layout>
);

Post.getInitialProps = async ({ query: { slug } }) => {
  const document = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    title,
    "authorName": author->name,
    "lastUpdated": _updatedAt,
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
