import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import teamArray from "../../DataJs/team.js";

const teamInfo = [
  {
    id: 1,
    name: "Rayan Athels",
    designation: "UI/UX Designer",
    image: "/assets/img/team/team_details.jpg",
    description:
      "Continually utilize 24/365 bandwidth before real-time interfaces. Credibly grow team core competencies with pandemic commerce. Objectively initiate pandemic users with deliver bricks clicks meta services for bricks-and-clicks innovation streamline front end aradigms expedite granular human capital rather than intuitive testing.",
    experience: "More Than 10 Years",
    phone: "01000000000",
    email: "info@webteck.com",
    fax: "+265478962",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

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
          {/* <div className="about-card">
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
          </div> */}
          {teamInfo.map((team) => (
            <div className="about-card" key={team.id}>
              <div className="about-card_img">
                <img className="w-100" src={team.image} alt={team.name} />
              </div>

              <div className="about-card_box">
                <div className="about-card_top">
                  <div className="media-body">
                    <h2 className="about-card_title">{team.name}</h2>

                    <p className="about-card_desig">{team.designation}</p>
                  </div>

                  <div className="header-social">
                    <Link target="_blank" to={team.socialLinks.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link target="_blank" to={team.socialLinks.twitter}>
                      <i className="fab fa-twitter"></i>
                    </Link>

                    <Link target="_blank" to={team.socialLinks.instagram}>
                      <i className="fab fa-instagram"></i>
                    </Link>

                    <Link target="_blank" to={team.socialLinks.linkedin}>
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>

                <p className="about-card_text">{team.description}</p>

                <div className="team-info-wrap">
                  <div className="contact-feature">
                    <div className="icon-btn">
                      <i className="fa-solid fa-user"></i>
                    </div>

                    <div className="media-body">
                      <p className="contact-feature_label">Experience</p>

                      <span className="contact-feature_link">
                        {team.experience}
                      </span>
                    </div>
                  </div>

                  <div className="contact-feature">
                    <div className="icon-btn">
                      <i className="fa-solid fa-phone"></i>
                    </div>

                    <div className="media-body">
                      <p className="contact-feature_label">Phone</p>

                      <Link
                        to={`tel:${team.phone}`}
                        className="contact-feature_link"
                      >
                        {team.phone}
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
                        to={`mailto:${team.email}`}
                        className="contact-feature_link"
                      >
                        {team.email}
                      </Link>
                    </div>
                  </div>

                  <div className="contact-feature">
                    <div className="icon-btn">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>

                    <div className="media-body">
                      <p className="contact-feature_label">Fax</p>

                      <span className="contact-feature_link">{team.fax}</span>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="th-btn">
                  GET IN TOUCH
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          ))}

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
                {findTeamDetails && findTeamDetails.education.description}
              </p>
              <div className="experience-box-wrap">
                {findTeamDetails?.education?.experiences?.map((exp) => (
                  <div className="experience-box" key={exp.id}>
                    <span className="experience-box_num">{exp.order}</span>
                    <h6 className="experience-box_title">{exp.title}</h6>
                    <p className="experience-box_text">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
