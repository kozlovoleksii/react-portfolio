import { Link } from "react-scroll";
import "./Navigation.css";

const Navigation = ({menuOpen, hideMobileNav}) => {
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" }
];

  return (
    <nav className={menuOpen  ? "nav active": "nav"}>
      <div className={menuOpen?"nav-menu active":"nav-menu "}>
        {NAV_ITEMS.map((item, index) => (
          <Link 
            to={item.id} 
            key={index} 
            className="nav-link"
            onClick={hideMobileNav}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
