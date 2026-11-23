
import "./Header.css";
import logo from "../assets/unify-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Unify" />
      </div>

      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/login">Iniciar sesión</Link>
        <button type="button">Registrarse</button>
      </nav>
    </header>
  );
}

export default Header;
