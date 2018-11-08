import TimeAgo from "react-timeago";

// Components
import Tags from "../components/tags";
import ProfileImage from "../components/profileImage";

export default ({
  title,
  slug,
  image,
  authorName,
  authorImage,
  categories,
  lastUpdated
}) => (
  <article>
    <div className="post-card uk-flex uk-flex-column uk-box-shadow-medium uk-padding-small">
      <div className="uk-margin-small-bottom uk-flex uk-flex-middle uk-flex-between">
        <ProfileImage image={authorImage} name={authorName} />
        <span>
          <TimeAgo date={lastUpdated} />
        </span>
      </div>
      <div className="uk-margin-small-bottom">
        <a href={`/post/${slug}`}>
          <span className="post-card__title">{title}</span>
        </a>
      </div>
      <div className="uk-flex uk-flex-column uk-flex-1">
        <div className="uk-margin-small-bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="uk-margin-small-bottom uk-inline-clip uk-transition-toggle">
          <img
            className="uk-transition-scale-up uk-transition-opaque"
            src={image}
            width="100%"
            alt=""
            uk-img="true"
          />
        </div>
      </div>

      <div>
        <hr />
        <div className="uk-text-uppercase uk-flex uk-flex-middle">
          <Tags categories={categories} />
        </div>
      </div>
    </div>
  </article>
);
