import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import teamArray from "../../DataJs/team.js";

const TeamDetails = () => {
  const [teamDetails, setTeamDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setTeamDetails(teamArray);
  }, []);

  const findTeamDetails = teamDetails.find(
    (teamItem) => teamItem.id === parseInt(id),
  );

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
            <h1 className="breadcumb-title">Team Details</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Team Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="about-card">
            <div className="about-card_img">
              <img
                className="w-100"
                src="/assets/img/team/team_details.jpg"
                alt="team imagee"
              />
            </div>
            <div className="about-card_box">
              <div className="about-card_top">
                <div className="media-body">
                  <h2 className="about-card_title">Rayan Athels</h2>
                  <p className="about-card_desig">UI/UX Designer</p>
                </div>
                <div className="header-social">
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
              </div>
              <p className="about-card_text">
                Continually utilize 24/365 bandwidth before real-time
                interfaces. Credibly grow team core competencies with pandemic
                commerce. Objectively initiate pandemic users with deliver
                bricks clicks meta services for bricks-and-clicks innovation
                streamline front end aradigms expedite granular human capital
                rather than intuitive testing.
              </p>
              <div className="team-info-wrap">
                <div className="contact-feature">
                  <div className="icon-btn">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="media-body">
                    <p className="contact-feature_label">Experience</p>
                    <span className="contact-feature_link">
                      More Than 10 Yearsn
                    </span>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="icon-btn">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="media-body">
                    <p className="contact-feature_label">Phone</p>
                    <Link to="tel:01000000000" className="contact-feature_link">
                      01000000000
                    </Link>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="icon-btn">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="media-body">
                    <p className="contact-feature_label">Email</p>
                    <Link
                      to="mailto:info@webteck.com"
                      className="contact-feature_link"
                    >
                      info@webteck.com
                    </Link>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="icon-btn">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <div className="media-body">
                    <p className="contact-feature_label">Fax</p>
                    <span className="contact-feature_link">+265478962</span>
                  </div>
                </div>
              </div>
              <Link to="/about" className="th-btn">
                GET IN TOUCH<i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          <div className="row mt-5 pt-10">
            <div className="col-xl-6 mb-xl-0">
              <h4 className="border-title">
                {findTeamDetails && findTeamDetails.biography.title}
              </h4>
              <p className="mb-40">
                {findTeamDetails && findTeamDetails.biography.description}
              </p>
              <h5 className="border-title">
                {findTeamDetails && findTeamDetails.professionalSkills.title}
              </h5>
              <p className="mb-40">
                {findTeamDetails &&
                  findTeamDetails.professionalSkills.description}
              </p>
              {(findTeamDetails?.professionalSkills?.skills || []).map(
                (skill) => (
                  <div key={skill.id} className="skill-feature style2">
                    <h5 className="skill-feature_title">{skill.title}</h5>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="progress-value">
                          {skill.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
            <div className="col-xl-6 mt-5 mt-xl-0">
              <h4 className="border-title">
                {findTeamDetails && findTeamDetails.activities.title}
              </h4>
              <p className="mb-20">
                {findTeamDetails && findTeamDetails.activities.description}
              </p>
              <div className="two-column mb-40">
                <div className="checklist">
                  <ul>
                    {findTeamDetails?.activities?.checklist?.map(
                      (item, index) => (
                        <li key={index}>
                          <i className="fas fa-badge-check"></i> {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
              <h5 className="border-title">
                {findTeamDetails && findTeamDetails.education.title}
              </h5>
              <p className="mb-40">
                Credibly scale plug-and-play customer service after high-payoff
                idea. Monotonectall incentivize installed base intellectual
                capital whereas flexible process improvement. Conveniently.
                Distinctively negotiate front-end customer service rather.
              </p>
              <div className="experience-box-wrap">
                <div className="experience-box">
                  <span className="experience-box_num">1st</span>
                  <h6 className="experience-box_title">IT Consultant</h6>
                  <p className="experience-box_text">
                    2016 - Present (Webteck.Inc)
                  </p>
                </div>
                <div className="experience-box">
                  <span className="experience-box_num">2nd</span>
                  <h6 className="experience-box_title">Softwer Developer</h6>
                  <p className="experience-box_text">
                    2010 - 2015 (Lazmi Trade)
                  </p>
                </div>
                <div className="experience-box">
                  <span className="experience-box_num">3rd</span>
                  <h6 className="experience-box_title">Junior Inovator</h6>
                  <p className="experience-box_text">
                    2006 - 2009 (Onium Plan)
                  </p>
                </div>
                <div className="experience-box">
                  <span className="experience-box_num">4th</span>
                  <h6 className="experience-box_title">Junior Developer</h6>
                  <p className="experience-box_text">
                    2000 - 2005 (Grages.Ltd)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
