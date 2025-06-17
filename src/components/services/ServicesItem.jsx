import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ServicesModal from "./ServicesModal";

const ServicesItem = ({ services }) => {
  const [activeModalItem, setActiveModalItem] = useState(false);

  function openModal(index) {
    setActiveModalItem(index);
  }

  function closeModal(){
    setActiveModalItem(true)
  }

  return (
    <>
      {services.map((item, index) => (
        <li className="services-container" key={index}>
          <div className="service-card" onClick={() => openModal(index)}>
            <item.icon className="services-icon" />
            <h3>{item.title}</h3>
            <div className="learn-more-btn">
              Learn More
              <FaArrowRight className="learn-more-icon" />
            </div>
          </div>

          <ServicesModal item={item} isActive={activeModalItem === index} closeModal={closeModal}/>
        </li>
      ))}
    </>
  );
};

export default ServicesItem;
