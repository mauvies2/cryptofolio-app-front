import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AddCurrency = (props) => {
  const initialAddState = { cod: "" };
  const [curr, setCurr] = useState(initialAddState);

  const [currSelected, setCurrSelected] = useState({
    currSelected: [
      {
        logo: "",
        cod: "",
        name: "",
        price: "",
        change: "",
        balance: "",
      },
    ],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurr({ ...curr, [name]: value });
  };
  const selectCurr = ({ cod }) => {
    console.log(cod);
    setCurrSelected(
      props.currencies.currencies.filter((curr) =>
        curr.cod === cod ? curr : ""
      )[0]
    );
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // No aceptamos campos vacios
          if (!curr.cod) return;
          selectCurr(curr);
          // Vaciamos el form
          setCurr(initialAddState);
        }}
      >
        <div className="add-currency">
          <div className="add-input">
            <input
              type="text"
              className="search-bar"
              name="cod"
              placeholder="Add new asset..."
              value={curr.cod}
              onChange={handleInputChange}
            />
          </div>
          <button className="add">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
      </form>
      <div className="categories">
        <p className="aaa">Asset name</p>
        <p>Price ($)</p>
        <p>24h</p>
        <p>Balance</p>
        <p>Value ($)</p>
        {/* <p>Portfolio %</p> */}
      </div>
      {currSelected != undefined && currSelected.cod && (
        <div className="currency">
          <div className="cod-name-symbol">
            <div>
              <img src={currSelected.logo} alt="logo" />
            </div>
            <div className="cod-name">
              <div>{currSelected.cod}</div>
              <div>{currSelected.name}</div>
            </div>
          </div>
          <div className="currency-prop">{currSelected.price}</div>
          <div className="currency-prop">{currSelected.change}%</div>
          <div className="currency-prop">
            <div className="add-input add-balance">
              <input
                type="text"
                className="search-bar"
                name="cod"
                placeholder="...add value"
                // value={curr.cod}
                // onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="currency-prop">
            <button className="add-asset-with-balance">+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCurrency;
