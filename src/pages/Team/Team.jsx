import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Team</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space-top">
        <div className="container">
          <div className="row gy-40 align-items-center">
            <div className="col-xl-5">
              <div className="team-featured-img">
                <img src="assets/img/team/team_featured.jpg" alt="Team" />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="team-featured">
                <h2 className="team-title">Rachna Sheth</h2>
                <p className="team-desig">CEO, of Webteck Company</p>
                <p className="team-bio">
                  Enthusiastically parallel task 2.0 niches wherea end-to-end
                  strategic theme area. Dramatically harness e-business ROI and
                  granular service. Quickly target enabled internal organic
                  sources after cross-unit methods of empowerment. Seamlessly
                  e-enable intuitive applications before end-to-end
                  applications. Uniquely matrix seamless supply chains for
                  resource-leveling.
                </p>
                <div className="team-contact-wrap">
                  <div className="team-contact">
                    <div className="icon-btn">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Phone Number</h6>
                      <Link className="team-contact_link" to="tel:+19356542587">
                        +1 935-654-2587
                      </Link>
                    </div>
                  </div>
                  <div className="team-contact">
                    <div className="icon-btn">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Email Address</h6>
                      <Link
                        className="team-contact_link"
                        to="mailto:info@rachna.com"
                      >
                        info@rachna.com
                      </Link>
                    </div>
                  </div>
                  <div className="team-contact">
                    <div className="icon-btn">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Phone Number</h6>
                      <span className="team-contact_link">
                        10:00AM - 4:00PM
                      </span>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="th-btn">
                  MAKE AN APPOINTMENT
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <div
                  className="icon-masking me-2"
                  style={{
                    WebkitMaskImage:
                      "url(/assets/img/theme-img/title_shape_1.svg)",
                    maskImage: "url(/assets/img/theme-img/title_shape_1.svg)",
                  }}
                ></div>
                <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />
              </div>
              ALL MEMBERS
            </span>
            <h2 className="sec-title">
              See Our Skilled Expert <span className="text-theme">Team</span>
            </h2>
          </div>
          <div className="row gy-40">
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_1.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p1"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Rayan Athels</Link>
                  </h3>
                  <span className="team-desig">Founder & CEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p2"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Alex Furnandes</Link>
                  </h3>
                  <span className="team-desig">Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_3.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p3"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Mary Crispy</Link>
                  </h3>
                  <span className="team-desig">Cheif Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_4.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p4"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Henry Joshep</Link>
                  </h3>
                  <span className="team-desig">Product Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_5.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p5"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Sanjida Carlose</Link>
                  </h3>
                  <span className="team-desig">IT Consultant</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_6.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p6"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Marian Widjya</Link>
                  </h3>
                  <span className="team-desig">Head Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_7.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p7"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Peter Parker</Link>
                  </h3>
                  <span className="team-desig">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="th-team team-card">
                <div className="team-img">
                  <img src="assets/img/team/team_1_8.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="box-particle" id="team-p8"></div>
                  <div className="team-social">
                    <Link target="_blank" to="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link target="_blank" to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link target="_blank" to="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/team-details">Grayson Gabriel</Link>
                  </h3>
                  <span className="team-desig">UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
