// import React from "react";

// const Contact = () => {
//   return (
//     <section class="position-relative space">
//       <div class="th-bg-img" data-bg-src="assets/img/bg/cta_bg_2.jpg">
//         <img src="assets/img/bg/bg_overlay_1.png" alt="overlay" />
//       </div>
//       <div class="container z-index-common">
//         <div class="row justify-content-center">
//           <div class="col-xl-6 col-lg-7 col-md-9 text-center">
//             <div class="title-area mb-35">
//               <span class="sub-title">
//                 <div class="icon-masking me-2">
//                   <span
//                     class="mask-icon"
//                     data-mask-src="assets/img/theme-img/title_shape_2.svg"
//                   ></span>
//                   <img
//                     src="assets/img/theme-img/title_shape_2.svg"
//                     alt="shape"
//                   />
//                 </div>
//                 CONTACT US
//               </span>
//               <h2 class="sec-title text-white">
//                 Need Any Kind Of IT Solution For
//                 <span class="text-theme fw-normal">Your Business?</span>
//               </h2>
//             </div>
//             <a href="contact.html" class="th-btn style3">
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="position-relative space">
      {/* Background */}
      <div
        className="th-bg-img"
        style={{
          backgroundImage: "url(/assets/img/bg/cta_bg_2.jpg)",
        }}
      >
        <img src="/assets/img/bg/bg_overlay_1.png" alt="overlay" />
      </div>

      {/* Content */}
      <div className="container z-index-common">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="title-area mb-35">
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
                  <img
                    src="assets/img/theme-img/title_shape_2.svg"
                    alt="shape"
                  />
                </div>
                CONTACT US
              </span>

              <h2 className="sec-title text-white">
                Need Any Kind Of IT Solution For{" "}
                <span className="text-theme fw-normal">Your Business?</span>
              </h2>
            </div>

            <Link to="/contact" className="th-btn style3">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
