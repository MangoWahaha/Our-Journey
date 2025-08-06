import "../../styles/layout/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" />
        <p>Destinyond</p>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/character">Character</Link>
        <Link to="/news">News</Link>
      </div>

      <div className="actions">
        <span class="material-symbols-outlined">language</span>
        <i className="fa-solid fa-share-nodes"></i>
        <div className="auth">
          <p>Log In</p>
          <i className="fa-solid fa-circle-user"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
