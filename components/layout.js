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
    const { title, children, background, hero, theme = 'light' } = this.props;
    return (
      <div className="uk-offcanvas-content">
        <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true;">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3>chris hinds.</h3>

                <ul className="uk-nav uk-nav-primary">
                  <li className="uk-active"><a href="/">Home</a></li>
                  <li className=""><a href="/aboutme">About Me</a></li>
                  <li className=""><a href="/blog/dave">Blog</a></li>
                  
                  <li className="uk-nav-header">Header</li>
              </ul>
            </div>
        </div>
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
