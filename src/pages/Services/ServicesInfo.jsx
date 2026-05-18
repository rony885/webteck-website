import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import servicesArray from "../../DataJs/services.js";

const ServicesInfo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesArray);
  }, []);

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
            <h1 className="breadcumb-title">Services</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space" id="service-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  style={{
                    WebkitMaskImage:
                      "url(/assets/img/theme-img/title_shape_2.svg)",
                    maskImage: "url(/assets/img/theme-img/title_shape_2.svg)",
                  }}
                ></span>

                <img
                  src="/assets/img/theme-img/title_shape_2.svg"
                  alt="shape"
                />
              </div>
              OUR SERVICES
            </span>

            <h2 className="sec-title">
              What We <span className="text-theme fw-normal">Offer</span>
            </h2>
          </div>

          <div className="row gy-4">
            {services.map((service) => {
              return (
                <div key={service.id} className="col-md-6 col-xl-4">
                  <div className="service-card">
                    <div className="service-card_number">01</div>
                    <div className="shape-icon">
                      <img src={service.icon} alt="Icon" />
                      <span className="dots"></span>
                    </div>
                    <h3 className="box-title">
                     <Link to={`/services/service-details/${service.id}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p
                      className="service-card_text"
                      style={{ textAlign: "justify" }}
                    >
                      {service.description[0]}
                    </p>
                    <Link
                    to={`/services/service-details/${service.id}`}
                      className="th-btn"
                    >
                      Read More
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                    <div className="bg-shape">
                      <img src="/assets/img/bg/service_card_bg.png" alt="bg" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInfo;
