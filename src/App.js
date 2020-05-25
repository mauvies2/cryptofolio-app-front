import React, { useState } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => {
  let json = {
    id: 1,
    user: 1,
    assets: [
      {
        id: 1,
        assets_in: {
          name: "Bitcoin",
          cod: "BTC",
          logo:
            "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/4caf2b16a0174e26a3482cea69c34cba.png",
          price: 9668.015347786959,
        },
        balance: 966.8015347786959,
      },
      {
        id: 2,
        assets_in: {
          name: "US Dollar",
          cod: "USD",
          logo:
            "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/0a4185f21a034a7cb866ba7076d8c73b.png",
          price: 1,
        },
        balance: 5000,
      },
    ],
    total: 5966.801534778696,
  };

  let userAssets = {
    id: json.id,
    user: json.user,
    currencies: json.assets.map((asset) => {
      return {
        id: asset.id,
        name: asset.assets_in.name,
        cod: asset.assets_in.cod,
        logo: asset.assets_in.logo,
        price: asset.assets_in.price,
        balance: asset.balance / asset.assets_in.price,
      };
    }),
    total: json.total,
  };
  const [currencies, setCurrencies] = useState(userAssets);

  // {
  //   currencies: [
  //     {
  //       logo: BTC,
  //       cod: "BTC",
  //       name: "bitcoin",
  //       price: "9015.11",
  //       change: "1.24",
  //       balance: "",
  //     },
  //     {
  //       logo: ETH,
  //       cod: "ETH",
  //       name: "ethereum",
  //       price: "187.47",
  //       change: "-0.67",
  //       balance: "",
  //     },
  //     {
  //       logo: XRP,
  //       cod: "XRP",
  //       name: "ripple",
  //       price: "0.20",
  //       change: "-1.40",
  //       balance: "401.74",
  //     },
  //     {
  //       logo: LTC,
  //       cod: "LTC",
  //       name: "litecoin",
  //       price: "44.41",
  //       change: "+2.47",
  //       balance: "",
  //     },
  //     {
  //       logo: EOS,
  //       cod: "EOS",
  //       name: "eos",
  //       price: "2.57",
  //       change: "0.47",
  //       balance: "54",
  //     },
  //     {
  //       logo: BTC,
  //       cod: "ADA",
  //       name: "cardano",
  //       price: "0.049",
  //       change: "1.24",
  //       balance: "444",
  //     },
  //     {
  //       logo: ETH,
  //       cod: "BNB",
  //       name: "binance",
  //       price: "14.57",
  //       change: "-0.67",
  //       balance: "",
  //     },
  //   ],
  // }
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
