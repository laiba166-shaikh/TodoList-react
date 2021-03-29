import React, { useState, useContext } from "react";
import "./Switcher.css";
import { ThemeContext } from "./../../Context/ThemeContext";

const Switcher = () => {
  var { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const setTheme = () => {
    checked ? setLightTheme() : setDarkTheme();
    setChecked(!checked);
  };
  return (
    <label className="switcher">
      <input type="checkbox" onClick={setTheme}></input>
      <span className="slider" style={{ background: theme.btnBgColor }} />
    </label>
  );
};

export default Switcher;
