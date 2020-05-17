import React from "react";
import Currency from "./Currency";

const Portfolio = (props) => {
  // console.log(props.currencies.currencies);
  return props.currencies.currencies.map((currency) => (
    <Currency key={currency.cod} currency={currency} />
  ));
};

export default Portfolio;
