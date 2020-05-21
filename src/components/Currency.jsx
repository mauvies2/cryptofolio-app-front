import React, { useState, useEffect } from "react";

const Currency = (props) => {
  const [curr, setCurr] = useState(props.currency);
  // useEffect(() => {
  //   setCurr(props.currency);
  // }, [props]);
  const changeColor = {
    color: parseInt(props.currency.change) > 0 && "green",
  };

  // const { cod, name, change, price, balance, logo } = props.currency;
  return (
    <div className="portfolio">
      {curr.balance > 0 && (
        <div className="currency">
          <div className="cod-name-symbol">
            <div>
              <img src={curr.logo} alt="logo" />
            </div>
            <div className="cod-name">
              <div>{curr.cod}</div>
              <div>{curr.name}</div>
            </div>
          </div>
          <div className="currency-prop">{curr.price}</div>
          <div className="currency-prop" style={changeColor}>
            {curr.change}%
          </div>
          <div className="currency-prop balance">{curr.balance}</div>
          <div className="currency-prop">
            {(curr.price * curr.balance).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
