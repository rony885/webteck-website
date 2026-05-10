// import React from 'react'

// const Brand = () => {
//   return (
//     <div class="brand-sec1" data-pos-for="#faq-sec" data-sec-pos="bottom-half">
//       <div class="container py-5">
//         <div class="slider-area text-center">
//           <div
//             class="swiper th-slider"
//             id="brandSlider2"
//             data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'
//           >
//             <div class="swiper-wrapper">
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_1.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_2.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_3.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_4.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_5.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_6.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_1.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_2.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_3.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_4.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_5.png" alt="Brand Logo" />
//                 </div>
//               </div>
//               <div class="swiper-slide">
//                 <div class="brand-box py-20">
//                   <img src="assets/img/brand/brand_2_6.png" alt="Brand Logo" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button
//             data-slider-prev="#brandSlider2"
//             class="slider-arrow style3 slider-prev"
//           >
//             <i class="far fa-arrow-left"></i>
//           </button>
//           <button
//             data-slider-next="#brandSlider2"
//             class="slider-arrow style3 slider-next"
//           >
//             <i class="far fa-arrow-right"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Brand

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const brands = [
  "assets/img/brand/brand_2_1.png",
  "assets/img/brand/brand_2_2.png",
  "assets/img/brand/brand_2_3.png",
  "assets/img/brand/brand_2_4.png",
  "assets/img/brand/brand_2_5.png",
  "assets/img/brand/brand_2_6.png",
];

const Brand = () => {
  return (
    <div className="brand-sec1">
      <div className="container py-5">
        <div className="slider-area text-center position-relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".brand-prev",
              nextEl: ".brand-next",
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 5 },
            }}
          >
            {brands.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="brand-box py-20">
                  <img src={logo} alt="Brand Logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="slider-arrow style3 slider-prev brand-prev">
            <i className="far fa-arrow-left"></i>
          </button>

          <button className="slider-arrow style3 slider-next brand-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brand;
