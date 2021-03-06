import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodosContainer from "./components/TodosContainer/TodosContainer";
import Filters from "./components/Filters/Filters";
import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  var { theme } = useContext(ThemeContext);
  // console.log(theme.backgroundColor, theme.btnColor, theme.textColor);
  return (
    <div className="container" style={{ background: theme.backgroundColor }}>
      <div
        className="app"
        style={{
          background: theme.backgroundColor,
          boxShadow: `0 5px 10px 5px rgba(0, 0, 0, 0.5)`,
        }}
      >
        <Header color={theme.textColor} />
        <Form
          color={theme.textColor}
          buttonColor={theme.btnTextColor}
          buttonBackground={theme.btnBgColor}
        />
        <TodosContainer />
        <Filters color={theme.textColor} />
      </div>
    </div>
  );
};

export default App;
