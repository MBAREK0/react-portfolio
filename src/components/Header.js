import { useState} from "react";


const   Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function menuHandler() {
    setMenuOpen(!menuOpen);
  }







  return (
    <header id="header" className="dark1">
      <div className="container">
        <div className="header-container">
          <div className="logo"><a href="#intro">HANNACHI</a>.</div>
          <div className="header-nav">
            <div className={"mobile-menu-icon " + (menuOpen ? "active-mobile-menu" : "")} onClick={() => setMenuOpen(!menuOpen)}>
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
            </div>
            <div className={"header-nav-container " + (menuOpen ? "active-mobile-menu" : "")}>
              <ul className="header-nav-list">
                <li className="header-nav-item"><a href="#intro" onClick={menuHandler}>Home</a></li>
                <li className="header-nav-item"><a href="#about" onClick={menuHandler}>About</a></li>
                <li className="header-nav-item"><a href="#experiences" onClick={menuHandler}>Experiences</a></li>
                <li className="header-nav-item"><a href="#educations" onClick={menuHandler}>Educations</a></li>
                <li className="header-nav-item"><a href="#certificates" onClick={menuHandler}>Certificates</a></li>
                <li className="header-nav-item"><a href="#contact" onClick={menuHandler}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;