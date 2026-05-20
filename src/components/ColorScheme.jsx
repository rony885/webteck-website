import React from "react";
import { Link } from "react-router-dom";

const ColorScheme = () => {
  return (
    <div className="color-scheme-wrap active">
      <button className="switchIcon">
        <i className="fa-solid fa-palette"></i>
      </button>
      <h4 className="color-scheme-wrap-title">
        <i className="far fa-palette me-2"></i>Style Swicher
      </h4>
      <div className="color-switch-btns">
        <button data-color="#3E66F3">
          <i className="fa-solid fa-droplet"></i>
        </button>
        <button data-color="#684DF4">
          <i className="fa-solid fa-droplet"></i>
        </button>
        <button data-color="#008080">
          <i className="fa-solid fa-droplet"></i>
        </button>
        <button data-color="#323F7C">
          <i className="fa-solid fa-droplet"></i>
        </button>
        <button data-color="#FC3737">
          <i className="fa-solid fa-droplet"></i>
        </button>
        <button data-color="#8a2be2">
          <i className="fa-solid fa-droplet"></i>
        </button>
      </div>
      <Link to="#" className="th-btn text-center w-100">
        <i className="fa fa-shopping-cart me-2"></i> Purchase
      </Link>
    </div>
  );
};

export default ColorScheme;
