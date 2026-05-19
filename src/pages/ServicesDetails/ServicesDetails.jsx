import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

import servicesArray from "../../DataJs/services.js";

const ServicesDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setServiceDetails(servicesArray);
  }, []);

  const findServiceDetails = serviceDetails.find(
    (serviceItem) => serviceItem.id === parseInt(id),
  );

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
          padding: "60px 0",
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
                    // src="/assets/img/service/service_details.jpg"
                    src={findServiceDetails && findServiceDetails.img}
                    alt="Service Imagee"
                    style={{ width: "789px", height: "500px" }}
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">
                    {findServiceDetails && findServiceDetails.title}
                  </h2>
                  <p>{findServiceDetails?.description?.[0]}</p>

                  <p className="mb-30">
                    {findServiceDetails?.description?.[1]}
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="th-video">
                        <img
                          className="w-100"
                          src={
                            findServiceDetails &&
                            findServiceDetails.videoSection.image
                          }
                          alt="service"
                        />
                        <Link
                          // to="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          to={
                            findServiceDetails &&
                            findServiceDetails.videoSection.videoUrl
                          }
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h3 className="h4 mb-20">
                        {findServiceDetails &&
                          findServiceDetails.checklistTitle}
                      </h3>
                      <div className="checklist style3">
                        <ul>
                          {findServiceDetails?.checklist?.map((item, index) => (
                            <li key={index}>
                              <i className="fas fa-octagon-check"></i> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4">
                    {findServiceDetails && findServiceDetails.extraDescription}
                  </p>
                  <h3 className="h4 mb-20">
                    {findServiceDetails && findServiceDetails.benefitsTitle}
                  </h3>
                  <div className="service-feature-wrap">
                    {findServiceDetails?.features?.map((feature, index) => (
                      <div className="service-feature" key={index}>
                        <div className="service-feature_icon">
                          <img src={feature.icon} alt="icon" />
                        </div>

                        <div className="media-body">
                          <h4 className="service-feature_title">
                            {feature.title}
                          </h4>

                          <p className="service-feature_text">{feature.text}</p>
                        </div>
                      </div>
                    ))}
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
                          How long should Link business plan be?
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
                    {/* <ul className="menu">
                      <li>
                        <Link to={`/service-details/${service.id}`}>Web Development</Link>
                      </li>
                      <li>
                        <Link to="/service-details">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Business Analysis</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Softwer Services</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Mechine Learning</Link>
                      </li>
                    </ul> */}
                    {/* <ul className="menu">
                      {servicesArray.map((service) => (
                        <li key={service.id}>
                          <Link to={`/services/service-details/${service.id}`}>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                    <ul className="menu">
                      {servicesArray.map((service) => (
                        <li key={service.id}>
                          <NavLink
                            to={`/services/service-details/${service.id}`}
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            {service.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="widget widget_download d-none">
                  <h4 className="widget_title">Download Brochure</h4>
                  <div className="download-widget-wrap">
                    <Link to="/service-details" className="th-btn">
                      <i className="fa-light fa-file-pdf me-2"></i>DOWNLOAD PDF
                    </Link>
                    <Link to="/service-details" className="th-btn style5">
                      <i className="fa-light fa-file-lines me-2"></i>DOWNLOAD
                      DOC
                    </Link>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .menu li a.active {
    background: #684df4;
    color: #fff;
  }
`;

export default ServicesDetails;
