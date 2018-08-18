// Elements
import ActiveLink from "./elements/active-link.js";

export default () => (
  <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true;">
    <div className="uk-offcanvas-bar">
      <button className="uk-offcanvas-close" type="button" uk-close="true" />
      <h3>chris hinds.</h3>
      <ul className="uk-nav uk-nav-primary">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/aboutme">About Me</ActiveLink>
        <ActiveLink href="/blog/dave">Blog</ActiveLink>
      </ul>
    </div>
  </div>
);
