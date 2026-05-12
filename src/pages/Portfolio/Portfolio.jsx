import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    img: "/assets/img/project/project_1_1.jpg",
    title: "IT Consultency",
    category: "Technology",
  },
  {
    id: 2,
    img: "/assets/img/project/project_1_2.jpg",
    title: "Web Development",
    category: "Technology",
  },
  {
    id: 3,
    img: "/assets/img/project/project_1_3.jpg",
    title: "Website Design",
    category: "Technology",
  },
  {
    id: 4,
    img: "/assets/img/project/project_1_4.jpg",
    title: "SEO Optimization",
    category: "Marketing",
  },
  {
    id: 5,
    img: "/assets/img/project/project_1_5.jpg",
    title: "Digital Marketing",
    category: "Marketing",
  },
  {
    id: 6,
    img: "/assets/img/project/project_1_6.jpg",
    title: "Business Analysis",
    category: "Business",
  },
  {
    id: 7,
    img: "/assets/img/project/project_1_7.jpg",
    title: "Software Service",
    category: "Technology",
  },
  {
    id: 8,
    img: "/assets/img/project/project_1_8.jpg",
    title: "Data Recovery",
    category: "Technology",
  },
  {
    id: 9,
    img: "/assets/img/project/project_1_9.jpg",
    title: "Cloud Computing",
    category: "Technology",
  },
];

const Portfolio = () => {
  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
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
          <div className="row gy-4">
            {projectData.map((project) => (
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

export default Portfolio;
