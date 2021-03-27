import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodosContainer from "./components/TodosContainer/TodosContainer";
import Filters from "./components/Filters/Filters";
import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  // var { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext);
  // console.log(theme.backgroundColor, theme.btnColor, theme.textColor);
  return (
    <div className="container">
      {
        // <button onClick={setLightTheme}>SET LIGHT THEME</button>
        // <button onClick={setDarkTheme}>SET Dark THEME</button>
      }
      <div className="App">
        <Header />
        <Form />
        <TodosContainer />
        <Filters />
      </div>
    </div>
  );
};

export default App;
