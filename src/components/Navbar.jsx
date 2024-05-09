import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
function Navbar() {
  const currentPage = useLocation().pathname;
  return (
    <div
      className="d-flex justify-content-between navbar navbar-expand-lg p-4 main-navbar"
      // style={{ backgroundColor: "#8E443D", color: "#EDE3E4" }}
    >
      <Header />
      <nav>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
              style={{
                color: "#ede3e4",

                fontFamily: "Tenor Sans, sans-serif",
              }}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Project"
              className={
                currentPage === "/Project" ? "nav-link active" : "nav-link"
              }
              style={{ color: "#ede3e4", fontFamily: "Tenor Sans, sans-serif" }}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
              style={{ color: "#ede3e4", fontFamily: "Tenor Sans, sans-serif" }}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
              style={{ color: "#ede3e4", fontFamily: "Tenor Sans, sans-serif" }}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
