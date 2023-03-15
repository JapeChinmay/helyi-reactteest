import React from "react";
import upi from "../assets/upi.png";
import "./Mathod.css";

const Method = () => {
  return (
    <div
      className="overall-main"
      style={{
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        width: "70%",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "50%",
        }}
      >
        <ul
          style={{
            color: "black",
            margin: 0,
            padding: 0,
            listStyle: "none",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <li>Wallets</li>
          <li>COD</li>
          <li>Pay Later</li>
          <li>Credit or Debit Card</li>
          <li className="upi-bhim">UPI/BHIM</li>
        </ul>
      </div>
      <div
        className="main-upi"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div
          className="add-upi-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            background: "white",
            borderRadius: "3px",
            margin: "auto",
            height: "320px",
            width: "700px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              className="add-upi-icon"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 10px",
              }}
            >
              <div className="upi-icon">
                <img src={upi} alt="Logo" />
              </div>
            </div>
            <div className="add-upi-title">
              <h2
                style={{
                  margin: 0,
                  color: "black",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Add New UPI ID
              </h2>
            </div>
          </div>
          <div>
            <label style={{ color: "black" }}>Enter upi ID</label>
            <div style={{ display: "flex", flexDirection: "col" }}>
              <textarea>eg.abc@ybl</textarea>
              <button>verify&pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Method;
