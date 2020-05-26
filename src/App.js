import React, { useState, useEffect } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => {
  const [errors, setErrors] = useState(false);
  const [currencies, setCurrencies] = useState({});

  async function fetchData() {
    const res = await fetch(
      `http://127.0.0.1:8000/portfolio/portfolio_wallet/`
    );
    res
      .json()
      .then((json) =>
        setCurrencies({
          id: json.id,
          user: json.user,
          currencies: json.assets.map((asset) => {
            return {
              id: asset.id,
              name: asset.assets_in.name,
              cod: asset.assets_in.cod,
              logo: asset.assets_in.logo,
              price: asset.assets_in.price,
              balance: asset.balance,
            };
          }),
          total: json.total,
        })
      )
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(currencies);

  const updatePortfolio = (cod, balance) => {
    setCurrencies({
      currencies: currencies.currencies.map((currency) => {
        if (currency.cod === cod) {
          currency.balance = balance;
          return currency;
        }
        return currency;
      }),
    });
  };

  return (
    <div className="app">
      <Navigation />
      <Main currencies={currencies} updatePortfolio={updatePortfolio} />
    </div>
  );
};

export default App;
