//outlet is a reqired import from react-router-dom
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "/Users/nellylopez/bootcamp/homework/homework-20/React-Portfolio/React-Portfolio/src/components/style.css";

import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#EDE3E4" }}>
      <Navbar />

      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
