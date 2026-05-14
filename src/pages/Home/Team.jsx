import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import teamArray from "../../DataJs/team.js";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamArray);
  }, []);

  return (
    <section
      className="bg-smoke space"
      style={{
        backgroundImage: "url(/assets/img/bg/team_bg_2.png)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="title-area text-center">
          <span className="sub-title d-flex justify-content-center align-items-center">
            <div className="icon-masking me-2">
              <span
                className="mask-icon"
                style={{
                  WebkitMaskImage:
                    "url(/assets/img/theme-img/title_shape_2.svg)",
                  maskImage: "url(/assets/img/theme-img/title_shape_2.svg)",
                }}
              ></span>
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            GREAT TEAM
          </span>

          <h2 className="sec-title">
            See Our Skilled Expert
            <span className="text-theme fw-normal"> Team</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="slider-area position-relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {teams &&
              teams.map((team) => (
                <SwiperSlide key={team.id}>
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src={team.img} alt="team" />

                      <div className="team-social">
                        <div className="play-btn">
                          <i className="far fa-plus"></i>
                        </div>

                        <div className="th-social">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="team-content">
                      <div className="box-particle"></div>

                      <h3 className="box-title">
                        <Link to="#">{team.name}</Link>
                      </h3>

                      <span className="team-desig">{team.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Custom Arrows (Same Design) */}
          <button className="slider-arrow style3 slider-prev team-prev">
            <i className="far fa-arrow-left"></i>
          </button>

          <button className="slider-arrow style3 slider-next team-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
