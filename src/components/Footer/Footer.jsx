import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer-wrapper footer-layout1">
        <div className="footer-top">
          <div className="logo-bg"></div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3">
                <div className="footer-logo">
                  <Link className="icon-masking" to="/">
                    <span
                      className="mask-icon"
                      style={{
                        WebkitMaskImage: "url(/assets/img/logo1.png)",
                        maskImage: "url(/assets/img/logo1.png)",
                      }}
                    ></span>

                    {/* <img src="/assets/img/logo-white.svg" alt="logo" /> */}
                    <img src="/assets/img/logo1.png" alt="logo" />
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-xl-9">
                <div className="footer-contact-wrap">
                  {/* Phone */}
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-phone"></i>
                    </div>

                    <div className="media-body">
                      <span className="footer-contact_text">
                        Quick Call Us:
                      </span>

                      <Link
                        to="tel:01767567797"
                        className="footer-contact_link"
                      >
                        01767567797
                      </Link>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-envelope"></i>
                    </div>

                    <div className="media-body">
                      <span className="footer-contact_text">Mail Us On:</span>

                      <Link
                        to="mailto:info@healixsoft.com"
                        className="footer-contact_link"
                      >
                        info@healixsoft.com
                      </Link>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="footer-contact">
                    <div className="footer-contact_icon">
                      <i className="fas fa-location-dot"></i>
                    </div>

                    <div className="media-body">
                      <span className="footer-contact_text">
                        Visit Location:
                      </span>

                      <Link
                        to="https://www.google.com/maps"
                        className="footer-contact_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Gaital, Kishoreganj.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Widget Area */}
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              {/* About Company */}
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Company</h3>

                  <p className="about-text">
                    Professionally redefine transparent ROI through low-risk
                    high-yield imperatives. Progressively create empowered cost
                    effective users via team driven.
                  </p>

                  {/* Social Icons */}
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

              {/* Contact Us */}
              {/* <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>

                  <div className="th-widget-contact">
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-phone"></i>
                      </div>

                      <div className="media-body">
                        <p className="contact-feature_label">Phone Number</p>

                        <Link
                          to="tel:01767567797"
                          className="contact-feature_link text-white"
                        >
                          01767567797
                        </Link>
                      </div>
                    </div>

                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-envelope"></i>
                      </div>

                      <div className="media-body">
                        <p className="contact-feature_label">Email address</p>

                        <Link
                          to="mailto:info@healixsoft.com"
                          className="contact-feature_link text-white"
                        >
                          info@healixsoft.com
                        </Link>
                      </div>
                    </div>

                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>

                      <div className="media-body">
                        <p className="contact-feature_label">Office location</p>

                        <Link
                          to="https://www.google.com/maps"
                          className="contact-feature_link text-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          54 Flemington, USA
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Quick Links */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>

                  <ul className="menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Essential Links */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Essential Links</h3>

                  <ul className="menu">
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Get in touch!</h3>

                  <div className="newsletter-widget">
                    <p className="footer-text">
                      Subscribe to our upcoming latest article and news
                      resources. Sign up today for hints, tips and the latest
                      product news.
                    </p>

                    <form className="newsletter-form">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email address"
                          required
                        />
                      </div>

                      <button type="submit" className="icon-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-wrap bg-title">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright"></i>
                  2025 <Link to="#">Themeholy</Link>. All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-6 text-end d-none d-lg-block">
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link to="/terms">Terms & Condition</Link>
                    </li>

                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <div className="shape-left">
          <img src="/assets/img/shape/footer_shape_2.svg" alt="shape" />
        </div>

        <div className="shape-right">
          <div className="particle-1" id="particle-5"></div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer-layout1 .logo-bg:before {
    content: "";

    background-color: #e1eaff !important;
  }
`;

export default Footer;
