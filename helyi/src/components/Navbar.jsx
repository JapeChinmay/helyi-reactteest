import React from "react";
import logo from "../assets/logo.jpg";
import location from "../assets/location.png";
import cart from "../assets/cart.png";
import heart from "../assets/heart.png";
import user from "../assets/user.png";
import locationDropdown from "../assets/location-dropdown.png";
import userdropdown from "../assets/userdropdown.png";

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
        height: "50px",
        top: 0,
        left: 0,
        position: "fixed",
        color: "black",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1rem",
          alignItems: "center",
          listStyle: "none",
          gap: "1rem",
          fontSize: "bold",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "3rem", marginRight: "1rem" }}
        />

        <div
          style={{
            marginLeft: "4px",
            marginRight: "4px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <img
            src={location}
            alt="location-logo"
            style={{ height: "26px", top: "1rem", left: "6px" }}
          />
          <li>Select Location</li>
          <img src={locationDropdown} alt="dropdown" />
        </div>
        <li>Helyi for Franchise</li>
        <li>Helyi for Partner</li>
        <li>Helyi for Merchant</li>
        <li>Helyi Smart</li>
        <li style={{ marginRight: "3rem" }}>Contact Us</li>
        <li>
          <img src={cart} alt="cart" style={{ marginRight: "2rem" }} />
        </li>
        <li>
          <img src={heart} alt="heart" style={{ marginRight: "2rem" }} />
        </li>
        <li
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <img
            src={user}
            alt="User Icon"
            style={{ height: "2rem", marginRight: "0.5rem" }}
          />
          <p>Chinmay Jape</p>
          <img
            style={{ marginLeft: "2px" }}
            src={userdropdown}
            alt="userdropddown"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
