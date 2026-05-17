import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import teamArray from "../../DataJs/team.js";

// const teamData = [
//   {
//     id: 1,
//     image: "assets/img/team/team_1_1.jpg",
//     name: "Rayan Athels",
//     designation: "Founder & CEO",
//     link: "/team-details",
//     particleId: "team-p1",
//   },
//   {
//     id: 2,
//     image: "assets/img/team/team_1_2.jpg",
//     name: "Alex Furnandes",
//     designation: "Project Manager",
//     link: "/team-details",
//     particleId: "team-p2",
//   },
//   {
//     id: 3,
//     image: "assets/img/team/team_1_3.jpg",
//     name: "Mary Crispy",
//     designation: "Chief Expert",
//     link: "/team-details",
//     particleId: "team-p3",
//   },
//   {
//     id: 4,
//     image: "assets/img/team/team_1_4.jpg",
//     name: "Henry Joshep",
//     designation: "Product Manager",
//     link: "/team-details",
//     particleId: "team-p4",
//   },
//   {
//     id: 5,
//     image: "assets/img/team/team_1_5.jpg",
//     name: "Sanjida Carlose",
//     designation: "IT Consultant",
//     link: "/team-details",
//     particleId: "team-p5",
//   },
//   {
//     id: 6,
//     image: "assets/img/team/team_1_6.jpg",
//     name: "Marian Widjya",
//     designation: "Head Manager",
//     link: "/team-details",
//     particleId: "team-p6",
//   },
//   {
//     id: 7,
//     image: "assets/img/team/team_1_7.jpg",
//     name: "Peter Parker",
//     designation: "Web Developer",
//     link: "/team-details",
//     particleId: "team-p7",
//   },
//   {
//     id: 8,
//     image: "assets/img/team/team_1_8.jpg",
//     name: "Grayson Gabriel",
//     designation: "UI/UX Designer",
//     link: "/team-details",
//     particleId: "team-p8",
//   },
// ];

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
          <div className="row gy-40 align-items-center">
            <div className="col-xl-5">
              <div className="team-featured-img">
                <img src="assets/img/team/team_featured.jpg" alt="Team" />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="team-featured">
                <h2 className="team-title">Rachna Sheth</h2>
                <p className="team-desig">CEO, of Webteck Company</p>
                <p className="team-bio">
                  Enthusiastically parallel task 2.0 niches wherea end-to-end
                  strategic theme area. Dramatically harness e-business ROI and
                  granular service. Quickly target enabled internal organic
                  sources after cross-unit methods of empowerment. Seamlessly
                  e-enable intuitive applications before end-to-end
                  applications. Uniquely matrix seamless supply chains for
                  resource-leveling.
                </p>
                <div className="team-contact-wrap">
                  <div className="team-contact">
                    <div className="icon-btn">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="team-contact_label">Phone Number</h6>
                      <Link className="team-contact_link" to="tel:+19356542587">
                        +1 935-654-2587
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
                        to="mailto:info@rachna.com"
                      >
                        info@rachna.com
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
                <Link to="/about" className="th-btn">
                  MAKE AN APPOINTMENT
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
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
                <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />
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
                        <Link to="/team-details">{team.name}</Link>
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
