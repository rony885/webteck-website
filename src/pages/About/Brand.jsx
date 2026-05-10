// import React from "react";

// const Brand = () => {
//   return (
//     <section
//       class="bg-top-right overflow-hidden space-bottom"
//       id="blog-sec"
//       data-bg-src="assets/img/bg/blog_bg_1.png"
//     >
//       <div class="container">
//         <div class="slider-area text-center">
//           <div
//             class="swiper th-slider"
//             data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'
//           >
//             <div class="swiper-wrapper">
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_1.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_2.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_3.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_4.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_5.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_6.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_1.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_2.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_3.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_4.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_5.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box">
//                   <img src="assets/img/brand/brand_1_6.png" alt="Brand Logo" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="shape-mockup" data-bottom="0" data-left="0">
//         <div class="particle-2 small" id="particle-4"></div>
//       </div>
//     </section>
//   );
// };

// export default Brand;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const brandData = [
  "assets/img/brand/brand_1_1.png",
  "assets/img/brand/brand_1_2.png",
  "assets/img/brand/brand_1_3.png",
  "assets/img/brand/brand_1_4.png",
  "assets/img/brand/brand_1_5.png",
  "assets/img/brand/brand_1_6.png",
  "assets/img/brand/brand_1_1.png",
  "assets/img/brand/brand_1_2.png",
  "assets/img/brand/brand_1_3.png",
  "assets/img/brand/brand_1_4.png",
  "assets/img/brand/brand_1_5.png",
  "assets/img/brand/brand_1_6.png",
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
