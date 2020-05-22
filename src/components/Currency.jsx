import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Currency = (props) => {
  const currency = props.currency;
  const [currSelected, setCurrSelected] = useState(false);
  const [balance, setBalance] = useState(currency.balance);

  const changeColor = {
    color: parseInt(currency.change) > 0 && "green",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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
              <div>{currency.name}</div>
            </div>
          </div>
          <div className="currency-prop">{currency.price}</div>
          <div className="currency-prop" style={changeColor}>
            {currency.change}%
          </div>
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
                props.updatePortfolio(currency.cod, balance);
                setCurrSelected(false);
                // Vaciamos el form
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
            {(currency.price * currency.balance).toFixed(2)}
          </div>
          <div className="delete-curr">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => props.updatePortfolio(currency.cod, "")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
