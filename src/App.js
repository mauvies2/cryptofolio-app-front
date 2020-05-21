import React, { useState, useEffect } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import ETH from "./img/ETH.png";
import XRP from "./img/XRP.png";
import BTC from "./img/BTC.png";
import LTC from "./img/LTC.png";
import EOS from "./img/EOS.png";

const App = () => {
  const [currencies, setCurrencies] = useState({
    currencies: [
      {
        logo: BTC,
        cod: "BTC",
        name: "bitcoin",
        price: "9015.11",
        change: "1.24",
        balance: "",
      },
      {
        logo: ETH,
        cod: "ETH",
        name: "ethereum",
        price: "187.47",
        change: "-0.67",
        balance: "6.15",
      },
      {
        logo: XRP,
        cod: "XRP",
        name: "ripple",
        price: "0.20",
        change: "-1.40",
        balance: "401.74",
      },
      {
        logo: LTC,
        cod: "LTC",
        name: "litecoin",
        price: "44.41",
        change: "+2.47",
        balance: "10",
      },
      {
        logo: EOS,
        cod: "EOS",
        name: "eos",
        price: "2.57",
        change: "0.47",
        balance: "54",
      },
      {
        logo: BTC,
        cod: "ADA",
        name: "cardano",
        price: "0.049",
        change: "1.24",
        balance: "444",
      },
      {
        logo: ETH,
        cod: "BNB",
        name: "binance",
        price: "14.57",
        change: "-0.67",
        balance: "",
      },
    ],
  });

  useEffect(() => {
    setCurrencies(currencies);
  }, [currencies]);

  const updatePortfolio = (cod, balance) => {
    setCurrencies(
      currencies.currencies.map((curr) =>
        curr.cod === cod ? (curr.balance = balance) : curr
      )
    );
    console.log(currencies.currencies);
  };

  // console.log(currencies);

  return (
    <div className="app">
      <Navigation />
      <Main currencies={currencies} updatePortfolio={updatePortfolio} />
    </div>
  );
};

export default App;
