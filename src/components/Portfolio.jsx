import React, { useState, useEffect } from "react";
import Axios from "axios";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";
import Allocation from "./Allocation";
import { Redirect } from "react-router-dom";

const Portfolio = () => {
  // Set states
  const [errors, setErrors] = useState(false);

  // Set state for assets received from backend
  const [currencies, setCurrencies] = useState({});

  // Set state of variable to trigger the useEffect hook
  const [update, setUpdate] = useState(0);

  // Wrap GET fetch in useEffect hook to render every time is needed
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // We add the authorization property to the header
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      await Axios.get(
        `http://127.0.0.1:8000/portfolio/portfolio_wallet/`,
        requestOptions
        // Transform data to a desired structure and set it user portfolio assets (currencies)
      )
        .then((res) =>
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
          })
        )
        .catch((err) => {
          console.log(err);
          setErrors(true);
        });
    };
    fetchData();

    // Introduce update state as dependencies of useEffect hook
  }, [update]);

  // POST fetch request to add a new asset to portfolio
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
    fetch(`http://127.0.0.1:8000/asset_user/`, requestOptions).then((res) => {
      res.json();
      // Change update state to trigger the useEffect hook and fetch data again
      setUpdate(update + 1);
    });
    // .catch((err) => setErrors(err));
  }

  // DELETE fetch request to delete an asset
  function deleteAsset(id) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    fetch(`http://127.0.0.1:8000/asset_user/${id}/`, requestOptions).then(
      (json) => {
        // Change update state to trigger the useEffect hook and fetch data again
        setUpdate(update + 1);
      }
    );
  }

  // Obtain portfolio total value
  const total =
    currencies.currencies !== undefined &&
    currencies.currencies
      .map(({ balance, price }) => parseFloat(balance * price))
      .reduce((a, b) => a + b, 0);

  // Change update state to trigger useEffect hook
  const updateBalance = () => {
    setUpdate(update + 1);
  };

  // If fetch request throws an error redirect to login page
  if (errors) {
    return <Redirect to="/sign" />;
  }

  return (
    // Render if portfolio isn't undefined
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
              // Obtain total number of assets owned
              currencies.currencies.filter((currency) => currency.balance > 0)
                .length
            }{" "}
            Assets
          </p>
        </div>
        <Allocation currencies={currencies.currencies} total={total} />
        <AddCurrency currencies={currencies} postAsset={postAsset} />

        {currencies.currencies.filter((currency) => currency.balance > 0)
          .length !== 0 ? (
          // Render each asset
          currencies.currencies.map((currency) => (
            <Currency
              total={total}
              key={currency.id}
              currency={currency}
              deleteAsset={deleteAsset}
              updateBalance={updateBalance}
            />
          ))
        ) : (
          <div className="no-assets"> You have no assets. Start adding!</div>
        )}
      </div>
    )
  );
};

export default Portfolio;
