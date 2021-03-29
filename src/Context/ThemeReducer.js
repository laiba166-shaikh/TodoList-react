import { SET_DARK_THEME, SET_LIGHT_THEME } from "./ThemeConstants";

const themeReducer = (state, action) => {
  var { type } = action;
  switch (type) {
    case SET_LIGHT_THEME:
      return {
        backgroundColor: "#f5f5f5",
        btnBgColor: "#b28451",
        textColor: "#999",
        btnTextColor: "f9f7f6",
      };
    case SET_DARK_THEME:
      return {
        backgroundColor: "#333",
        btnBgColor: "#0b1787",
        textColor: "#d3d3d3",
        btnTextColor: "#f9f7f6",
      };
    default:
      return state;
  }
};

export default themeReducer;
