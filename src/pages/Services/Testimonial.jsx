import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonialData = [
  {
    id: 1,
    img: "assets/img/testimonial/testi_2_1.jpg",
    name: "David Farnandes",
    role: "CEO at Anaton",
  },
  {
    id: 2,
    img: "assets/img/testimonial/testi_2_2.jpg",
    name: "Jackline Techie",
    role: "CEO at Kormola",
  },
  {
    id: 3,
    img: "assets/img/testimonial/testi_2_3.jpg",
    name: "Abraham Khalil",
    role: "CEO at Rimasu",
  },
  {
    id: 4,
    img: "assets/img/testimonial/testi_2_1.jpg",
    name: "David Farnandes",
    role: "CEO at Anaton",
  },
  {
    id: 5,
    img: "assets/img/testimonial/testi_2_2.jpg",
    name: "Jackline Techie",
    role: "CEO at Kormola",
  },
  {
    id: 6,
    img: "assets/img/testimonial/testi_2_3.jpg",
    name: "Abraham Khalil",
    role: "CEO at Rimasu",
  },
];

const Testimonial = () => {
  return (
    <section
      className="bg-auto space"
      style={{
        backgroundImage: "url(assets/img/bg/testi_bg_2.png)",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="title-area text-center">
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span
                className="mask-icon"
                style={{
                  WebkitMaskImage:
                    "url(assets/img/theme-img/title_shape_2.svg)",
                  maskImage: "url(assets/img/theme-img/title_shape_2.svg)",
                }}
              ></span>
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            CUSTOMER FEEDBACK
          </span>

          <h2 className="sec-title">
            What Happy Clients Says <br />
            <span className="text-theme fw-normal">About Us?</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="slider-area">
          <Swiper
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 1 },
              1200: { slidesPerView: 2 },
            }}
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testi-box">
                  <div className="testi-box_img">
                    <img src={item.img} alt="Avater" />
                    <div className="testi-box_quote">
                      <img src="assets/img/icon/quote_left_2.svg" alt="quote" />
                    </div>
                  </div>

                  <div className="testi-box_content">
                    <p className="testi-box_text">
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration.
                    </p>

                    <div className="testi-box_review">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star-sharp"></i>
                      ))}
                    </div>

                    <h3 className="box-title">{item.name}</h3>
                    <p className="testi-box_desig">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Shapes */}
      <div
        className="shape-mockup moving d-none d-xl-block"
        style={{ bottom: "0%", left: "10%" }}
      >
        <img src="assets/img/shape/line_1.png" alt="shape" />
      </div>

      <div
        className="shape-mockup jump d-none d-xl-block"
        style={{ top: "20%", right: "2%" }}
      >
        <img src="assets/img/shape/line_2.png" alt="shape" />
      </div>
    </section>
  );
};

export default Testimonial;
