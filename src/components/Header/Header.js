import React from "react";
import "./Header.css";

const Header = ({ color }) => {
  return (
    <div className="heading">
      <h2 style={{ color }}>My toDo List</h2>
    </div>
  );
};

export default Header;
