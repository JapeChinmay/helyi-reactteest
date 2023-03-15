import React from "react";

const Subtotal = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "2px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2px",
          }}
        >
          <h2 style={{ margin: 0 }}>Subtotal</h2>
          <label style={{ margin: 0, fontSize: "14px" }}>
            (Extra charges may apply)
          </label>
        </div>
        <label style={{ margin: 0 }}>345</label>
      </div>

      <button style={{ background: "#82B53F", height: "50px", width: "100%" }}>
        Make Payment
      </button>
    </div>
  );
};

export default Subtotal;
