import React from "react";

const chooseData = {
  subtitle: "WHY CHOOSE US",
  title: "We Deal With The Aspects Professional",
  highlight: "IT Services",
  description:
    "Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic.",

  image: "/assets/img/normal/why_1_1.jpg",
  checklist: [
    ["Big Data Analysis", "24/7 Online Support", "Business Improvement"],
    ["High Quality Security", "24/7 Support Team", "Easy Solutions"],
  ],
};

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
          <div className="col-xxl-7 col-xl-6 mb-30 mb-xl-0">
            <div className="img-box2">
              <div className="img1">
                <img src={chooseData.image} alt="Why Choose Us" />
              </div>
            </div>
          </div>

          <div className="col-xxl-5 col-xl-6">
            <div className="title-area mb-35">
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span
                    className="mask-icon"
                    data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                  ></span>

                  <img
                    src="/assets/img/theme-img/title_shape_1.svg"
                    alt="shape"
                  />
                </div>

                {chooseData.subtitle}
              </span>

              <h2 className="sec-title">
                {chooseData.title}{" "}
                <span className="text-theme">{chooseData.highlight}</span>
              </h2>
            </div>

            <p className="mt-n2 mb-30">{chooseData.description}</p>

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
        </div>
      </div>
    </div>
  );
};

export default Choose;
