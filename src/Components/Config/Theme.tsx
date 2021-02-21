const lightTheme = {
  background: "#fafaff",
  text: "#2b303a",
  background_secondary: "#2b303a",
  text_secondary: "#fafaff",
  body: "#58a4b0",
  heading: "#d81e5b",
  hover: "#58a4b0",
};

const darkTheme = {
  background: "#212121",
  text: "#fafaff",
  background_secondary: "#212121",
  text_secondary: "#fafaff",
  body: "#121212",
  heading: "#d81e5b",
  hover: "#d81e5b",
};

export type theme = typeof darkTheme;

export { lightTheme, darkTheme };
