import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogData = [
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
    title: "What’s the Holding Back the IT Solution Industry?",
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
      className="bg-top-right overflow-hidden space-bottom"
      id="blog-sec"
      style={{
        backgroundImage: "url(assets/img/bg/blog_bg_1.png)",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container space-bottom">
        {/* TITLE */}
        <div className="title-area text-center">
          <span className="sub-title">NEWS & ARTICLES</span>
          <h2 className="sec-title">
            Get Every Single Update <span className="text-theme">Blog</span>
          </h2>
        </div>

        {/* SLIDER */}
        <div className="slider-area">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={30} // 👈 GAP BETWEEN SLIDES
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="th-slider has-shadow"
          >
            {blogData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={item.img} alt="blog" />
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#">
                        <i className="fal fa-calendar-days"></i> {item.date}
                      </a>
                      <a href="#">
                        <i className="fal fa-comments"></i> {item.comments}
                      </a>
                    </div>

                    <h3 className="box-title">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION BUTTONS */}
          <button className="slider-arrow style3 slider-prev">
            <i className="far fa-arrow-left"></i>
          </button>

          <button className="slider-arrow style3 slider-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
