import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
