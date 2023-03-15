import React from "react";
import "./style.css";
import greenblock from "../assets/greenblock.png";

import line from "../assets/line.png";
import cart from "../assets/cart.png";
import location from "../assets/location.png";
import wallet from "../assets/wallet.png";

const PaymentPage = () => {
  return (
    <div className="payment-page" style={{ height: "50%" }}>
      <div className="container">
        <div className="column">
          <h1 style={{ top: "4px", color: "black", fontSize: "medium" }}>
            Select a Payment Method
          </h1>
          <div className="row">
            <div className="green-block-container">
              <img
                src={greenblock}
                alt="green-block"
                style={{ height: "40px", width: "40px" }}
              />
              <img
                src={cart}
                alt="cart"
                className="inner-image"
                style={{ zIndex: "1", height: "20px", width: "20px" }}
              />
            </div>
            <img
              src={line}
              alt="line"
              style={{ height: "5px", width: "10%", objectFit: "contain" }}
            />
            <div className="green-block-container">
              <img
                src={greenblock}
                alt="green-block"
                style={{ height: "40px", width: "40px" }}
              />
              <img
                src={location}
                alt="location"
                className="inner-image"
                style={{ zIndex: "1", height: "20px", width: "20px" }}
              />
            </div>
            <img
              src={line}
              alt="line"
              style={{ height: "5px", width: "10%", objectFit: "contain" }}
            />
            <img
              src={wallet}
              alt="wallet"
              style={{ height: "40px", width: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
