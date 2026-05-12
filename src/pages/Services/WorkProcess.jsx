import React from "react";
import { Link } from "react-router-dom";

const WorkProcess = () => {
  return (
    <>
      <section className="position-relative space">
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
                        maskImage:
                          "url(/assets/img/theme-img/title_shape_2.svg)",
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
      <section
        className="bg-smoke"
        id="process-sec"
        style={{
          backgroundImage: "url(/assets/img/bg/process_bg_1.png)",
        }}
      >
        <div className="container space">
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
                <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
              </div>
              WORK PROCESS
            </span>
            <h2 className="sec-title">
              How to work <span className="text-theme">it!</span>
            </h2>
          </div>
          <div className="process-card-area">
            <div className="process-line">
              <img src="/assets/img/bg/process_line.svg" alt="line" />
            </div>
            <div className="row gy-40">
              <div className="col-sm-6 col-xl-3 process-card-wrap">
                <div className="process-card">
                  <div className="process-card_number">01</div>
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_card_1.svg" alt="icon" />
                  </div>
                  <h2 className="box-title">Select Link project</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 process-card-wrap">
                <div className="process-card">
                  <div className="process-card_number">02</div>
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_card_2.svg" alt="icon" />
                  </div>
                  <h2 className="box-title">Project analysis</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 process-card-wrap">
                <div className="process-card">
                  <div className="process-card_number">03</div>
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_card_3.svg" alt="icon" />
                  </div>
                  <h2 className="box-title">Plan Execute</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 process-card-wrap">
                <div className="process-card">
                  <div className="process-card_number">04</div>
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_card_4.svg" alt="icon" />
                  </div>
                  <h2 className="box-title">Deliver result</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
