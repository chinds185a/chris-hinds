import classNames from "classnames";

export default ({
  image,
  name,
  borderStyle = "circle",
  width = "50",
  height = "50"
}) => {
  const profileImageClassNames = classNames({
    [`uk-border-${borderStyle}`]: true
  });

  return (
    <div>
      <img
        className={profileImageClassNames}
        src={image}
        width={width}
        height={height}
        alt={name}
        uk-tooltip={`title: ${name}; pos: right`}
      />
    </div>
  );
};
