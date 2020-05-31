import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";
import Allocation from "./Allocation";

const Portfolio = () => {
  const [total, setTotal] = useState([]);
  const [errors, setErrors] = useState(false);
  const [currencies, setCurrencies] = useState({});

  async function fetchData() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    const res = await fetch(
      `http://127.0.0.1:8000/portfolio/portfolio_wallet/`,
      requestOptions
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
  const deleteAsset = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `http://127.0.0.1:8000/asset_user/${id}/`,
      requestOptions
    ).then((json) => console.log("hola", json));
  };
  useEffect(() => {
    fetchData();
  }, []);

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
        <AddCurrency currencies={currencies} />

        {currencies.currencies.map((currency) => (
          <Currency
            total={total}
            key={currency.cod}
            currency={currency}
            deleteAsset={deleteAsset}
          />
        ))}
      </div>
    )
  );
};

export default Portfolio;
