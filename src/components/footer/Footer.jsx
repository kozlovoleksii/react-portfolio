import "./Footer.css";
import { folowLinks, footerLinks } from "../../data/footerData";
import FooterLinkGroup from "./FooterLinkGroup";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Oleksii</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" links={footerLinks} />

        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={folowLinks} socialBlock/>
      </div>

      <p className="footer-copyright">
        © <span className="year">{currentYear}</span> by Oleksii. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
