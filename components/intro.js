import Layout from "../components/layout";

// Elements
import Button from "../components/elements/button";

export default () => (
  <div className="uk-dark">
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
        <Button href="mailto:chinds@outlook.com" buttonStyle="default">
          get in touch
        </Button>
      </div>
      <div>
        <p>dave</p>
      </div>
    </div>
  </div>
);
