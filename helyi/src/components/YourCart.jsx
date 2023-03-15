import React from "react";
import CartItem from "./CartItem";
import Coupons from "./Coupons";
import Subtotal from "./Subtotal";

const YourCart = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          color: "black",
          gap: "0.5rem",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ margin: 0 }}>Your Cart</h3>
        <label style={{ margin: 0 }}>2 Items</label>
      </div>
      <CartItem />
      <CartItem />
      <Coupons style={{ marginBottom: "1rem" }} />
      <Subtotal style={{ marginTop: "1rem" }} />
    </div>
  );
};

export default YourCart;
