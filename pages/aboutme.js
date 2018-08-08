import Layout from "../components/layout";
import styled from "styled-components";

// Components
import Hero from "../components/hero";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 76px);
  margin: 0;
  padding: 0;
`;

const colorTheme = 'yellow';

export default () => (
  <Layout title="Welcome" hero={colorTheme}>
    <Container>
      <Hero backgroundColor={colorTheme} />
      <div className="uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-grid">

          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">Timeline</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>



          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">What I do</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>



          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">Projects</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>



          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">Interests</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>
      </div>
    </Container>
  </Layout>
);
