import Layout from "../components/layout";
import styled from "styled-components";

// Components
import Hero from "../components/hero";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 76px);
  margin: 0;
  padding: 0;
  display: flex;
`;

const colorTheme = 'yellow';

export default () => (
  <Layout title="Welcome" hero={colorTheme}>
    <Container>
      <Hero backgroundColor={colorTheme} />
    </Container>
  </Layout>
);
