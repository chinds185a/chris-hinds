import classNames from "classnames";

const Section = ({
  children,
  sectionStyle,
  sectionGradient,
  padding,
  removePadding,
  style = "dark"
}) => {
  const sectionClassNames = classNames({
    "uk-section": true,
    [`uk-section-${sectionStyle}`]: sectionStyle,
    [`gradient-background__${sectionGradient}`]: sectionGradient,
    [`uk-section-${padding}`]: padding,
    "uk-padding-remove-vertical": removePadding,
    [`uk-${style}`]: style
  });

  return <div className={sectionClassNames}>{children}</div>;
};

export default Section;
