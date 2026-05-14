import React from "react";

const skillsData = [
  {
    id: 1,
    title: "Business Strategy",
    percentage: "85%",
  },
  {
    id: 2,
    title: "Softwer Development",
    percentage: "95%",
  },
  {
    id: 3,
    title: "Cyber Security",
    percentage: "90%",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="overflow-hidden bg-smoke space">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-xl-6">
            <div className="title-area mb-35 text-center text-xl-start">
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
                GREAT IT SKILLS
              </span>

              <h2 className="sec-title">
                More Than 24+ Years Experience We Provide{" "}
                <span className="text-theme fw-normal">IT Services</span>
              </h2>
            </div>

            <p className="mt-n2 mb-25 text-center text-xl-start">
              Collaboratively envisioneer user friendly supply chains and cross
              unit imperative. Authoritativel fabricate competitive resource and
              holistic. Holisticly restore real time resources whereas
              standardized networks.
            </p>

            <div className="pe-xxl-4">
              {skillsData.map((item) => (
                <div className="skill-feature" key={item.id}>
                  <h3 className="skill-feature_title">{item.title}</h3>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: item.percentage }}
                    >
                      <div className="progress-value">{item.percentage}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div className="col-xl-6 mt-40 mt-xl-0">
            <div className="video-box1">
              <img
                className="tilt-active"
                src="/assets/img/normal/video_shape_1.png"
                alt="Video"
              />

              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn popup-video"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="shape-mockup" style={{ top: "0%", left: "0%" }}>
        <img src="/assets/img/shape/tech_shape_3.png" alt="shape" />
      </div>

      <div className="shape-mockup" style={{ bottom: "0%", right: "0%" }}>
        <img src="/assets/img/shape/tech_shape_4.png" alt="shape" />
      </div>
    </div>
  );
};

export default Skills;
