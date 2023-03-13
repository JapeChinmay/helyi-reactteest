import React from "react";
import logo from "../assets/logo.jpg";
import location from "../assets/location.png";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        width: "1920px",
        height: "96px",
        top: 0,
        left: 0,
        position: "fixed",
        color: "black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "3rem", marginRight: "1rem" }}
          />
          <img
            src={location}
            alt="location-logo"
            style={{ width: "20px", height: "26px", top: "1rem", left: "6px" }}
          />
        </div>
      </div>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "2rem",

          listStyle: "none",
          gap: "1rem",
        }}
      >
        <li>Select Location</li>
        <li>Helyi for Franchise</li>
        <li>Helyi for Partner</li>
        <li>Helyi for Merchant</li>
        <li>Helyi Smart</li>
        <li>Contact Us</li>
        <li>
          <i
            className="fas fa-shopping-cart"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </li>
        <li>
          <i className="far fa-heart" style={{ fontSize: "1.5rem" }}></i>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/path/to/user-icon.png"
            alt="User Icon"
            style={{ height: "2rem", marginRight: "0.5rem" }}
          />
          <p>Chinmay Jape</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
