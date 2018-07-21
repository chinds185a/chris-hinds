import Layout from "../components/layout";
import styled from "styled-components";

// Components
import AboutMe from "../components/intro";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 76px);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export default () => (
  <Layout title="Welcome">
    <Container>
      <AboutMe />
    </Container>
  </Layout>
);
