import React from "react";
import { Link } from "react-router-dom";

const WorkProcessBanner = () => {
  return (
    <section
      className="position-relative space"
      style={{ marginBottom: "80px" }}
    >
      <div
        className="th-bg-img"
        style={{
          backgroundImage: "url(/assets/img/bg/cta_bg_2.jpg)",
        }}
      >
        <img src="/assets/img/bg/bg_overlay_1.png" alt="overlay" />
      </div>
      <div className="container z-index-common">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="title-area mb-35">
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
                CONTACT US
              </span>
              <h2 className="sec-title text-white">
                Need Any Kind Of IT Solution For
                <span className="text-theme fw-normal">Your Business?</span>
              </h2>
            </div>
            <Link to="/contact" className="th-btn style3">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessBanner;
