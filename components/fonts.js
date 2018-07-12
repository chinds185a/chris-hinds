const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Montserrat:400,700|Work+Sans:300";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Montserrat");

  roboto.load().then(() => {
    document.documentElement.classList.add("montserrat");
  });
};

export default Fonts;
