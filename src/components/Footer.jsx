import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="footer-wrapper"
      style={{
        // outline: "solid purple 2px",
        marginTop: "auto",
      }}
    >
      <footer className="py-3 my-4" style={{ marginTop: "auto" }}>
        <ul className="nav justify-content-center border-bottom  pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://github.com/nlopez39"
              className="nav-link px-2 text-body-secondary"
            >
              <FaGithub size={50} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/nelly-lopez/"
              className="nav-link px-2 text-body-secondary"
            >
              <FaLinkedin size={50} />
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 text-body-secondary">
              <FaTwitter size={50} />
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
}
