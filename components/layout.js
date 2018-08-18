import React from "react";
import Head from "next/head";
import Fonts from "./fonts";
import "../scss/styles.scss";

// Components
import Navigation from './navigation';
import Sidebar from './sidebar';

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { title, children, background, hero, theme = 'light' } = this.props;
    return (
      <div className="uk-offcanvas-content">
        <Sidebar />
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
            <Navigation backgroundColor={`${hero}`} theme={theme} />

            <main>{children}</main>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
