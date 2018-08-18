import Layout from "../components/layout";
import Icons from "react-fontawesome";

// Components
import AboutMe from "../components/intro";

export default () => (
  <Layout title="Welcome" background="true">
    <div className="home-content__container">
      <div className="uk-flex uk-flex-1 uk-flex-middle uk-padding@s">
        <AboutMe />
      </div>
      
      <div className="home-cta__container uk-grid-collapse uk-light" uk-grid="true">
        <div className="uk-width-1-1 uk-width-expand@s uk-padding uk-flex uk-flex-center uk-flex-right@s uk-flex-middle background-color__twitter uk-height-small">
          <a href="https://twitter.com/chinds185" className="uk-flex uk-flex-column uk-text-center">
            <Icons name="twitter" size="4x" />
            @chinds185
          </a>
        </div>
        <div className="uk-width-1-1 uk-width-2-5@s uk-padding uk-flex uk-flex-center uk-flex-middle background-color__github uk-height-small">
          <a href="https://github.com/chinds185a" className="uk-flex uk-flex-column uk-text-center">
            <Icons name="github" size="4x" />
            @chinds185a
          </a>
        </div>
        <div className="uk-width-1-1 uk-width-expand@s uk-padding uk-flex uk-flex-center uk-flex-left@s uk-flex-middle background-color__linkedin uk-height-small">
          <a href="https://www.linkedin.com/in/chrishinds1" className="uk-flex uk-flex-column uk-text-center">
            <Icons name="linkedin" size="4x" />
            @chrishinds1
          </a>
        </div>
      </div>
    </div>
  </Layout>
);
