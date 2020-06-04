import React from "react";

const Allocation = (props) => {
  // Get random color for asset allocation
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Set allocation percentaje to div width
  const allo = (price, balance) => {
    return {
      width: ((balance * price) / props.total) * 100 + "%",
      height: "100%",
      background: getRandomColor(),
    };
  };

  return (
    <div className="allocation-container">
      <div className="allocation">
        {/* The style function is called to the assets which balance is positives */}
        {props.currencies.map(
          (asset) =>
            asset.balance > 0 && (
              <div
                key={asset.cod}
                className="chartAsset"
                style={allo(asset.price, asset.balance)}
              ></div>
            )
        )}
      </div>
    </div>
  );
};

export default Allocation;
