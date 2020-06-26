import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddBalance from "./AddBalance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCurrency = (props) => {
  // Set initial state of query asset input
  const initialAddState = { name: "" };
  const [curr, setCurr] = useState(initialAddState);

  // Set initial state of selected asset to add
  const initialCurrSelected = [];
  const [currSelected, setCurrSelected] = useState(initialCurrSelected);

  const portfolioId = props.currencies.id;

  // Get fetch request to match asset after query
  const postAddCurrency = (name) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `https://back.capitofolio.com/asset/?search=${name}`,
      requestOptions
    ).then((response) => {
      response.json().then((json) => {
        json.map((asset) => {
          // Update asset selected state (currSelected) to queried asset
          return setCurrSelected({
            id: asset.id,
            name: asset.name,
            cod: asset.cod,
            logo: asset.logo,
            price: asset.price,
            balance: "",
          });
        });
      });
    });
  };

  // Grab input value and set state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurr({ ...curr, [name]: value });
  };

  const matchAsset = ({ name }) => {
    // After form submit the input state is reseted
    setCurr(initialAddState);
    // Don't allow empty queries
    if (!name) return;
    // Check if asset is already owned
    if (
      props.currencies.currencies.filter(
        (curr) =>
          (curr.cod === name.toUpperCase() ||
            curr.name.toLowerCase() === name.toLowerCase()) &&
          curr.balance > 0
      ).length !== 0
    ) {
      return toast.error("You already own this currency!");
    }
    // If not owned the fetch is called
    return postAddCurrency(name);
  };

  // Highlighted border when search bar is focused
  const [input, setInput] = useState(false);
  const borderOnFocus = {
    border: input ? "2px solid #6c64e8" : "none",
    padding: "0",
  };

  // To reset the state of asset selected
  const emptyCurrSelected = () => {
    setCurrSelected(initialCurrSelected);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // On submit the query is triggered
          matchAsset(curr);
        }}
      >
        <div className="add-currency">
          <div className="add-input" style={borderOnFocus}>
            <input
              type="text"
              className="search-bar"
              name="name"
              placeholder="Add cryptocurrency..."
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
      {(props.currencies.currencies.filter((currency) => currency.balance > 0)
        .length !== 0 ||
        currSelected.length !== 0) && (
        <div className="categories">
          <p className="aaa">Asset</p>
          <p className="price-title">Price ($)</p>
          {/* <p className="change">24h</p> */}
          <p>Own</p>
          <p>Value </p>
          <p className="percentage">%</p>
          <p className="delete-curr"></p>
        </div>
      )}

      <AddBalance
        currSelected={currSelected}
        portfolioId={portfolioId}
        emptyCurrSelected={emptyCurrSelected}
        postAsset={props.postAsset}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default AddCurrency;
