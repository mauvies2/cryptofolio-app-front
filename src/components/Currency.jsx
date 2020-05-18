import React from "react";
// import BTC from "../img/BTC.png";
// import ETH from "../img/ETH.png";
// import XRP from "../img/XRP.png";
// import LTC from "../img/XRP.png";

const Currency = (props) => {
  // console.log(props.currency.cod);

  const changeColor = {
    color: parseInt(props.currency.change) > 0 && "green",
  };

  const { cod, name, change, price, balance, logo } = props.currency;
  return (
    <div className="portfolio">
      <div className="currency">
        <div className="cod-name-symbol">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="cod-name">
            <div>{cod}</div>
            <div>{name}</div>
          </div>
        </div>
        <div className="currency-prop">{price}</div>
        <div className="currency-prop" style={changeColor}>
          {change}%
        </div>
        <div className="currency-prop">{balance}</div>
        <div className="currency-prop">{(price * balance).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Currency;
