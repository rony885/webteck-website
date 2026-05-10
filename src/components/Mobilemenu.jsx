import React from "react";
import { Link } from "react-router-dom";

const Mobilemenu = ({ menuOpen, closeMenu }) => {
  return (
    // <div className="th-menu-wrapper">
    <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={closeMenu}>
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <Link className="icon-masking" to="/">
            <span
              // data-mask-src="assets/img/logo.svg"
              style={{
                backgroundImage: `url(/assets/img/logo.svg)`,
              }}
              className="mask-icon"
            ></span>
            <img src="/assets/img/logo.svg" alt="Webteck" />
          </Link>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li className="menu-item-has-children mega-menu-wrap">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to="/services">Services</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to="#">Pages</Link>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <Link to="#">Shop</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/shop-details">Shop Details</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart Page</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/team-details">Team Details</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
                <li>
                  <Link to="/project-details">Project Details</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/faq">Faq Page</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
