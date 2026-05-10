import React from "react";

const About = () => {
  return (
    <div className="space" id="about-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box3">
              <div className="img1">
                <img src="/assets/img/normal/about_2_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="/assets/img/normal/about_2_2.jpg" alt="About" />
              </div>
              <div className="img3">
                <img src="/assets/img/normal/about_2_3.jpg" alt="About" />
              </div>
              <div className="shape1">
                <img src="/assets/img/normal/about_2_shape.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span
                    className="mask-icon"
                    // data-mask-src="assets/img/theme-img/title_shape_2.svg"
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
                About WEBTECK IT SOLUTIONS
              </span>
              <h2 className="sec-title">
                Preparing For Your Business Provide Best
                <span className="text-theme fw-normal">IT Solution</span>
              </h2>
            </div>
            <p className="mt-n2 mb-25">
              Quickly re-engineer intuitive e-services whereas compelling
              niches. Professionally syndicate strategic e-commerce without
              covalent leadership skills. Globally customize equity invested
              imperatives.
            </p>
            <div className="checklist style3 mb-40">
              <ul>
                <li>
                  <i className="fa-solid fa-square-check"></i> Dramatically
                  re-engineer value added IT systems via mission
                </li>
                <li>
                  <i className="fa-solid fa-square-check"></i> Website & Mobile
                  application design & Development
                </li>
                <li>
                  <i className="fa-solid fa-square-check"></i> Professional User
                  Experince & Interface researching
                </li>
              </ul>
            </div>
            <a href="about.html" className="th-btn">
              DISCOVER MORE<i className="fa-regular fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup d-none d-lg-block"
        data-bottom="0%"
        data-right="0%"
      >
        <div className="particle-2 small" id="particle-1"></div>
      </div>
    </div>
  );
};

export default About;
