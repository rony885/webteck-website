import React from "react";
import { Link } from "react-router-dom";

const pricingData = [
  {
    id: 1,
    title: "Silver Package",
    price: "$199.00",
    particleId: "price-p1",
    features: [
      {
        text: "30 Days Trial Features",
        available: true,
      },
      {
        text: "Unlimited Features",
        available: true,
      },
      {
        text: "Multi-Language Content",
        available: true,
      },
      {
        text: "Data backup and recovery",
        available: false,
      },
      {
        text: "Synced To Cloud Database",
        available: false,
      },
    ],
  },
  {
    id: 2,
    title: "Gold Package",
    price: "$299.00",
    particleId: "price-p2",
    features: [
      {
        text: "30 Days Trial Features",
        available: true,
      },
      {
        text: "Unlimited Features",
        available: true,
      },
      {
        text: "Multi-Language Content",
        available: true,
      },
      {
        text: "Data backup and recovery",
        available: true,
      },
      {
        text: "Synced To Cloud Database",
        available: false,
      },
    ],
  },
  {
    id: 3,
    title: "Platinum Package",
    price: "$599.00",
    particleId: "price-p3",
    features: [
      {
        text: "30 Days Trial Features",
        available: true,
      },
      {
        text: "Unlimited Features",
        available: true,
      },
      {
        text: "Multi-Language Content",
        available: true,
      },
      {
        text: "Data backup and recovery",
        available: true,
      },
      {
        text: "Synced To Cloud Database",
        available: true,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="space">
      <div className="container">
        {/* Title */}
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
            OUR PRICING
          </span>

          <h2 className="sec-title">
            Popular Pricing{" "}
            <span className="text-theme fw-normal">Package</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="row gy-4 justify-content-center">
          {pricingData.map((item) => (
            <div className="col-xl-4 col-md-6" key={item.id}>
              <div className="price-card">
                <div className="price-card_top">
                  <h3 className="price-card_title">{item.title}</h3>

                  <p className="price-card_text">
                    Pricing plan for IT Solution company
                  </p>

                  <h4 className="price-card_price">
                    {item.price}
                    <span className="duration"> /Per Month</span>
                  </h4>

                  <div className="particle">
                    <div className="price-particle" id={item.particleId}></div>
                  </div>
                </div>

                <div className="price-card_content">
                  <ul className="checklist">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className={!feature.available ? "unavailable" : ""}
                      >
                        <i className="fas fa-circle-check"></i>

                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  <Link to="#" className="th-btn">
                    PURCHASE NOW
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shapes */}
      <div className="shape-mockup" style={{ top: 0, right: 0 }}>
        <img src="assets/img/shape/tech_shape_1.png" alt="shape" />
      </div>

      <div className="shape-mockup" style={{ top: "0%", left: 0 }}>
        <img src="assets/img/shape/square_1.png" alt="shape" />
      </div>
    </section>
  );
};

export default Pricing;
