import React from "react";

const processData = [
  {
    id: 1,
    number: "01",
    icon: "/assets/img/icon/process_card_1.svg",
    title: "Select Link project",
    text: "Continua scale empowered metrics with cost effective innovation.",
  },
  {
    id: 2,
    number: "02",
    icon: "/assets/img/icon/process_card_2.svg",
    title: "Project analysis",
    text: "Continua scale empowered metrics with cost effective innovation.",
  },
  {
    id: 3,
    number: "03",
    icon: "/assets/img/icon/process_card_3.svg",
    title: "Plan Execute",
    text: "Continua scale empowered metrics with cost effective innovation.",
  },
  {
    id: 4,
    number: "04",
    icon: "/assets/img/icon/process_card_4.svg",
    title: "Deliver result",
    text: "Continua scale empowered metrics with cost effective innovation.",
  },
];

const WorkProcess = () => {
  return (
    <section
      className="bg-smoke"
      id="process-sec"
      style={{
        backgroundImage: "url(/assets/img/bg/process_bg_1.png)",
      }}
    >
      <div className="container space">
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
              <img src="/assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            WORK PROCESS
          </span>

          <h2 className="sec-title">
            How to work <span className="text-theme">it!</span>
          </h2>
        </div>

        <div className="process-card-area">
          <div className="process-line">
            <img src="/assets/img/bg/process_line.svg" alt="line" />
          </div>

          <div className="row gy-40">
            {processData.map((process) => (
              <div
                key={process.id}
                className="col-sm-6 col-xl-3 process-card-wrap"
              >
                <div className="process-card">
                  <div className="process-card_number">{process.number}</div>

                  <div className="process-card_icon">
                    <img src={process.icon} alt={process.title} />
                  </div>

                  <h2 className="box-title">{process.title}</h2>

                  <p className="process-card_text">{process.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
