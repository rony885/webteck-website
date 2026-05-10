import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="th-header header-layout3">
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link className="icon-masking" to="/">
                    <span
                      style={{
                        WebkitMaskImage: "url(/assets/img/logo.svg)",
                        maskImage: "url(/assets/img/logo.svg)",
                      }}
                      className="mask-icon"
                    ></span>
                    <img src="/assets/img/logo.svg" alt="Webteck" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="">
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link to="#">Shop</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="shop">Shop</Link>
                            </li>
                            <li>
                              <Link to="shop-details">Shop Details</Link>
                            </li>
                            <li>
                              <Link to="cart">Cart Page</Link>
                            </li>
                            <li>
                              <Link to="checkout">Checkout</Link>
                            </li>
                            <li>
                              <Link to="wishlist">Wishlist</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="team">Team</Link>
                        </li>
                        <li>
                          <Link to="team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link to="project">Project</Link>
                        </li>
                        <li>
                          <Link to="project-details">Project Details</Link>
                        </li>
                        <li>
                          <Link to="gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link to="faq">Faq Page</Link>
                        </li>
                        <li>
                          <Link to="error">Error Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-button">
                  <button
                    type="button"
                    className="icon-btn sideMenuToggler d-inline-block d-lg-none"
                  >
                    <i className="far fa-shopping-cart"></i>
                    <span className="badge">5</span>
                  </button>
                  <button
                    type="button"
                    className="th-menu-toggle d-inline-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="header-button">
                  <button type="button" className="icon-btn searchBoxToggler">
                    <i className="far fa-search"></i>
                  </button>
                  <Link to="contact" className="th-btn shadow-none">
                    Make Appointment<i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                  <button type="button" className="icon-btn sideMenuToggler">
                    <i className="far fa-shopping-cart"></i>
                    <span className="badge">5</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
