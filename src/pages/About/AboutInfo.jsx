import React from "react";
import { Link } from "react-router-dom";

const aboutData = {
  image: "/assets/img/normal/about_1_1.png",
  shape: "/assets/img/normal/about_shape_1.png",

  experience: {
    number: 25,
    text: "Years Experience",
  },

  subTitle: "About Us",
  title: "We Are Increasing Business Success With",
  highlight: "IT Solution",

  description:
    "Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic synergy. Uniquely generate efficient schemas before future.",

  features: [
    {
      id: 1,
      icon: "/assets/img/icon/about_feature_1_1.svg",
      title: "Certified Company",
      text: "Best Provide Skills Services",
    },
    {
      id: 2,
      icon: "/assets/img/icon/about_feature_1_2.svg",
      title: "Expert Team",
      text: "100% Expert Team",
    },
  ],

  callInfo: {
    text: "Call Us On:",
    number: "+190-8800-0393",
    phone: "+19088000393",
  },
};

const AboutInfo = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(/assets/img/bg/breadcumb-bg.jpg)`,
          // padding: "160px 0",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src={aboutData.image} alt="About" />
                </div>

                <div className="shape1">
                  <img src={aboutData.shape} alt="shape" />
                </div>

                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">
                      {aboutData.experience.number}
                    </span>
                  </h3>

                  <p className="year-counter_text">
                    {aboutData.experience.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <span
                        className="mask-icon"
                        style={{
                          WebkitMaskImage:
                            "url(/assets/img/theme-img/title_shape_1.svg)",
                          maskImage:
                            "url(/assets/img/theme-img/title_shape_1.svg)",
                        }}
                      ></span>

                      <img
                        src="/assets/img/theme-img/title_shape_1.svg"
                        alt="shape"
                      />
                    </div>

                    {aboutData.subTitle}
                  </span>

                  <h2 className="sec-title">
                    {aboutData.title}{" "}
                    <span className="text-theme">{aboutData.highlight}</span>
                  </h2>
                </div>

                <p className="mt-n2 mb-25">{aboutData.description}</p>

                <div className="about-feature-wrap">
                  {aboutData.features.map((feature) => (
                    <div className="about-feature" key={feature.id}>
                      <div className="about-feature_icon">
                        <img src={feature.icon} alt={feature.title} />
                      </div>

                      <div className="media-body">
                        <h3 className="about-feature_title">{feature.title}</h3>

                        <p className="about-feature_text">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="btn-group">
                  <Link to="/about" className="th-btn">
                    DISCOVER MORE
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>

                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <Link to="tel:01700000000" className="btn-title">
                        01700000000
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
