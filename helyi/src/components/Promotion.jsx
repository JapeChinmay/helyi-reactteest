import React from "react";
import phone from "../assets/phone.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

const Promotion = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "225px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        background:
          "linear-gradient(91.18deg, #FFD776 5.04%, #F8AA5A 38.01%, #F38844 91.88%)",
        paddingRight: "20px",
      }}
    >
      <img
        src={phone}
        alt="phone"
        style={{ height: "70%", objectFit: "contain", marginTop: "25px" }}
      />

      <div
        className="heading"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <h2
          style={{
            fontWeight: "800",
            fontSize: "2rem",
            margin: "0",
          }}
        >
          Get It Now!
        </h2>
        <p style={{ margin: "0", fontSize: "1rem" }}>
          Join Helyi and be a part of this revolution where we connect small
          towns in India!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <img
            src={googleplay}
            alt="googleplay"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <img
            src={appstore}
            alt="appstore"
            style={{ height: "50px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
