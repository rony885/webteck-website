import React from "react";
import { Link } from "react-router-dom";

const PricingInfo = () => {
  const pricingData = [
    {
      id: 1,
      title: "Silver Package",
      price: "$199.00",
      particleId: "price-p1",
      unavailable: [3, 4],
      features: [
        "30 Days Trial Features",
        "Unlimited Features",
        "Multi-Language Content",
        "Data backup and recovery",
        "Synced To Cloud Database",
      ],
    },
    {
      id: 2,
      title: "Gold Package",
      price: "$299.00",
      particleId: "price-p2",
      unavailable: [4],
      features: [
        "30 Days Trial Features",
        "Unlimited Features",
        "Multi-Language Content",
        "Data backup and recovery",
        "Synced To Cloud Database",
      ],
    },
    {
      id: 3,
      title: "Platinum Package",
      price: "$599.00",
      particleId: "price-p3",
      unavailable: [],
      features: [
        "30 Days Trial Features",
        "Unlimited Features",
        "Multi-Language Content",
        "Data backup and recovery",
        "Synced To Cloud Database",
      ],
    },
  ];

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
            <h1 className="breadcumb-title">Pricing Plans</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Pricing Plans</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <section className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  data-mask-src="assets/img/theme-img/title_shape_2.svg"
                ></span>
                <img
                  src="/assets/img/theme-img/title_shape_2.svg"
                  alt="shape"
                />
              </div>
              OUR PRICING
            </span>
            <h2 className="sec-title">
              Popular Pricing{" "}
              <span className="text-theme fw-normal">Package</span>
            </h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="price-card_top">
                  <h3 className="price-card_title">Silver Package</h3>
                  <p className="price-card_text">
                    Pricing plan for IT Solution company
                  </p>
                  <h4 className="price-card_price">
                    $199.00 <span className="duration">/Per Month</span>
                  </h4>
                  <div className="particle">
                    <div className="price-particle" id="price-p1"></div>
                  </div>
                </div>
                <div className="price-card_content">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check"></i> 30 Days Trial
                        Features
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Unlimited
                        Features
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Multi-Language
                        Content
                      </li>
                      <li className="unavailable">
                        <i className="fas fa-circle-check"></i> Data backup and
                        recovery
                      </li>
                      <li className="unavailable">
                        <i className="fas fa-circle-check"></i> Synced To Cloud
                        Database
                      </li>
                    </ul>
                  </div>
                  <Link to="pricing.html" className="th-btn">
                    PURCHASE NOW
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="price-card_top">
                  <h3 className="price-card_title">Gold Package</h3>
                  <p className="price-card_text">
                    Pricing plan for IT Solution company
                  </p>
                  <h4 className="price-card_price">
                    $299.00 <span className="duration">/Per Month</span>
                  </h4>
                  <div className="particle">
                    <div className="price-particle" id="price-p2"></div>
                  </div>
                </div>
                <div className="price-card_content">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check"></i> 30 Days Trial
                        Features
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Unlimited
                        Features
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Multi-Language
                        Content
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Data backup and
                        recovery
                      </li>
                      <li className="unavailable">
                        <i className="fas fa-circle-check"></i> Synced To Cloud
                        Database
                      </li>
                    </ul>
                  </div>
                  <Link to="pricing.html" className="th-btn">
                    PURCHASE NOW
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-card">
                <div className="price-card_top">
                  <h3 className="price-card_title">Platinum Package</h3>
                  <p className="price-card_text">
                    Pricing plan for IT Solution company
                  </p>
                  <h4 className="price-card_price">
                    $599.00 <span className="duration">/Per Month</span>
                  </h4>
                  <div className="particle">
                    <div className="price-particle" id="price-p3"></div>
                  </div>
                </div>
                <div className="price-card_content">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check"></i> 30 Days Trial
                        Features
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Unlimited
                        Features
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Multi-Language
                        Content
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Data backup and
                        recovery
                      </li>
                      <li>
                        <i className="fas fa-circle-check"></i> Synced To Cloud
                        Database
                      </li>
                    </ul>
                  </div>
                  <Link to="pricing.html" className="th-btn">
                    PURCHASE NOW
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup" data-top="0" data-right="0">
          <img src="assets/img/shape/tech_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-top="0%" data-left="0%">
          <img src="assets/img/shape/square_1.png" alt="shape" />
        </div>
      </section> */}

      <section className="space">
        <div className="container">
          {/* Title */}
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
                      <div
                        className="price-particle"
                        id={item.particleId}
                      ></div>
                    </div>
                  </div>

                  <div className="price-card_content">
                    <div className="checklist">
                      <ul>
                        {item.features.map((feature, index) => (
                          <li
                            key={index}
                            className={
                              item.unavailable.includes(index)
                                ? "unavailable"
                                : ""
                            }
                          >
                            <i className="fas fa-circle-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/pricing" className="th-btn">
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
        <div className="shape-mockup" data-top="0" data-right="0">
          <img src="/assets/img/shape/tech_shape_1.png" alt="shape" />
        </div>

        <div className="shape-mockup" data-top="0%" data-left="0%">
          <img src="/assets/img/shape/square_1.png" alt="shape" />
        </div>
      </section>
    </>
  );
};

export default PricingInfo;
