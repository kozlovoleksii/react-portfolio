import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ServicesModal = ({ item, isActive, closeModal }) => {
    
  return (
    <div className={`service-modal ${isActive ? "active" : ""}`} onClick={closeModal}>
      <div className="service-modal-body" onClick={(e) => e.stopPropagation()}>
        <IoIosCloseCircleOutline
          className="modal-close-btn"
          onClick={closeModal}
        />
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.discription}</p>
        <h4>{item.text}</h4>
        <ul>
          {item.list.map((info, index) => (
            <li key={index}>
              <FaCheck className="check-icon"/>
              {info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
