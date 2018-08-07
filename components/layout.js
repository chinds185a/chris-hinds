import React from "react";
import Link from "next/link";
import Head from "next/head";
import Fonts from "./fonts";
import "../scss/styles.scss";

// Components
import Navigation from './navigation.js';

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { title, children, background, hero } = this.props;
    return (
      <div className={`layout-wrapper ${background ? 'background-enabled' : ''}`}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <div className="main-content__wrapper">
          <Navigation backgroundColor={`${hero}`} />

          <main>{children}</main>
        </div>
      </div>
    );
  }
}

export default Index;
