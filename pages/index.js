import Layout from "../components/layout";
import styled from "styled-components";
import Icons from "react-fontawesome";

// Components
import AboutMe from "../components/intro";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 76px);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

export default () => (
  <Layout title="Welcome" background="true">
    <Container>
      <div className="uk-flex uk-flex-1 uk-flex-middle">
        <AboutMe />
      </div>
      
      <div className="home-cta__container uk-grid-collapse uk-light" uk-grid="true">
        <div className="uk-width-1-1 uk-width-expand@s uk-padding uk-flex uk-flex-center uk-flex-right@s uk-flex-middle background-color__twitter uk-height-small">
          <Icons name="twitter" size="4x" />
        </div>
        <div className="uk-width-1-1 uk-width-2-5@s uk-padding uk-flex uk-flex-center uk-flex-middle background-color__github uk-height-small">
          <Icons name="github" size="4x" />
        </div>
        <div className="uk-width-1-1 uk-width-expand@s uk-padding uk-flex uk-flex-center uk-flex-left@s uk-flex-middle background-color__linkedin uk-height-small">
          <Icons name="linkedin" size="4x" />
        </div>
      </div>
    </Container>
  </Layout>
);
