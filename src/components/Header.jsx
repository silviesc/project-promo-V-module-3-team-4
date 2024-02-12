import logo from "../images/logo-adalab.png";

const Header = () => {
    return (
        <header className="header">
          <div className="header__container">
            <a href="#"><i className="fa-solid fa-laptop-code icon"></i></a>
            <p className="header__container--text">Proyectos Molones</p>
          </div>
          <a href="https://adalab.es/" target="_blank"><img src={logo} alt="logo" className="logo" /></a>
      </header>
    )
}

export default Header;