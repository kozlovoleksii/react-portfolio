import "./Header.css";
import Navigation from "../navigation/Navigation";
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const hideMobileNav = ()=>{
    setMenuOpen(!menuOpen)
  }

  const isMobile = window.innerWidth <= 980;

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Oleksii
          </a>
          <RemoveScroll enabled={menuOpen && isMobile} >
            <Navigation menuOpen={menuOpen} hideMobileNav={hideMobileNav}/>
          </RemoveScroll>
          <div className="nav-menu-btn" onClick={toggleMobileMenu}>
            {menuOpen ? <VscChromeClose /> : <VscMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
