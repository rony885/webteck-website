import React from "react";
import { Link } from "react-router-dom";

const aboutData = {
  subtitle: "About WEBTECK IT SOLUTIONS",
  title: "Preparing For Your Business Provide Best",
  highlightTitle: "IT Solution",

  description:
    "Quickly re-engineer intuitive e-services whereas compelling niches. Professionally syndicate strategic e-commerce without covalent leadership skills. Globally customize equity invested imperatives.",

  images: {
    img1: "/assets/img/normal/about_2_1.jpg",
    img2: "/assets/img/normal/about_2_2.jpg",
    img3: "/assets/img/normal/about_2_3.jpg",
    shape: "/assets/img/normal/about_2_shape.png",
  },

  checklist: [
    "Dramatically re-engineer value added IT systems via mission",
    "Website & Mobile application design & Development",
    "Professional User Experince & Interface researching",
  ],
};

const About = () => {
  return (
    <div className="space" id="about-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-30 mb-xl-0">
            <div className="img-box3">
              <div className="img1">
                <img src={aboutData.images.img1} alt="About" />
              </div>

              <div className="img2">
                <img src={aboutData.images.img2} alt="About" />
              </div>

              <div className="img3">
                <img src={aboutData.images.img3} alt="About" />
              </div>

              <div className="shape1">
                <img src={aboutData.images.shape} alt="About" />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
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

                {aboutData.subtitle}
              </span>

              <h2 className="sec-title">
                {aboutData.title}
                <span className="text-theme fw-normal">
                  {" "}
                  {aboutData.highlightTitle}
                </span>
              </h2>
            </div>

            <p className="mt-n2 mb-25">{aboutData.description}</p>

            <div className="checklist style3 mb-40">
              <ul>
                {aboutData.checklist.map((item, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-square-check"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about" className="th-btn">
              DISCOVER MORE<i className="fa-regular fa-arrow-right ms-2"></i>
            </Link>
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
