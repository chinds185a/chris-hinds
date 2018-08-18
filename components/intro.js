// Elements
import Button from "../components/elements/button";

export default () => (
  <div className="uk-light uk-container uk-container-large">
    <div className="">
      <div>
        <section>
          <h1 className="home-hero__title">
            Hi folks, I am.<br/>
            <span className="text-color__orange">Chris Hinds.</span><br/>
            A <span className="text-color__green">fullstack developer</span> from<br/>
            planet earth
          </h1>
        </section>

        {/* <div className="intro-section__cta-container uk-flex uk-flex-wrap">
          <Button href="/aboutme" buttonStyle="default">
            more about chris
          </Button>
          <Button href="#" buttonStyle="default">
            chris's work
          </Button>
        </div> */}
      </div>
    </div>
  </div>
);
