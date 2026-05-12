
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      // data-bg-src="assets/img/bg/footer_bg_1.jpg"
      style={{
        backgroundImage: "url('/assets/img/bg/footer_bg_1.jpg')",
      }}
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src="/assets/img/logo-small.svg" alt="Webteck" />
                    </Link>
                  </div>

                  <p className="about-text">
                    Professionally redefine transparent ROI through low-risk
                    high-yield imperatives. Progressively create empowered, cost
                    effective users via team driven.
                  </p>

                  <div className="th-social">
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
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
                        to="tel:+19088000393"
                        className="contact-feature_link"
                      >
                        +190-8800-0393
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
                        to="mailto:info@webteck.com"
                        className="contact-feature_link"
                      >
                        info@webteck.com
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
                        className="contact-feature_link"
                      >
                        54 Flemington, USA
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <ul className="menu">
                  <li>
                    <Link to="/terms-condition">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Get in touch!</h3>

                <div className="newsletter-widget">
                  <p className="footer-text">
                    Subscribe to our upcoming latest article and news resources.
                    Sign up today for hints, tips and the latest product news.
                  </p>

                  <form className="newsletter-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
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

      <div className="copyright-wrap bg-theme">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2025{" "}
                <Link to="#">Themeholy</Link>. All Rights Reserved.
              </p>
            </div>

            <div className="col-lg-6 text-end d-none d-lg-block">
              <ul className="footer-links">
                <li>
                  <Link to="about.html">Terms & Condition</Link>
                </li>

                <li>
                  <Link to="about.html">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;