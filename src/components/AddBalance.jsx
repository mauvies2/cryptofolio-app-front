import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddBalance = (props) => {
  const initialBalance = { balance: "" };
  const [balance, setBalance] = useState(initialBalance);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBalance({ ...balance, [name]: value });
  };

  return (
    <div className="add-balance-container">
      {props.currSelected.map(
        (curr) =>
          curr.cod !== undefined && (
            <form
              key={curr.cod}
              onSubmit={(event) => {
                event.preventDefault();
                // We don't allow empty queries
                if (!balance.balance) return;
                props.updatePortfolio(curr.cod, balance.balance);
                // Vaciamos el form
                setBalance(initialBalance);
                props.emptyCurrSelected();
              }}
            >
              <div className="currency">
                <div className="cod-name-symbol">
                  <div>
                    <img src={curr.logo} alt="logo" />
                  </div>
                  <div className="cod-name">
                    <div>{curr.cod}</div>
                    <div>{curr.name}</div>
                  </div>
                </div>
                <div className="currency-prop">{curr.price}</div>
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
                </div>
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
                <div className="delete-curr">
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => props.emptyCurrSelected()}
                  />
                </div>
              </div>
            </form>
          )
      )}
    </div>
  );
};

export default AddBalance;
