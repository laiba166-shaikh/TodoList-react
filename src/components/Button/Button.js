import React from "react";
import "./Button.css";
import { useContext } from "react";
import { ThemeContext } from "./../../Context/ThemeContext";

const Button = ({ buttonText, click }) => {
  var { theme } = useContext(ThemeContext);
  return (
    <button
      className="btn"
      onClick={click}
      style={{ background: theme.btnBgColor, color: theme.btnTextColor }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
