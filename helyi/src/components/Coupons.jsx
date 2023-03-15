import React from "react";
import "./Coupon.css";
import coupon from "../assets/coupon.png";

const Coupons = () => {
  return (
    <div
      className="border-c"
      style={{
        background: "#8E8E8E",
        width: "380px",
        height: "61px",

        color: "#8E8E8E",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "2rem",
      }}
    >
      <img src={coupon} style={{ marginRight: "10px" }} />
      <label style={{ padding: "10px" }}>Apply Coupons</label>
    </div>
  );
};

export default Coupons;
