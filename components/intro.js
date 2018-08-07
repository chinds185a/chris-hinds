// Elements
import Button from "../components/elements/button";

export default () => (
  <div className="uk-light uk-container uk-container-large">
    <div className="uk-flex uk-flex-between">
      <div>
        <section>
          <h1 className="uk-heading-hero">Chris Hinds.</h1>
          <p>
            Hi, I am a <span className="highlight">fullstack developer</span>{" "}
            producing elegant, performanant and accessible digital experiences
            for mobile and the web. <br />
            Currently working at British Broadcasting Corporation (BBC).
          </p>
        </section>

        <div className="intro-section__cta-container uk-flex uk-flex-wrap">
          <Button href="/aboutme" buttonStyle="default">
            more about chris
          </Button>
          <Button href="#" buttonStyle="default">
            chris's work
          </Button>
        </div>
      </div>
    </div>
  </div>
);
