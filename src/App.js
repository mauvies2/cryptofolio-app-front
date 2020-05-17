import React, { useState } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => {
  const [currencies, setCurrencies] = useState({
    currencies: [
      {
        cod: "BTC",
        name: "bitcoin",
        price: "9015.11",
        balance: "0.26",
        value: "2343.12",
      },
      {
        cod: "ETH",
        name: "ethereum",
        price: "187.47",
        balance: "6.15",
        value: "1192.95",
      },
      {
        cod: "XRP",
        name: "ripple",
        price: "0.20",
        balance: "401.74",
        value: "80.35",
      },
    ],
  });
  return (
    <div className="app">
      <Navigation />
      <Main currencies={currencies} />
    </div>
  );
};

export default App;
