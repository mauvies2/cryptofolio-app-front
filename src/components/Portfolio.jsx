import React from "react";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";

const Portfolio = (props) => {
  const { currencies } = props;
  // console.log(currencies.currencies);

  const totalValue = () => {
    const valueTotal = [];
    return props.currencies.currencies
      .map(
        ({ balance, price }) => ([...valueTotal], parseFloat(balance * price))
      )
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };
  // console.log(totalValue());
  return (
    <div className="portfolio-container">
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
      <AddCurrency />
      {props.currencies.currencies.map((currency) => (
        <Currency key={currency.cod} currency={currency} />
      ))}
    </div>
  );
};

export default Portfolio;
