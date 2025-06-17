import React from "react";

const PortfolioItem = ({ item }) => {
  return (
    <a href={item.link} target="_blank" className="portfolio-img-card">
      <div className="img-card">
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.description}</span>
        </div>
        <img src={item.imgSrc} alt={item.title} />
      </div>
    </a>
  );
};

export default PortfolioItem;
