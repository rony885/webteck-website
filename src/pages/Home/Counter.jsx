import React from "react";

const counterData = [
  {
    id: 1,
    img: "/assets/img/icon/counter_1_1.svg",
    number: 986,
    text: "Finished Project",
  },
  {
    id: 2,
    img: "/assets/img/icon/counter_1_2.svg",
    number: 896,
    text: "Happy Clients",
  },
  {
    id: 3,
    img: "/assets/img/icon/counter_1_3.svg",
    number: 396,
    text: "Skilled Experts",
  },
  {
    id: 4,
    img: "/assets/img/icon/counter_1_4.svg",
    number: 496,
    text: "Honorable Awards",
  },
];

const Counter = () => {
  return (
    <div
      className="bg-theme space-extra"
      style={{
        backgroundImage: "url(/assets/img/bg/counter_bg_1.png)",
      }}
    >
      <div className="container py-2">
        <div className="row gy-40 justify-content-between">
          {counterData.map((item) => (
            <div className="col-6 col-lg-auto" key={item.id}>
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src={item.img} alt="Icon" />
                </div>

                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">{item.number}</span>+
                  </h2>

                  <p className="counter-card_text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
