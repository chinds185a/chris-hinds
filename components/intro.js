// Elements
import Button from "../components/elements/button";

export default () => (
  <div className="uk-light uk-container uk-container-large">
    <h1 className="home-hero__title">
      Hi folks, I am<br/>
      <span className="text-color__orange">Chris Hinds.</span><br/>
      A <span className="text-color__green">fullstack developer</span> from<br/>
      planet earth. <span className="uk-text-meta">(i think...)</span>
    </h1>
    <div className="uk-flex uk-flex-center" uk-scrollspy="cls: uk-animation-fade; delay: 500; repeat: true">
      <Button href='/aboutme' buttonStyle='default' size='large'>Tell me more...</Button>
    </div>
  </div>
);
