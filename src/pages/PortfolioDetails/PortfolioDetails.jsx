import React from "react";
import { Link } from "react-router-dom";

const PortfolioDetails = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
           padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Project Details</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Project Details</li>
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
                    src="assets/img/project/project_details.jpg"
                    alt="Project Imagee"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">IT Consultency</h2>
                  <p className="">
                    Interactively implement top-line ROI vis-Link-vis 24/7
                    e-markets. Assertively communicate web-enabled catalysts for
                    change through low-risk high-yield functionalities. Quickly
                    optimize maintainable data for virtual interfaces.
                    Phosfluorescently monetize cost effective ROI before
                    leveraged sources. Holisticly envisioneer technically sound
                    imperatives without just in time networks.
                  </p>
                  <div className="project-inner-box mb-40">
                    <h3 className="box-title">The challenge of project</h3>
                    <p className="">
                      Authoritatively scale business meta-services before
                      client-based technologies. Collaboratively strategize
                      synergistic scenarios rather than flexible action items.
                      Continually deliver market positioning convergence and
                      mission-critical infrastructures.
                    </p>
                    <div className="row gy-4 align-items-center">
                      <div className="col-md-5">
                        <img
                          className="w-100 rounded-3"
                          src="assets/img/project/project_inner_1.jpg"
                          alt="project"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-badge-check"></i> It is Link long
                              established fact that reader will
                            </li>
                            <li>
                              <i className="fas fa-badge-check"></i> There are many
                              variations of passages
                            </li>
                            <li>
                              <i className="fas fa-badge-check"></i> All the Lorem
                              Ipsum generators
                            </li>
                            <li>
                              <i className="fas fa-badge-check"></i> Asearch for
                              'lorem ipsum' will uncover many
                            </li>
                            <li>
                              <i className="fas fa-badge-check"></i> injected humour
                              words which
                            </li>
                            <li>
                              <i className="fas fa-badge-check"></i> There are many
                              variations of passages of
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-inner-box">
                    <h3 className="box-title">The result of project</h3>
                    <p className="mb-3">
                      Objectively utilize client-based e-service after corporate
                      niche markets. Dynamically morph compelling channels
                      vis-Link-vis multifunctional interfaces. Credibly
                      administrate wireless opportunities after B2B materials.
                      Phosfluorescently engineer flexible "outside the box"
                      thinking through process-centric web services.
                      Progressively target multidisciplinary.
                    </p>
                    <div className="row gy-4 align-items-center">
                      <div className="col-md-6">
                        <img
                          className="w-100 rounded-3"
                          src="assets/img/project/project_inner_2.jpg"
                          alt="project"
                        />
                      </div>
                      <div className="col-md-6">
                        <img
                          className="w-100 rounded-3"
                          src="assets/img/project/project_inner_3.jpg"
                          alt="project"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_info">
                  <h3 className="widget_title">Project Information</h3>
                  <div className="project-info-list">
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div className="media-body">
                        <p className="contact-feature_label">Clients:</p>
                        <Link
                          to="https://www.trustpilot.com/"
                          className="contact-feature_link"
                        >
                          David Jackson
                        </Link>
                      </div>
                    </div>
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-folder-open"></i>
                      </div>
                      <div className="media-body">
                        <p className="contact-feature_label">Category:</p>
                        <Link to="project.html" className="contact-feature_link">
                          IT Technology
                        </Link>
                      </div>
                    </div>
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-calendar-days"></i>
                      </div>
                      <div className="media-body">
                        <p className="contact-feature_label">Date</p>
                        <span className="contact-feature_link">20 Sep, 2024</span>
                      </div>
                    </div>
                    <div className="contact-feature">
                      <div className="icon-btn">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="media-body">
                        <p className="contact-feature_label">Address:</p>
                        <Link to="project.html" className="contact-feature_link">
                          55 Main Address, USA
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget_download">
                  <h4 className="widget_title">Download Brochure</h4>
                  <div className="download-widget-wrap">
                    <Link to="service-details.html" className="th-btn">
                      <i className="fa-light fa-file-pdf me-2"></i>DOWNLOAD PDF
                    </Link>
                    <Link to="service-details.html" className="th-btn style5">
                      <i className="fa-light fa-file-lines me-2"></i>DOWNLOAD DOC
                    </Link>
                  </div>
                </div>
                <div
                  className="widget widget_banner"
                  data-bg-src="assets/img/bg/widget_banner.jpg"
                >
                  <div className="widget-banner">
                    <span className="text">CONTACT US NOW</span>
                    <h2 className="title">You Need Help?</h2>
                    <Link to="/contact" className="th-btn style3">
                      GET A QUOTE<i className="fas fa-arrow-right ms-2"></i>
                    </Link>
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

export default PortfolioDetails;
