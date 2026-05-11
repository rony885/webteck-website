import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <>
      <section className="position-relative space">
        <div className="th-bg-img" data-bg-src="assets/img/bg/cta_bg_2.jpg" >
          <img src="/assets/img/bg/bg_overlay_1.png" alt="overlay" />
        </div>
        <div className="container z-index-common">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div className="title-area mb-35">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    ></span>
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  CONTACT US
                </span>
                <h2 className="sec-title text-white">
                  Need Any Kind Of IT Solution For
                  <span className="text-theme fw-normal">Your Business?</span>
                </h2>
              </div>
              <a href="contact.html" className="th-btn style3">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-auto space"
        style={{
          backgroundImage: "url(/assets/img/bg//testi_bg_2.png)",
        }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  data-mask-src="assets/img/theme-img/title_shape_2.svg"
                ></span>
                <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
              </div>
              CUSTOMER FEEDBACK
            </span>
            <h2 className="sec-title">
              What Happy Clients Says
              <br />
              <span className="text-theme fw-normal">About Us?</span>
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="testiSlider2"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"2"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img
                        src="assets/img/testimonial/testi_2_1.jpg"
                        alt="Avater"
                      />
                      <div className="testi-box_quote">
                        <img
                          src="assets/img/icon/quote_left_2.svg"
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
                      <h3 className="box-title">David Farnandes</h3>
                      <p className="testi-box_desig">CEO at Anaton</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img
                        src="assets/img/testimonial/testi_2_2.jpg"
                        alt="Avater"
                      />
                      <div className="testi-box_quote">
                        <img
                          src="assets/img/icon/quote_left_2.svg"
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
                      <h3 className="box-title">Jackline Techie</h3>
                      <p className="testi-box_desig">CEO at Kormola</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img
                        src="assets/img/testimonial/testi_2_3.jpg"
                        alt="Avater"
                      />
                      <div className="testi-box_quote">
                        <img
                          src="assets/img/icon/quote_left_2.svg"
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
                      <h3 className="box-title">Abraham Khalil</h3>
                      <p className="testi-box_desig">CEO at Rimasu</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img
                        src="assets/img/testimonial/testi_2_1.jpg"
                        alt="Avater"
                      />
                      <div className="testi-box_quote">
                        <img
                          src="assets/img/icon/quote_left_2.svg"
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
                      <h3 className="box-title">David Farnandes</h3>
                      <p className="testi-box_desig">CEO at Anaton</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img
                        src="assets/img/testimonial/testi_2_2.jpg"
                        alt="Avater"
                      />
                      <div className="testi-box_quote">
                        <img
                          src="assets/img/icon/quote_left_2.svg"
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
                      <h3 className="box-title">Jackline Techie</h3>
                      <p className="testi-box_desig">CEO at Kormola</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box">
                    <div className="testi-box_img">
                      <img
                        src="assets/img/testimonial/testi_2_3.jpg"
                        alt="Avater"
                      />
                      <div className="testi-box_quote">
                        <img
                          src="assets/img/icon/quote_left_2.svg"
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
                      <h3 className="box-title">Abraham Khalil</h3>
                      <p className="testi-box_desig">CEO at Rimasu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-slider-prev="#testiSlider2"
              className="slider-arrow style3 slider-prev"
            >
              <i className="far fa-arrow-left"></i>
            </button>
            <button
              data-slider-next="#testiSlider2"
              className="slider-arrow style3 slider-next"
            >
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div
          className="shape-mockup moving d-none d-xl-block"
          data-bottom="0%"
          data-left="10%"
        >
          <img src="assets/img/shape/line_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-top="20%"
          data-right="2%"
        >
          <img src="assets/img/shape/line_2.png" alt="shape" />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
