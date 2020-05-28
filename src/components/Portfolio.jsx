import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";
import Allocation from "./Allocation";

const Portfolio = () => {
  const [total, setTotal] = useState([]);
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

  const postRequest = (prod) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prod),
    };
    fetch(
      "http://localhost:3004/product_list",
      requestOptions
    ).then((response) => response.json());
  };

  const updatePortfolio = (cod, balance) => {
    // updateRequest(cod, balance);
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

  const totalValue = () => {
    const valueTotal = [];
    return (
      currencies.currencies !== undefined &&
      currencies.currencies
        .map(
          ({ balance, price }) => ([...valueTotal], parseFloat(balance * price))
        )
        .reduce((a, b) => a + b, 0)
    );
  };

  useEffect(() => {
    setTotal(totalValue);
  }, [totalValue]);

  console.log(currencies);
  console.log(total);
  return (
    currencies.currencies !== undefined && (
      <div className="portfolio-container">
        <div className="total">
          <p className="fiat">$</p>
          &nbsp;
          <p>
            {totalValue().toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="number-own-assets">
          <p>
            {
              currencies.currencies.filter((currency) => currency.balance > 0)
                .length
            }{" "}
            Assets
          </p>
        </div>
        <Allocation currencies={currencies.currencies} total={total} />
        <AddCurrency
          currencies={currencies}
          updatePortfolio={updatePortfolio}
        />

        {currencies.currencies.map((currency) => (
          <Currency
            total={total}
            key={currency.cod}
            currency={currency}
            updatePortfolio={updatePortfolio}
          />
        ))}
      </div>
    )
  );
};

export default Portfolio;
