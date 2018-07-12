import Layout from "../components/layout";
import styled from "styled-components";
import Particles from "react-particles-js";

// Components
import AboutMe from "../components/intro";

const Container = styled.div`
  background-image: linear-gradient(
    to right,
    #180c3a,
    #200528,
    #1e0119,
    #15000b,
    #000000
  );
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export default () => (
  <Layout title="Welcome">
    <Container>
      <Particles
        params={{
          particles: {
            line_linked: {
              enable: false
            },
            move: {
              direction: "right",
              out_mode: "out"
            }
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
      <AboutMe />
    </Container>
  </Layout>
);
