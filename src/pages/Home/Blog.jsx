import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    img: "assets/img/blog/blog_1_1.jpg",
    date: "15 Jan, 2025",
    comments: "2 Comments",
    title: "Unsatiable entreaties may collecting Power.",
  },
  {
    id: 2,
    img: "assets/img/blog/blog_1_2.jpg",
    date: "16 Jan, 2025",
    comments: "3 Comments",
    title: "Regional Manager & limited time management.",
  },
  {
    id: 3,
    img: "assets/img/blog/blog_1_3.jpg",
    date: "17 Jan, 2025",
    comments: "2 Comments",
    title: "What’s the Holding Back the It Solution Industry?",
  },
  {
    id: 4,
    img: "assets/img/blog/blog_1_4.jpg",
    date: "19 Jan, 2025",
    comments: "4 Comments",
    title: "Latin derived from Cicero's 1st-century BC",
  },
];

const Blog = () => {
  return (
    <section
      className="bg-top-right overflow-hidden space"
      id="blog-sec"
      style={{
        backgroundImage: "url(assets/img/bg/blog_bg_1.png)",
      }}
    >
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
            NEWS & ARTICLES
          </span>

          <h2 className="sec-title">
            Get Every Single Update{" "}
            <span className="text-theme fw-normal">Blog</span>
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
              prevEl: ".blog-prev",
              nextEl: ".blog-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {blogs.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={item.img} alt="blog" />
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>
                        <i className="fal fa-calendar-days"></i> {item.date}
                      </span>
                      <span>
                        <i className="fal fa-comments"></i> {item.comments}
                      </span>
                    </div>

                    <h3 className="box-title">
                      <Link to="#">{item.title}</Link>
                    </h3>

                    <p className="blog-text">
                      Progressively plagiarize quality metrics for impactful
                      data. Assertively. Holisticly leverage existing magnetic.
                    </p>

                    <div className="blog-bottom">
                      <Link to="#" className="author">
                        <img
                          src="assets/img/blog/author-1-1.png"
                          alt="author"
                        />
                        By Themeholy
                      </Link>

                      <Link to="#" className="line-btn">
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="slider-arrow style3 slider-prev blog-prev">
            <i className="far fa-arrow-left"></i>
          </button>

          <button className="slider-arrow style3 slider-next blog-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Shape */}
      <div className="shape-mockup" style={{ bottom: 0, left: 0 }}>
        <div className="particle-2 small" id="particle-4"></div>
      </div>
    </section>
  );
};

export default Blog;
