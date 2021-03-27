import React, { useReducer } from "react";
import themeReducer from "./ThemeReducer";
import { SET_DARK_THEME, SET_LIGHT_THEME } from "./ThemeConstants";

export var ThemeContext = React.createContext();

var initialValue = {
  backgroundColor: "#fff",
  btnColor: "#b28451",
  textColor: "#999",
};

const ThemeProvider = ({ children }) => {
  var [state, dispatch] = useReducer(themeReducer, initialValue);
  var actions = {
    setLightTheme: () => dispatch({ type: SET_LIGHT_THEME }),
    setDarkTheme: () => dispatch({ type: SET_DARK_THEME }),
  };
  return (
    <ThemeContext.Provider value={{ theme: state, ...actions }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
