import Icons from "react-fontawesome";
import IconButton from './elements/icon-button'

export default (props) => (
  <header className={`${props.backgroundColor ? `background-color-${props.backgroundColor}` : '' } ${props.theme ? `uk-${props.theme}` : '' }`}>
    <div className="uk-container uk-container-large ">
      <nav className="uk-flex uk-flex-between uk-margin-medium-top">
        <div className="uk-flex uk-flex-between uk-flex-center uk-flex-middle">
          <span className="header__contact-icon uk-margin-small-right">
            <Icons name="comment" size="2x" />
          </span>
          <span className="header__contact-link uk-text-lead uk-text-capitalize">
            <a className="uk-link-text" href="mailto:chinds@outlook.com">contact me.</a>
          </span>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-middle">
          <a className="uk-link-heading" type="button" uk-toggle="target: #offcanvas-flip">
            <Icons name="bars" size="2x" />
          </a>
          {/* <ul className="header__social-links uk-iconnav">
            <li>
              <IconButton href="https://twitter.com/chinds185">
                <Icons name="twitter" size="2x" />
              </IconButton>
            </li>
            <li>
            <IconButton href="https://github.com/chinds185a">
              <Icons name="github" size="2x" />
            </IconButton>
            </li>
            <li>
            <IconButton href="https://www.linkedin.com/in/chrishinds1">
              <Icons name="linkedin" size="2x" />
            </IconButton>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  </header>
);
