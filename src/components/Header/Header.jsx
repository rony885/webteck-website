import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = ({ toggleMenu }) => {
  const location = useLocation();

  const isPagesActive = [
    "/team",
    "/team-details",
    "/gallery",
    "/pricing",
    "/faq",
  ].includes(location.pathname);

  return (
    <Wrapper>
      <header className="th-header header-layout2">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location"></i>54 NJ-12,
                      Flemington, United States
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <Link to="tel:+1539873657">+153-987-3657</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <Link to="mailto:info@webteck.com">info@webteck.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <span className="social-title">Follow Us On : </span>
                  <Link to="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="https://www.whatsapp.com/">
                    <i className="fab fa-whatsapp"></i>
                  </Link>

                  <Link to="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
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
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/about"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/services"
                        >
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/Portfolio"
                        >
                          Portfolio
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/blog"
                        >
                          Blog
                        </NavLink>
                      </li>

                      {/* <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="/team-details">Team Details</Link>
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
                      </li> */}
                      <li className="menu-item-has-children">
                        <Link to="#" className={isPagesActive ? "active" : ""}>
                          Pages
                        </Link>

                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/team">Team</NavLink>
                          </li>

                          <li>
                            <NavLink to="/team-details">Team Details</NavLink>
                          </li>

                          <li>
                            <NavLink to="/gallery">Gallery</NavLink>
                          </li>

                          <li>
                            <NavLink to="/pricing">Pricing</NavLink>
                          </li>

                          <li>
                            <NavLink to="/faq">Faq Page</NavLink>
                          </li>
                        </ul>
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
                    {/* ==== Bar button ==== */}
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <button
                      type="button"
                      className="icon-btn searchBoxToggler d-none"
                    >
                      <i className="far fa-search"></i>
                    </button>
                    <button
                      type="button"
                      className="icon-btn sideMenuToggler d-none"
                    >
                      <i className="far fa-shopping-cart"></i>
                      <span className="badge">5</span>
                    </button>
                    <Link to="/contact" className="th-btn shadow-none">
                      Contact<i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-menu ul li a.active {
    color: #684df4 !important;
  }

  .main-menu ul li a:hover {
    color: #684df4;
  }
`;

export default Header;
