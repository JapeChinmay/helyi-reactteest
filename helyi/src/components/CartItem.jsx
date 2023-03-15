import React from "react";
import item from "../assets/item.png";

const CartItem = () => {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      }}
    >
      <img src={item} />
      <label>Fortune Chakki atta ...</label>
      <button
        style={{
          color: "white",
          background: "#82B53F",
          width: "80px",
          height: "34px",
          padding: 0,
        }}
      >
        Add
      </button>
      <label>343</label>
    </div>
  );
};

export default CartItem;
