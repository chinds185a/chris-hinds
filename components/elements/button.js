import Link from "next/link";

export default ({
  href,
  children,
  buttonStyle = "primary",
  size = "medium",
  type = "cta-button",
  target = "_blank"
}) => (
  <Link href={href} passHref>
    <a
      className={`${type} uk-button uk-button-${buttonStyle} uk-button-${size} uk-margin-small-right`}
      target={target}
      rel="noopener"
      type="button"
    >
      {children}
    </a>
  </Link>
);
