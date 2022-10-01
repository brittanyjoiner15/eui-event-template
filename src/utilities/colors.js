const light = {
  primary: "#07c",
  accent: "#f04e98",
  success: "#00bfb3",
  warning: "#fec514",
  danger: "#bd271e",
  emptyShade: "#fff",
  lightestShade: "#f1f4fa",
  lightShade: "#d3dae6",
  mediumShade: "#98a2b3",
  darkShade: "#69707d",
  darkestShade: "#343741",
  fullShade: "#000",
};

const dark = {
  primary: "#36a2ef",
  accent: "#f68fbe",
  success: "#7dded8",
  warning: "#f3d371",
  danger: "#f86b63",
  emptyShade: "#1d1e24",
  lightestShade: "#25262e",
  lightShade: "#343741",
  mediumShade: "#535966",
  darkShade: "#98a2b3",
  darkestShade: "#d4dae5",
  fullShade: "#fff",
};

const usingDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const getColor = (color) => (usingDarkMode ? dark[color] : light[color]);

export {
  light,
  dark,
  usingDarkMode,
  getColor,
};