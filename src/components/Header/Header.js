import React from "react";
import Switcher from "../Switcher/Switcher";
import "./Header.css";

const Header = ({ color }) => {
  return (
    <div className="header">
      <h2 style={{ color }}>My toDo List</h2>
      <Switcher />
    </div>
  );
};

export default Header;
