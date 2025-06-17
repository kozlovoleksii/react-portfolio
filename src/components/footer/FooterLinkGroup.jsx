import React from "react";
import { Link } from "react-scroll";

const FooterLinkGroup = ({ title, links, socialBlock }) => {
  return (
    <div className={socialBlock ? "follow-group" : "info-group"}>
      <h3>{title}</h3>
      <ul className={socialBlock? "follow-group-list": "info-group-list"}>
        {links.map((link, index) => (
          <li className="follow-group-item" key={index}>

            {socialBlock ? (
              <a href={link.href} target="_blank">
                <link.icon />
              </a>
            ) : (
              <Link to={link.href} key={link.id}>{link.label}</Link>
            )}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
