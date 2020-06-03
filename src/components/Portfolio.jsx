import React, { useState, useEffect } from "react";
import Axios from "axios";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";
import Allocation from "./Allocation";

const Portfolio = () => {
  const [errors, setErrors] = useState(false);
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      const res = await Axios.get(
        `http://127.0.0.1:8000/portfolio/portfolio_wallet/`,
        requestOptions
      );
      console.log(res);
      if (mounted) {
        setCurrencies({
          id: res.data.id,
          user: res.data.user,
          currencies: res.data.assets.map((asset) => {
            return {
              id: asset.id,
              name: asset.assets_in.name,
              cod: asset.assets_in.cod,
              logo: asset.assets_in.logo,
              price: asset.assets_in.price,
              balance: asset.balance,
            };
          }),
          total: res.data.total,
        });
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [postAsset, deleteAsset]);

  function postAsset(id, balance) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        assets_in: id,
        balance: balance,
        portfolio: currencies.id,
      }),
    };
    fetch(`http://127.0.0.1:8000/asset_user/`, requestOptions).then((res) =>
      res.json()
    );
    // .catch((err) => setErrors(err));
  }
  function deleteAsset(id) {
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
  }
  const valueTotal = [];
  const total =
    currencies.currencies !== undefined &&
    currencies.currencies
      .map(
        ({ balance, price }) => ([...valueTotal], parseFloat(balance * price))
      )
      .reduce((a, b) => a + b, 0);

  return (
    currencies.currencies !== undefined && (
      <div className="portfolio-container">
        <div className="total">
          <p className="fiat">$</p>
          &nbsp;
          <p>
            {total.toLocaleString(undefined, {
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
        <AddCurrency currencies={currencies} postAsset={postAsset} />

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
