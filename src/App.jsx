//outlet is a reqired import from react-router-dom
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/style.css";

import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#EDE3E4",
        // outline: "solid red 2px",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <main
        className="mx-3"
        style={{
          // outline: "solid green 2px",
          height: "100%",
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
