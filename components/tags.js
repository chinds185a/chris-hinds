// Elements
import Button from "./elements/button";

export default ({ categories }) => {
  return (
    <div>
      {categories.map(category => {
        return (
          <Button href="www.google.com" size="small" buttonStyle="text">
            {category}
          </Button>
        );
      })}
    </div>
  );
};
