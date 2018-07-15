import Link from "next/link";

export default ({ href, children, buttonStyle = "primary" }) => (
  <Link href={href} passHref>
    <a className={`uk-button uk-button-${buttonStyle}`} type="button">
      {children}
    </a>
  </Link>
);
