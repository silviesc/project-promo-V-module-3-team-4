import logo from "../images/logo-adalab.png";

const Header = () => {
    return (
        <header className="header">
        <a href="#"><i className="fa-solid fa-laptop-code icon"></i></a>
        <p className="text">Proyectos Molones</p>
        <a href="https://adalab.es/" target="_blank"><img src={logo} alt="logo" className="logo" /></a>
      </header>
    )
}

export default Header;