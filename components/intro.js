import Layout from "../components/layout";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
`;

const Profile = styled.p`
  opacity: 0.7;
`;

export default () => (
  <Container>
    <div>
      <h1>
        Chris Hinds, <br />
        Fullstack Developer
      </h1>
      <Profile>
        Hi, I produce elegant, performanant and accessible digital experiences
        for mobile and the web. <br />
        Currently working at The BBC for BBC News online.
      </Profile>
    </div>
  </Container>
);
