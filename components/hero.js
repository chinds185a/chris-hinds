// Elements
import Button from "../components/elements/button";

export default (props) => (
  <div className={`uk-dark uk-hero ${props.backgroundColor ? `background-color-${props.backgroundColor}` : ''}`}>
      <div className="uk-width-1-1@s uk-width-2-3@m">
        <section>
          <h1 className="uk-heading-hero">about me.</h1>
        </section>
        <section>
          <p>
          Lorem ipsum dolor sit amet, ornare justo, dignissim bibendum tellus condimentum nibh sollicitudin, wisi fusce a diam consectetuer aliquam consectetuer. Est egestas sodales ipsum quis eget, vitae massa auctor tortor vitae felis, enim in et lorem, voluptatem at primis. Platea consequatur ante inceptos wisi erat. Ligula sodales et, eros nisl. 
          </p>
        </section>
      </div>
  </div>
);
