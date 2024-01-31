import logo from "../images/logo-adalab.png";

const Header = () => {
    return (
        <header className="header">
        <i className="fa-solid fa-laptop-code icon"></i>
        <p className="text">Proyectos Molones</p>
        <img src={logo} alt="logo" className="logo" />
      </header>
    )
}

export default Header;