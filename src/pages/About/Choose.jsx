import React from "react";

const Choose = () => {
  return (
    <div
      className="space"
      style={{
        backgroundImage: `url(/assets/img/bg/why_bg_1.png)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          {/* Image Section */}
          <div className="col-xxl-7 col-xl-6 mb-30 mb-xl-0">
            <div className="img-box2">
              <div className="img1">
                <img src="/assets/img/normal/why_1_1.jpg" alt="Why" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-xxl-5 col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span
                    className="mask-icon"
                    data-mask-src="assets/img/theme-img/title_shape_1.svg"
                  ></span>
                  <img
                    src="assets/img/theme-img/title_shape_1.svg"
                    alt="shape"
                  />
                </div>
                WHY CHOOSE US
              </span>

              <h2 className="sec-title">
                We Deal With The Aspects Professional{" "}
                <span className="text-theme">IT Services</span>
              </h2>
            </div>

            <p className="mt-n2 mb-30">
              Collaboratively envisioneer user friendly supply chains and cross
              unit imperative. Authoritativel fabricate competitive resource and
              holistic.
            </p>

            {/* Checklist */}
            <div className="two-column">
              <div className="checklist style2">
                <ul>
                  <li>
                    <i className="far fa-check"></i> Big Data Analysis
                  </li>
                  <li>
                    <i className="far fa-check"></i> 24/7 Online Support
                  </li>
                  <li>
                    <i className="far fa-check"></i> Business Improvement
                  </li>
                </ul>
              </div>

              <div className="checklist style2">
                <ul>
                  <li>
                    <i className="far fa-check"></i> High Quality Security
                  </li>
                  <li>
                    <i className="far fa-check"></i> 24/7 Support Team
                  </li>
                  <li>
                    <i className="far fa-check"></i> Easy Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
    </div>
  );
};

export default Choose;
