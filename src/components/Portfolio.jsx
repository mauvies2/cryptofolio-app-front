import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";

const Portfolio = (props) => {
  const [curr, setCurr] = useState(props.currencies);
  // const { currencies } = props;
  // console.log(props.currencies);

  // console.log(props.currencies.currencies);

  // useEffect(() => {
  //   setCurr(props.currencies);
  // }, []);

  const totalValue = () => {
    const valueTotal = [];
    return curr.currencies
      .map(
        ({ balance, price }) => ([...valueTotal], parseFloat(balance * price))
      )
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };
  return (
    <div className="portfolio-container">
      <div className="total">
        <p className="fiat">$</p>&nbsp;
        <p>{totalValue()}</p>
      </div>
      <div className="number-own-assets">
        <p>
          {curr.currencies.filter((currency) => currency.balance > 0).length}{" "}
          Assets
        </p>
      </div>
      <AddCurrency
        currencies={props.currencies}
        updatePortfolio={props.updatePortfolio}
      />

      {curr.currencies.map((currency) => (
        <Currency key={currency.cod} currency={currency} />
      ))}
    </div>
  );
};

export default Portfolio;
