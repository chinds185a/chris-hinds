import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default (props) => (
  <div className="post-hero__container uk-container uk-container-medium uk-margin-top">
    <div className="uk-flex uk-flex-column uk-text-left uk-text-center@m">
      <div>
        <h1 className="post-hero__title uk-heading-primary">{props.title}</h1>
      </div>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div>

      </div>
    </div>
    <div className="post-hero-image__conatiner uk-cover-container">
      <picture>
        <source media="(min-width: 975px)" srcSet={urlFor(props.mainImage).width(975).url()} />
        <source media="(min-width: 675px)" srcSet={urlFor(props.mainImage).width(675).url()} />
        <source media="(min-width: 440px)" srcSet={urlFor(props.mainImage).width(440).url()} />
        <source media="(min-width: 320px)" srcSet={urlFor(props.mainImage).width(320).url()} />
        <img src={urlFor(props.mainImage).width(300).url()} alt="" />
      </picture>
    </div>
  </div>
);
