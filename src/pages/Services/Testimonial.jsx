import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import testimonialsArray from "../../DataJs/testimonials.js";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsArray);
  }, []);

  return (
    <section
      className="bg-auto space"
      style={{
        backgroundImage: "url(/assets/img/bg/testi_bg_2.png)",
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
                    "url(/assets/img/theme-img/title_shape_2.svg)",
                  maskImage: "url(/assets/img/theme-img/title_shape_2.svg)",
                }}
              ></span>

              <img src="/assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            CUSTOMER FEEDBACK
          </span>

          <h2 className="sec-title">
            What Happy Clients Says <br />
            <span className="text-theme fw-normal">About Us?</span>
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
              prevEl: ".testi-prev",
              nextEl: ".testi-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 1 },
              1200: { slidesPerView: 2 },
            }}
          >
            {testimonials &&
              testimonials.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img src={item.img} alt={item.name} />

                      <div className="testi-box_quote">
                        <img
                          src="/assets/img/icon/quote_left_2.svg"
                          alt="quote"
                        />
                      </div>
                    </div>

                    <div className="testi-box_content">
                      <p className="testi-box_text">
                        Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness an expanded array of
                        models via effective collaboration.
                      </p>

                      <div className="testi-box_review">
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                      </div>

                      <h3 className="box-title">{item.name}</h3>
                      <p className="testi-box_desig">{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="slider-arrow style3 slider-prev testi-prev">
            <i className="far fa-arrow-left"></i>
          </button>

          <button className="slider-arrow style3 slider-next testi-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>

        {/* Shapes */}
        <div className="shape-mockup moving d-none d-xl-block">
          <img src="/assets/img/shape/line_1.png" alt="shape" />
        </div>

        <div className="shape-mockup jump d-none d-xl-block">
          <img src="/assets/img/shape/line_2.png" alt="shape" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
