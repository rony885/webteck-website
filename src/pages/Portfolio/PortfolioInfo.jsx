import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import portfoliosArray from "../../DataJs/portfolio.js";

const PortfolioInfo = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    setPortfolios(portfoliosArray);
  }, []);

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Portfolio</h1>

            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
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

                <img
                  src="/assets/img/theme-img/title_shape_2.svg"
                  alt="shape"
                />
              </div>
              OUR PORTFOLIO
            </span>

            <h2 className="sec-title">
              Recent <span className="text-theme fw-normal">Works</span>
            </h2>
          </div>

          <div className="row gy-4">
            {portfolios.map((project) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div className="project-card">
                  <div className="project-img">
                    <img src={project.img} alt={project.title} />
                  </div>

                  <div className="project-content-wrap">
                    <div className="project-content">
                      <div
                        className="box-particle"
                        id={`project-p${project.id}`}
                      ></div>

                      <h3 className="box-title">
                        <Link to="/portfolio-details">{project.title}</Link>
                      </h3>

                      <p className="project-subtitle">{project.category}</p>

                      {/* <Link to={project.img} className="icon-btn popup-image">
                        <i className="far fa-plus"></i>
                      </Link> */}
                      <Link to="/portfolio-details" className="icon-btn">
                        <i className="far fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shape-mockup" data-top="0%" data-right="0%">
          <img src="/assets/img/shape/tech_shape_1.png" alt="shape" />
        </div>

        <div className="shape-mockup" data-bottom="0%" data-left="0%">
          <img src="/assets/img/shape/tech_shape_2.png" alt="shape" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PortfolioInfo;
