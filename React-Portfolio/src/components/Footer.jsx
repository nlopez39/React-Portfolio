import { FaGithub , FaLinkedin} from "react-icons/fa";
export default function Footer(){
    return (
        <div className="container">
        <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="https://github.com/nlopez39" className="nav-link px-2 text-body-secondary">
        <FaGithub size={50}/>
      </a></li>
      <li className="nav-item"><a href="https://www.linkedin.com/in/nelly-lopez/" className="nav-link px-2 text-body-secondary">
        <FaLinkedin size={50}/></a></li>
   
    </ul>
    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
                
        </div>
    );
};
<svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg>