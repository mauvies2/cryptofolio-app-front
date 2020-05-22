import React, { useState } from "react";

const Currency = (props) => {
  const currency = props.currency;

  const changeColor = {
    color: parseInt(currency.change) > 0 && "green",
  };

  const [currSelected, setCurrSelected] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setBalance({ ...balance, [name]: value });
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
            <div className="add-input edit-balance">
              <input
                type="text"
                className="search-bar"
                name="balance"
                placeholder="...balance"
                autoComplete="off"
                value={currency.balance}
                onChange={handleInputChange}
                onBlur={() => setCurrSelected(false)}
                autoFocus
              />
            </div>
          )}

          <div className="currency-prop">
            {(currency.price * currency.balance).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
