import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Currency = (props) => {
  const { currency } = props;
  const [currSelected, setCurrSelected] = useState(false);
  const [balance, setBalance] = useState(currency.balance);

  // PUT FETCH REQUEST TO ADD BALANCE TO THE NEW ASSET
  const putBalance = (id, balance) => {
    console.log(balance);
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ balance: balance }),
    };
    fetch(
      `http://127.0.0.1:8000/asset_user/${id}/`,
      requestOptions
    ).then((json) => console.log("hola", json));
    // .catch((err) => setErrors(err));
  };

  const percentage = () => {
    return (((currency.price * currency.balance) / props.total) * 100).toFixed(
      1
    );
  };

  // const changeColor = {
  //   color: parseInt(currency.change) > 0 && "green",
  // };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBalance(value);
  };

  return (
    <div className="portfolio">
      {currency.balance > 0 && (
        <div className="currency" draggable>
          <div className="cod-name-symbol">
            <div>
              <img src={currency.logo} alt="logo" />
            </div>
            <div className="cod-name">
              <div>{currency.cod}</div>
              <div className="asset-name">{currency.name}</div>
            </div>
          </div>
          <div className="currency-prop">{currency.price.toFixed(2)}</div>
          {/* <div className="currency-prop" style={changeColor}>
            {currency.change}%
          </div> */}
          {!currSelected ? (
            <div
              className="currency-prop balance"
              onClick={() => setCurrSelected(true)}
            >
              {currency.balance}
            </div>
          ) : (
            <form
              className="add-input edit-balance"
              key={currency.cod}
              onSubmit={(event) => {
                event.preventDefault();
                // props.updatePortfolio(currency.cod, balance);
                setCurrSelected(false);
                putBalance(currency.id, balance);
                props.updateBalance();
                // Vaciamos el form //
              }}
            >
              <input
                type="text"
                className="search-bar"
                name="balance"
                placeholder="...balance"
                autoComplete="off"
                value={balance}
                onChange={handleInputChange}
                onBlur={() => setCurrSelected(false)}
                autoFocus
              />
            </form>
          )}

          <div className="currency-prop">
            {(currency.price * currency.balance).toFixed(1)}
          </div>
          <div className="currency-prop">{percentage()}</div>
          <div className="delete-curr">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                props.deleteAsset(currency.id);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
