import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddBalance from "./AddBalance";

const AddCurrency = (props) => {
  const portfolioId = props.currencies.id;
  const postAddCurrency = (name) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    fetch(`http://127.0.0.1:8000/asset/?search=${name}`, requestOptions).then(
      (response) => {
        response.json().then((json) => {
          json.map((asset) => {
            setCurrSelected({
              id: asset.id,
              name: asset.name,
              cod: asset.cod,
              logo: asset.logo,
              price: asset.price,
              balance: "",
            });
          });
        });
      }
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurr({ ...curr, [name]: value });
  };
  // SET INITIAL STATE OF SEARCH ASSET FIELD
  const initialAddState = { name: "" };
  const [curr, setCurr] = useState(initialAddState);

  // SET INITIAL STATE OF SELECTED ASSET TO ADD
  const initialCurrSelected = [];
  const [currSelected, setCurrSelected] = useState(initialCurrSelected);

  const matchAsset = ({ name }) => {
    // We don't allow empty queries
    console.log(
      props.currencies.currencies.filter(
        (curr) =>
          curr.cod === name.toUpperCase() || curr.name === name.toLowerCase()
        //   &&
        // curr.balance > 0
      )
    );
    setCurr(initialAddState);
    if (!name) return;
    if (
      props.currencies.currencies.filter(
        (curr) =>
          (curr.cod === name.toUpperCase() ||
            curr.name === name.toLowerCase()) &&
          curr.balance > 0
      ).length !== 0
    ) {
      return alert("You already own this asset");
    }

    return postAddCurrency(name);
  };

  // CREATE HIGHLIGHT EFFECT WHEN FOCUS ON SEARCH ASSET INPUT
  //// First we set the state (selected or not)
  const [input, setInput] = useState(false);
  //// If selected then add desired border style :)
  const borderOnFocus = {
    border: input ? "2px solid #6c64e8" : "none",
    padding: "0",
  };

  const emptyCurrSelected = () => {
    setCurrSelected(initialCurrSelected);
  };

  return (
    <div>
      <div className="add-currency">
        <div className="add-input" style={borderOnFocus}>
          <input
            type="text"
            className="search-bar"
            name="name"
            placeholder="Add asset..."
            value={curr.name}
            onChange={handleInputChange}
            onFocus={() => setInput(true)}
            onBlur={() => setInput(false)}
            autoComplete="off"
          />
        </div>
        <button className="add" onClick={() => matchAsset(curr)}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
      <div className="categories">
        <p className="aaa">Asset</p>
        <p>Price ($)</p>
        {/* <p className="change">24h</p> */}
        <p>Balance</p>
        <p>Value ($)</p>
        <p className="percentage">Balance</p>
        <p className="delete-curr"></p>
      </div>
      <AddBalance
        currSelected={currSelected}
        portfolioId={portfolioId}
        emptyCurrSelected={emptyCurrSelected}
      />
    </div>
  );
};

export default AddCurrency;
