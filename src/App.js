import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => (
  <div className="app">
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);

export default App;
