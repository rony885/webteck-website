import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const brandData = [
  "/assets/img/brand/brand_1_1.png",
  "/assets/img/brand/brand_1_2.png",
  "/assets/img/brand/brand_1_3.png",
  "/assets/img/brand/brand_1_4.png",
  "/assets/img/brand/brand_1_5.png",
  "/assets/img/brand/brand_1_6.png",
  "/assets/img/brand/brand_1_1.png",
  "/assets/img/brand/brand_1_2.png",
  "/assets/img/brand/brand_1_3.png",
  "/assets/img/brand/brand_1_4.png",
  "/assets/img/brand/brand_1_5.png",
  "/assets/img/brand/brand_1_6.png",
];

const Brand = () => {
  return (
    <section
      className="bg-top-right overflow-hidden space-bottom"
      id="blog-sec"
      style={{
        backgroundImage: "url(assets/img/bg/blog_bg_1.png)",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="slider-area text-center">
          <Swiper
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
            className="th-slider"
          >
            {brandData.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="brand-box">
                  <img src={img} alt="Brand Logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="shape-mockup" data-bottom="0" data-left="0">
        <div className="particle-2 small" id="particle-4"></div>
      </div>
    </section>
  );
};

export default Brand;
