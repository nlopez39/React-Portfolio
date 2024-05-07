import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
function Navbar() {
  // const currentPage = useLocation().pathname;
  return (
    <div
      className="d-flex justify-content-between navbar navbar-expand-lg bg-light"
      style={{ outline: "red solid 2px" }}
    >
      <Header />
      <nav>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Project" className="nav-link active">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
