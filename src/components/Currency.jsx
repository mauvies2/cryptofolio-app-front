import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Currency = (props) => {
  // Grab currency from props
  const { currency } = props;

  // Set the state for asset which is going to be modify
  const [currSelected, setCurrSelected] = useState(false);

  // Initialize balance state to the current asset balance
  const [balance, setBalance] = useState(currency.balance);

  // Patch fetch request to modify the balance of an asset
  const putBalance = (id, balance) => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ balance: balance }),
    };
    fetch(`https://back.capitofolio.com/asset_user/${id}/`, requestOptions)
      .then(() => props.updateBalance())
      .catch((err) => err);
  };

  // Portfolio asset percetange allocation
  const percentage = () => {
    return (((currency.price * currency.balance) / props.total) * 100).toFixed(
      1
    );
  };

  useEffect(() => {}, [props, balance]);

  // Grab input value and set it to balance state
  const handleInputChange = (event) => {
    const { value } = event.target;
    setBalance(value);
  };

  return (
    <div className="portfolio">
      {/* Render assets with a positive balance */}
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
          {/* If asset is not selected render current balance */}
          {!currSelected ? (
            <div
              className="currency-prop balance"
              onClick={() => setCurrSelected(true)}
            >
              <div
                className="edit-current-balance"
                onClick={() => setCurrSelected(true)}
              >
                {currency.balance}
              </div>
            </div>
          ) : (
            // Else, render edit balance input
            <form
              className="add-input edit-balance"
              key={currency.cod}
              onSubmit={(event) => {
                event.preventDefault();
                // Function pass to parent component to trigger hook

                // Reset asset-selected to initial state (false)
                setCurrSelected(false);
                // Call fetch function to patch balance field
                putBalance(currency.id, balance);
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
                // Pass delete fetch to parent component Portfolio via props
                props.deleteAsset(currency.id);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;

// // Change color of 24h change field to green if positive
// const changeColor = {
//   color: parseInt(currency.change) > 0 && "green",
// };
