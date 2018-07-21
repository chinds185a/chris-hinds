import Link from "next/link";

export default ({ href, children, target = "_blank" }) => (
  <Link href={href} passHref>
    <a className="uk-icon-link" target={target} rel="noopener">
      {children}
    </a>
  </Link>
);
