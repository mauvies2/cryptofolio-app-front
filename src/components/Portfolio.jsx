import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";
import Allocation from "./Allocation";

const Portfolio = (props) => {
  const { currencies } = props.currencies;
  const [total, setTotal] = useState("");

  const totalValue = () => {
    const valueTotal = [];
    return currencies
      .map(
        ({ balance, price }) => ([...valueTotal], parseFloat(balance * price))
      )
      .reduce((a, b) => a + b, 0);
  };

  useEffect(() => {
    setTotal(totalValue);
  }, [totalValue]);

  return (
    <div className="portfolio-container">
      <div className="total">
        <p className="fiat">$</p>
        &nbsp;
        <p>
          {totalValue().toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </p>
      </div>
      <div className="number-own-assets">
        <p>
          {currencies.filter((currency) => currency.balance > 0).length} Assets
        </p>
      </div>
      <Allocation currencies={currencies} total={total} />
      <AddCurrency
        currencies={props.currencies}
        updatePortfolio={props.updatePortfolio}
      />

      {currencies.map((currency) => (
        <Currency
          total={total}
          key={currency.cod}
          currency={currency}
          updatePortfolio={props.updatePortfolio}
        />
      ))}
    </div>
  );
};

export default Portfolio;
