import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddBalance from "./AddBalance";

const AddCurrency = (props) => {
  // SET INITIAL STATE OF SEARCH ASSET FIELD
  const initialAddState = { name: "" };
  const [curr, setCurr] = useState(initialAddState);

  // SET INITIAL STATE OF SELECTED ASSET TO ADD
  //// We need to includes all keys from currencies object
  const [currSelected, setCurrSelected] = useState({});
  // useEffect(() => {
  //   setCurrSelected(props.currSelected);
  // }, [props]);
  // CATCH EVENT AND CHANGE THE SEARCH ASSET NAME STATE
  //// We catch the event and destructure it's value into name and value variables which we use to set the new state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurr({ ...curr, [name]: value });
    // console.log(curr);
  };

  // ON FORM SUBMIT WE USE PROPS TO FILTER CURRENCIES ARRAY TO THE OBJECT/ASSET MATCHED BY COD OR NAME AND WITHOUT A BALANCE VALUE
  const selectCurr = ({ name }) => {
    // console.log(name);
    setCurrSelected(
      props.currencies.currencies.filter((curr) => {
        return (
          (curr.cod === name.toUpperCase() ||
            curr.name === name.toLowerCase()) &&
          curr.balance === ""
        );
      })
    );
    props.currencies.currencies.map(
      (curr) =>
        (curr.cod === name.toUpperCase() || curr.name === name.toLowerCase()) &&
        curr.balance > 0 &&
        alert("You already own this asset")
    );
  };

  // console.log(currSelected);
  // CREATE HIGHLIGHT EFFECT WHEN FOCUS ON SEARCH ASSET INPUT
  //// First we set the state (selected or not)
  const [input, setInput] = useState(false);
  //// If selected then add desired border style :)
  const borderOnFocus = {
    border: input ? "2px solid #6c64e8" : "none",
  };
  // console.log(currSelected);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // We don't allow empty queries
          if (!curr.name) return;
          selectCurr(curr);
          // Vaciamos el form
          setCurr(initialAddState);
        }}
      >
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
      <AddBalance
        currSelected={currSelected}
        updatePortfolio={props.updatePortfolio}
      />
    </div>
  );
};

export default AddCurrency;
