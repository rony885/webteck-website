import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

const Mobilemenu = ({ menuOpen, closeMenu }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const location = useLocation();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Pages menu active
  const isPagesActive = [
    "/team",
    "/team-details",
    "/gallery",
    "/pricing",
    "/faq",
  ].includes(location.pathname);

  return (
    <Wrapper>
      <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
        <div className="th-menu-area text-center">
          {/* Close Button */}
          <button className="th-menu-toggle" onClick={closeMenu}>
            <i className="fal fa-times"></i>
          </button>

          {/* Logo */}
          <div className="mobile-logo">
            <Link className="icon-masking" to="/" onClick={closeMenu}>
              <span
                className="mask-icon bg-mask"
                style={{
                  // maskImage: 'url("/assets/img/logo.svg")',
                  // WebkitMaskImage: 'url("/assets/img/logo.svg")',
                  maskImage: 'url("/assets/img/logo1.png")',
                  WebkitMaskImage: 'url("/assets/img/logo1.png")',
                }}
              ></span>

              <img src="/assets/img/logo1.png" alt="Webteck" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="th-mobile-menu">
            <ul>
              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>

              {/* Services */}
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>

              {/* Pages Dropdown */}
              <li
                className={`menu-item-has-children th-item-has-children ${
                  activeMenu === "pages" ? "open th-active" : ""
                }`}
              >
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("pages");
                  }}
                  className={isPagesActive ? "active" : ""}
                >
                  Pages
                  <span className="th-mean-expand"></span>
                </Link>

                <ul
                  className="sub-menu th-submenu"
                  style={{
                    display: activeMenu === "pages" ? "block" : "none",
                  }}
                >
                  <li>
                    <NavLink to="/team" onClick={closeMenu}>
                      Team
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/team-details" onClick={closeMenu}>
                      Team Details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/gallery" onClick={closeMenu}>
                      Gallery
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/pricing" onClick={closeMenu}>
                      Pricing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/faq" onClick={closeMenu}>
                      Faq Page
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Blog */}
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="th-social">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              to="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </Link>

            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>

            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              to="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .th-mobile-menu a.active {
    color: #684df4 !important;
  }

  .th-mobile-menu a:hover {
    color: #684df4;
  }

  .th-social a {
    border: 1px solid #684df4 !important;
  }
`;

export default Mobilemenu;
