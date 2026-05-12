import React from "react";
import { Link } from "react-router-dom";

const ServicesDetails = () => {
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
            <h1 className="breadcumb-title">Services Details</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Services Details</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single">
                <div className="page-img">
                  <img
                    src="assets/img/service/service_details.jpg"
                    alt="Service Imagee"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">Web Development</h2>
                  <p>
                    Globally optimize highly efficient solution whereas
                    open-source application. Completely strategize quality
                    internal or "organic" sources for virtual e-business.
                    Phosfluorescently re-engineer enterprise markets via
                    value-added networks. Seamlessly restore inexpensive
                    e-markets vis-a-vis corporate intellectual capital.
                    Holisticly reinvent compelling niche markets via scalable
                    strategic.
                  </p>
                  <p className="mb-30">
                    Authoritatively scale business meta-services before
                    client-based technologies. Collaboratively strategize
                    synergistic scenarios rather than flexible action items.
                    Continually deliver market positioning convergence and
                    mission-critical infrastructures.
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="th-video">
                        <img
                          className="w-100"
                          src="assets/img/service/service_inner_1.jpg"
                          alt="service"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h3 className="h4 mb-20">We Serve The Best Work</h3>
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check"></i> Up am
                            intention on dependent questions
                          </li>
                          <li>
                            <i className="fas fa-octagon-check"></i> Surrounded
                            affronting favourable
                          </li>
                          <li>
                            <i className="fas fa-octagon-check"></i> Sed ut
                            perspiciatis unde omnis iste natus
                          </li>
                          <li>
                            <i className="fas fa-octagon-check"></i> Special
                            Careness Risk Free
                          </li>
                          <li>
                            <i className="fas fa-octagon-check"></i> Bibend
                            auctor nisi elit volume are beguiled
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4">
                    Credibly brand accurate data after user friendly ROI.
                    Professionally negotiate inexpensive markets and team driven
                    scenarios. Interactively seize wireless e-tailers after
                    resource maximizing content. Collaboratively leverage
                    existing.
                  </p>
                  <h3 className="h4 mb-20">Benefits With Our Service</h3>
                  <div className="service-feature-wrap">
                    <div className="service-feature">
                      <div className="service-feature_icon">
                        <img
                          src="assets/img/icon/service_feature_1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="media-body">
                        <h4 className="service-feature_title">
                          Flexible Solutions
                        </h4>
                        <p className="service-feature_text">
                          Completely grow multimedia based content before global
                          scenarios.
                        </p>
                      </div>
                    </div>
                    <div className="service-feature">
                      <div className="service-feature_icon">
                        <img
                          src="assets/img/icon/service_feature_2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="media-body">
                        <h4 className="service-feature_title">
                          24/7 Unlimited Support
                        </h4>
                        <p className="service-feature_text">
                          Completely grow multimedia based content before global
                          scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="h4 mt-35 mb-4">Questions About Service</h3>
                  <div className="accordion-area accordion" id="faqAccordion">
                    <div className="accordion-card style2 active">
                      <div className="accordion-header" id="collapse-item-1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          Where can I get analytics help?
                        </button>
                      </div>
                      <div
                        id="collapse-1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="collapse-item-1"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="faq-text">
                            Synergistically evisculate ubiquitous niches whereas
                            holistic resources. Assertively evolve prospective
                            methods of empowerment before diverse web-readiness.
                            Seamlessly incentivize market-driven schemas rather
                            than clicks-and-mortar benefits.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card style2">
                      <div className="accordion-header" id="collapse-item-2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          How long should a business plan be?
                        </button>
                      </div>
                      <div
                        id="collapse-2"
                        className="accordion-collapse collapse"
                        aria-labelledby="collapse-item-2"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="faq-text">
                            Synergistically evisculate ubiquitous niches whereas
                            holistic resources. Assertively evolve prospective
                            methods of empowerment before diverse web-readiness.
                            Seamlessly incentivize market-driven schemas rather
                            than clicks-and-mortar benefits.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card style2">
                      <div className="accordion-header" id="collapse-item-3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          How To Choose A Good QA Consultant?
                        </button>
                      </div>
                      <div
                        id="collapse-3"
                        className="accordion-collapse collapse"
                        aria-labelledby="collapse-item-3"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="faq-text">
                            Synergistically evisculate ubiquitous niches whereas
                            holistic resources. Assertively evolve prospective
                            methods of empowerment before diverse web-readiness.
                            Seamlessly incentivize market-driven schemas rather
                            than clicks-and-mortar benefits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_nav_menu">
                  <h3 className="widget_title">All Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="service-details.html">Web Development</a>
                      </li>
                      <li>
                        <a href="service-details.html">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="service-details.html">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="service-details.html">Business Analysis</a>
                      </li>
                      <li>
                        <a href="service-details.html">Softwer Services</a>
                      </li>
                      <li>
                        <a href="service-details.html">Mechine Learning</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget widget_download d-none">
                  <h4 className="widget_title">Download Brochure</h4>
                  <div className="download-widget-wrap">
                    <a href="service-details.html" className="th-btn">
                      <i className="fa-light fa-file-pdf me-2"></i>DOWNLOAD PDF
                    </a>
                    <a href="service-details.html" className="th-btn style5">
                      <i className="fa-light fa-file-lines me-2"></i>DOWNLOAD
                      DOC
                    </a>
                  </div>
                </div>

                <div
                  className="widget widget_banner"
                  style={{
                    backgroundImage: "url(/assets/img/bg/widget_banner.jpg)",
                  }}
                >
                  <div className="widget-banner">
                    <span className="text">CONTACT US NOW</span>
                    <h2 className="title">You Need Help?</h2>
                    <a href="contact.html" className="th-btn style3">
                      GET A QUOTE<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;
