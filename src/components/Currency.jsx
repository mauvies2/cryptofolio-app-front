import React from "react";

const Currency = (props) => {
  const currency = props.currency;
  // useEffect(() => {
  //   setCurr(props.currency);
  // }, [props]);
  const changeColor = {
    color: parseInt(currency.change) > 0 && "green",
  };

  return (
    <div className="portfolio">
      {currency.balance > 0 && (
        <div className="currency">
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
          <div className="currency-prop balance">{currency.balance}</div>
          <div className="currency-prop">
            {(currency.price * currency.balance).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
