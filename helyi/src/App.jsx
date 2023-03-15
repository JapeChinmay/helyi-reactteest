import "./App.css";
import Footer from "./components/Footer";
import Mathod from "./components/Mathod";
import Navbar from "./components/Navbar";
import PaymentPage from "./components/Payment";
import Promotion from "./components/Promotion";
import YourCart from "./components/YourCart";

function App() {
  return (
    <div
      className="main"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Navbar />
      <PaymentPage />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flex: "1",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", flex: "3" }}>
          <Mathod />
          <YourCart />
        </div>
        <Promotion />
        <Footer />
      </div>
    </div>
  );
}

export default App;
