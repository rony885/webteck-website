import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import servicesArray from "../../DataJs/services.js";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesArray);
  }, []);

  return (
    <section className="space" id="service-sec">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title d-flex align-items-center justify-content-center justify-content-lg-start">
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
                WHAT WE DO
              </span>

              <h2 className="sec-title">
                We Provide Exclusive Service For
                <span className="text-theme fw-normal"> Your Business</span>
              </h2>
            </div>
          </div>

          <div className="col-auto">
            <div className="sec-btn">
              <Link to="/services" className="th-btn">
                VIEW ALL SERVICES
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="slider-area">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false, // keep autoplay after swipe
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {services &&
              services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="service-box">
                    <div className="service-box_img">
                      <img src={service.img} alt="service" />
                    </div>

                    <div className="service-box_content">
                      <div className="service-box_icon">
                        <img src={service.icon} alt="icon" />
                      </div>

                      <h3 className="box-title">
                        <Link to="#">{service.title}</Link>
                      </h3>

                      <p
                        className="service-box_text"
                        style={{ textAlign: "justify" }}
                      >
                        {service.description[0]}
                      </p>

                      <Link to="/service-details" className="link-btn">
                        Read More
                        <i className="fas fa-arrow-right ms-2"></i>
                      </Link>

                      <div className="bg-shape">
                        <img src="/assets/img/bg/service_box_bg.png" alt="bg" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
