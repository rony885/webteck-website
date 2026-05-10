import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
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
            <h1 className="breadcumb-title">Our Projects</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Our Projects</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_1.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p1"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">IT Consultency</Link>
                    </h3>
                    <p className="project-subtitle">Technology</p>
                    <Link
                      to="assets/img/project/project_1_1.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_2.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p2"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Web Development</Link>
                    </h3>
                    <p className="project-subtitle">Technology</p>
                    <Link
                      to="assets/img/project/project_1_2.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_3.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p3"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Website Design</Link>
                    </h3>
                    <p className="project-subtitle">Technology</p>
                    <Link
                      to="assets/img/project/project_1_3.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_4.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p4"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">SEO Optimization</Link>
                    </h3>
                    <p className="project-subtitle">Marketing</p>
                    <Link
                      to="assets/img/project/project_1_4.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_5.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p5"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Digital Marketing</Link>
                    </h3>
                    <p className="project-subtitle">Marketing</p>
                    <Link
                      to="assets/img/project/project_1_5.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_6.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p6"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Business Analysis</Link>
                    </h3>
                    <p className="project-subtitle">Business</p>
                    <Link
                      to="assets/img/project/project_1_6.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_7.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p7"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Software Service</Link>
                    </h3>
                    <p className="project-subtitle">Technology</p>
                    <Link
                      to="assets/img/project/project_1_7.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_8.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p8"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Data Recovery</Link>
                    </h3>
                    <p className="project-subtitle">Technology</p>
                    <Link
                      to="assets/img/project/project_1_8.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-img">
                  <img
                    src="assets/img/project/project_1_9.jpg"
                    alt="project imagee"
                  />
                </div>
                <div className="project-content-wrap">
                  <div className="project-content">
                    <div className="box-particle" id="project-p9"></div>
                    <h3 className="box-title">
                      <Link to="/project-details">Cloud Computing</Link>
                    </h3>
                    <p className="project-subtitle">Technology</p>
                    <Link
                      to="assets/img/project/project_1_9.jpg"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup" data-top="0%" data-right="0%">
          <img src="assets/img/shape/tech_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom="0%" data-left="0%">
          <img src="assets/img/shape/tech_shape_2.png" alt="shape" />
        </div>
      </section>
    </>
  );
};

export default Projects;
