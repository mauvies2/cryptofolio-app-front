import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddBalance = (props) => {
  // Destructure desired variable from props
  const { id, logo, cod, name, price } = props.currSelected;

  // Initialize balance to empty
  const initialBalance = { balance: "" };
  const [balance, setBalance] = useState(initialBalance);

  // Grab value from input and set it to balance
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBalance({ ...balance, [name]: value });
  };

  return (
    <div className="add-balance-container">
      {cod !== undefined && (
        <form
          key={cod}
          onSubmit={(event) => {
            event.preventDefault();
            // Don't allow empty field
            if (!balance.balance) return;
            // Send post fetch to parent component through props
            props.postAsset(id, balance.balance);
            // Set balance to its initial state
            setBalance(initialBalance);
            // Set asset selected state to its itinial state
            props.emptyCurrSelected();
          }}
        >
          <div className="currency">
            <div className="cod-name-symbol">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div className="cod-name">
                <div>{cod}</div>
                <div>{name}</div>
              </div>
            </div>
            <div className="currency-prop">{price.toFixed(2)}</div>

            {/* 
            // Color 24h price change to green 
            <div
                  className="currency-prop"
                  style={{
                    color:
                      curr !== undefined &&
                      parseInt(curr.change) > 0 &&
                      "green",
                  }}
                >
                  {curr.change}%
                </div> */}

            <div className="currency-prop">
              <div className="add-input add-balance">
                <input
                  type="text"
                  className="search-bar"
                  name="balance"
                  placeholder="...balance"
                  autoComplete="off"
                  value={balance.balance}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="currency-prop">
              <button className="add-asset-with-balance">+</button>
            </div>
            <div className="currency-prop"></div>
            <div className="delete-curr">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  props.emptyCurrSelected();
                }}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddBalance;
