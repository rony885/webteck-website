import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import teamArray from "../../DataJs/team.js";

const teamData = [
  {
    id: 1,
    name: "Rachna Sheth",
    designation: "CEO, of Webteck Company",
    image: "/assets/img/team/team_featured.jpg",
    bio: `Enthusiastically parallel task 2.0 niches wherea end-to-end
        strategic theme area. Dramatically harness e-business ROI and
        granular service. Quickly target enabled internal organic
        sources after cross-unit methods of empowerment. Passionately
        deliver innovative solutions to improve business growth.`,
    phone: "01767567797",
    email: "info@healixsoft.com",
    officeTime: "10:00AM - 4:00PM",
  },
];

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamArray);
  }, []);

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Team</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space-top">
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
              OUR TEAM
            </span>

            <h2 className="sec-title">
              Meet Our Expert <span className="text-theme fw-normal">Team</span>
            </h2>
          </div>

          {teamData.map((tem, index) => {
            return (
              <div key={index} className="row gy-40 align-items-center">
                <div className="col-xl-5">
                  <div className="team-featured-img">
                    <img src={tem.image} alt="Team" />
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="team-featured">
                    <h2 className="team-title">{tem.name}</h2>
                    <p className="team-desig"> {tem.designation}</p>
                    <p className="team-bio" style={{ textAlign: "justify" }}>
                      {tem.bio}
                    </p>
                    <div className="team-contact-wrap">
                      <div className="team-contact">
                        <div className="icon-btn">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="media-body">
                          <h6 className="team-contact_label">Phone Number</h6>
                          <Link
                            className="team-contact_link"
                            to="tel:01767567797"
                          >
                            01767567797
                          </Link>
                        </div>
                      </div>
                      <div className="team-contact">
                        <div className="icon-btn">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="media-body">
                          <h6 className="team-contact_label">Email Address</h6>
                          <Link
                            className="team-contact_link"
                            to="mailto:info@healixsoft.com"
                          >
                            info@healixsoft.com
                          </Link>
                        </div>
                      </div>
                      <div className="team-contact">
                        <div className="icon-btn">
                          <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="media-body">
                          <h6 className="team-contact_label">Phone Number</h6>
                          <span className="team-contact_link">
                            10:00AM - 4:00PM
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to="mailto:info@healixsoft.com" className="th-btn">
                      Get In Touch
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <div
                  className="icon-masking me-2"
                  style={{
                    WebkitMaskImage:
                      "url(/assets/img/theme-img/title_shape_1.svg)",
                    maskImage: "url(/assets/img/theme-img/title_shape_1.svg)",
                  }}
                ></div>
                <img
                  src="/assets/img/theme-img/title_shape_1.svg"
                  alt="shape"
                />
              </div>
              ALL MEMBERS
            </span>
            <h2 className="sec-title">
              See Our Skilled Expert <span className="text-theme">Team</span>
            </h2>
          </div>
          <div className="row gy-40">
            {teams.map((team) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="th-team team-card">
                    <div className="team-img">
                      <img src={team.img} alt="Team" />
                    </div>
                    <div className="team-content">
                      <div className="box-particle" id="team-p1"></div>
                      <div className="team-social">
                        <Link target="_blank" to="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link target="_blank" to="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link target="_blank" to="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link target="_blank" to="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </div>
                      <h3 className="box-title">
                        <Link to={`/team-details/${team.id}`}>{team.name}</Link>
                      </h3>
                      <span className="team-desig">{team.designation}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
