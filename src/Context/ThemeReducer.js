import { SET_DARK_THEME, SET_LIGHT_THEME } from "./ThemeConstants";

const themeReducer = (state, action) => {
  var { type } = action;
  switch (type) {
    case SET_LIGHT_THEME:
      return {
        backgroundColor: "#fff",
        btnColor: "#b28451",
        textColor: "#999",
      };
    case SET_DARK_THEME:
      return {
        backgroundColor: "#333",
        btnColor: "#0b1787",
        textColor: "#f9f7f6",
      };
    default:
      return state;
  }
};

export default themeReducer;
