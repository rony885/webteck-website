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
                      <Link to="/service-details">{service.title}</Link>
                    </h3>
                    <p className="service-card_text">{service.description}</p>
                    <Link to="/service-details" className="th-btn">
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
