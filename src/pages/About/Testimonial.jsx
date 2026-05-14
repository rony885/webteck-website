import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css/navigation";

import testimonialsArray from "../../DataJs/testimonials.js";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsArray);
  }, []);

  return (
    <section
      className="bg-top-center space"
      style={{
        backgroundImage: "url('/assets/img/bg/testi_bg_3.jpg')",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="title-area text-center">
          <div className="shadow-title color2">TESTIMONIALS</div>

          <span className="sub-title d-flex align-items-center justify-content-center">
            <div className="icon-masking me-2">
              <img src="/assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            CUSTOMER FEEDBACK
          </span>

          <h2 className="sec-title text-white">
            What Happy Clients Says <br />
            <span className="text-theme">About Us?</span>
          </h2>
        </div>

        {/* Swiper */}
        <div className="slider-area">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testi-grid">
                  <div className="testi-grid_img">
                    <img src={item.img} alt="avatar" />
                    <div className="testi-grid_quote">
                      <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                    </div>
                  </div>

                  <div className="testi-grid_review">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star-sharp"></i>
                    ))}
                  </div>

                  <div className="testi-grid_content">
                    <p className="testi-grid_text">{item.text}</p>
                    <h3 className="box-title">{item.name}</h3>
                    <p className="testi-grid_desig">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
