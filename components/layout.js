import React from "react";
import Link from "next/link";
import Head from "next/head";
import Fonts from "./fonts";
import "../scss/styles.scss";
import Icons from "react-fontawesome";

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <div className="uk-container uk-container-large">
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <header>
          <nav className="uk-flex uk-flex-between uk-margin-medium-top">
            <div className="uk-flex uk-flex-between uk-flex-center uk-flex-middle">
              <span className="header__contact-icon uk-margin-small-right">
                <Icons name="comment" size="2x" />
              </span>
              <span className="header__contact-link uk-text-lead uk-text-capitalize">
                <a href="mailto:chinds@outlook.com">contact me.</a>
              </span>
            </div>
            <div className="uk-flex uk-flex-center uk-flex-middle">
              <ul className="header__social-links uk-iconnav">
                <li>
                  <a href="#">
                    <Icons name="twitter" size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icons name="github" size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icons name="linkedin" size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Index;
