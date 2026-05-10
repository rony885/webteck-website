import React from "react";
import { Link } from "react-router-dom";

const ServicesInfo = () => {
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
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">01</div>
                <div className="shape-icon">
                  <img src="/assets/img/icon/service_card_1.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Web Development</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">02</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_2.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">UI/UX Design</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">03</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_3.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Digital Marketing</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">04</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_4.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Business Analysis</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">05</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_5.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Software Services</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">06</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_6.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Machine Learning</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">07</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_7.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">IT Management</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">08</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_8.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Cloud Computing</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service-card">
                <div className="service-card_number">09</div>
                <div className="shape-icon">
                  <img src="assets/img/icon/service_card_9.svg" alt="Icon" />
                  <span className="dots"></span>
                </div>
                <h3 className="box-title">
                  <Link to="/service-details">Backup & Recovery</Link>
                </h3>
                <p className="service-card_text">
                  Intrinsicly redefine competitive e-business before adaptive
                  potentialiti. Professionally build progressive users with.
                </p>
                <Link to="/service-details" className="th-btn">
                  Read More<i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
                <div className="bg-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInfo;
