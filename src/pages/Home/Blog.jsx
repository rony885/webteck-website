import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import blogsArray from "../../DataJs/blogs.js";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsArray);
  }, []);

  return (
    <section
      className="bg-top-right overflow-hidden space"
      id="blog-sec"
      style={{
        backgroundImage: "url(/assets/img/bg/blog_bg_1.png)",
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
              <img src="/assets/img/theme-img/title_shape_2.svg" alt="shape" />
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
            {blogs &&
              blogs.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src={item.image} alt="blog" />
                    </div>

                    <div className="blog-content">
                      <div className="blog-meta">
                        <span>
                          <i className="fal fa-calendar-days"></i> {item.date}
                        </span>
                        <span>
                          {/* <i className="fal fa-comments"></i> {item.comments} */}
                        </span>
                      </div>

                      <h3 className="box-title">
                        <Link to={`/blog/blog-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="blog-text" style={{ textAlign: "justify" }}>
                        {item.description?.[0]
                          ?.split(" ")
                          .slice(0, 15)
                          .join(" ")}
                        ...
                      </p>

                      <div className="blog-bottom">
                        <Link to="#" className="author">
                          <img src={item.authorImage} alt="author" />
                          By {item.author}
                        </Link>

                        <Link
                          to={`/blog/blog-details/${item.id}`}
                          className="line-btn"
                        >
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
