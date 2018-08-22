export default ({ title, slug, image }) => (
  <div>
      <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
              <img src={image} width="100%" alt="" uk-img="true" />
          </div>
          <div className="uk-card-body">
              <a href={`/post/${slug}`}><h3 className="uk-card-title">{title}</h3></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
      </div>
  </div>
);
