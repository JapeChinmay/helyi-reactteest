import React from "react";
import logos from "../assets/logos.png";
import logostore from "../assets/storelogo.png";
import warehouse from "../assets/warehouse.png";
import "./Fotter.css";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        background: "#FFFFFF",
        width: "100%",
        height: "50%",
        color: "#000000",
      }}
    >
      <div
        className="contact-us"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: "1 1 0",
          justifyContent: "flex-start",
        }}
      >
        <h2 style={{ color: "#F38844" }}>Contact Us</h2>
        <p style={{ fontSize: "20px", fontWeight: "400" }}>
          Karthikeya Business Solutions Vijaywada, Andhra Pradesh
        </p>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>
          Pincode: 564 543
        </h3>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>
          Tel: +91 98745 66432, 040 3324 4352
        </h3>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>
          Email: info@helyi.com
        </h3>

        <img src={logos} alt="logos" style={{ width: "296px" }} />
      </div>
      <div
        className="quick-links"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: "1 1 0",
        }}
      >
        <h2 style={{ color: "#F38844" }}>Quick Links</h2>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>Home</h3>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>Join US</h3>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>Merchant Log In</h3>
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>
          Franchise Log In
        </h3>

        <img src={logostore} alt="logostore" style={{ width: "296px" }} />
        <h3 style={{ fontSize: "20px", fontWeight: "400" }}>
          Copyright 2020 - All Rights Reserved - Helyi
        </h3>
      </div>
      <div
        className="subscribe"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: "1 1 0",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#F38844" }}>
          Subscribe Us
        </h2>
        <textarea
          placeholder="Enter Your Email ID"
          style={{
            width: "425px",
            height: "15px",
            fontSize: "20px",
            borderRadius: "4px",
            background: "#EDEDED",
          }}
        />
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#F38844" }}>
          Get App On Your Mobile
        </h2>
        <textarea
          placeholder="Enter Your 10 digits"
          style={{
            width: "425px",
            height: "15px",
            fontSize: "20px",
            borderRadius: "4px",
            background: "#EDEDED",
          }}
        />
        <button
          style={{ background: "#82B53F", color: "#FFFFFF", fontWeight: "700" }}
        >
          Get Link
        </button>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p>Privacy Policy </p>
          <p>T&amp;C</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
