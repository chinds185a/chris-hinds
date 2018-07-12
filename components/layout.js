import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled, { injectGlobal } from "styled-components";
import Fonts from "./fonts";

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Work Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: #fff;
    }
    button {
      font-family: 'Work Sans', sans-serif; 
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div``;

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Container>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header />

        <Main>{this.props.children}</Main>
      </Container>
    );
  }
}

export default Index;
