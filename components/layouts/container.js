import classNames from "classnames";

const Container = ({
  children,
  size = "large",
  marginTop,
  marginBottom,
  padding,
  paddingSize
}) => {
  let containerClassNames = classNames({
    "uk-container": true,
    [`uk-container-${size}`]: true,
    [`uk-margin-${marginTop}-top`]: marginTop,
    [`uk-margin-${marginBottom}`]: marginBottom,
    "uk-padding": padding,
    [`uk-padding-${paddingSize}`]: paddingSize
  });

  return <div className={containerClassNames}>{children}</div>;
};

export default Container;
