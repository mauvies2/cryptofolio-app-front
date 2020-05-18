import React from "react";
import Currency from "./Currency";

const Portfolio = (props) => {
  const { currencies } = props;
  console.log(currencies.currencies);

  const totalValue = () => {
    const valueTotal = [];
    return props.currencies.currencies
      .map(({ value }) => ([...valueTotal], parseFloat(value)))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };
  console.log(totalValue());
  return (
    <div>
      <div className="total">
        <p className="fiat">$</p>&nbsp;
        <p>{totalValue()}</p>
      </div>
      <div className="categories">
        <p className="aaa">Asset name</p>
        <p>Price ($)</p>
        <p>24h</p>
        <p>Balance</p>
        <p>Value ($)</p>
        {/* <p>Portfolio %</p> */}
      </div>
      {props.currencies.currencies.map((currency) => (
        <Currency key={currency.cod} currency={currency} />
      ))}
    </div>
  );
};

export default Portfolio;
