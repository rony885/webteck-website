// import React from "react";

// const AboutInfo = () => {
//   return (
//     <>
//       <div
//         class="breadcumb-wrapper"
//         data-bg-src="assets/img/bg/breadcumb-bg.jpg"
//       >
//         <div class="container">
//           <div class="breadcumb-content">
//             <h1 class="breadcumb-title">About Us</h1>
//             <ul class="breadcumb-menu">
//               <li>
//                 <a href="index-2.html">Home</a>
//               </li>
//               <li>About Us</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div class="overflow-hidden space" id="about-sec">
//         <div class="container">
//           <div class="row align-items-center">
//             <div class="col-xl-6 mb-30 mb-xl-0">
//               <div class="img-box1">
//                 <div class="img1">
//                   <img src="assets/img/normal/about_1_1.png" alt="About" />
//                 </div>
//                 <div class="shape1">
//                   <img src="assets/img/normal/about_shape_1.png" alt="shape" />
//                 </div>
//                 <div class="year-counter">
//                   <h3 class="year-counter_number">
//                     <span class="counter-number">25</span>
//                   </h3>
//                   <p class="year-counter_text">Years Experience</p>
//                 </div>
//               </div>
//             </div>
//             <div class="col-xl-6">
//               <div class="ps-xxl-4 ms-xl-3">
//                 <div class="title-area mb-35">
//                   <span class="sub-title">
//                     <div class="icon-masking me-2">
//                       <span
//                         class="mask-icon"
//                         data-mask-src="assets/img/theme-img/title_shape_1.svg"
//                       ></span>
//                       <img
//                         src="assets/img/theme-img/title_shape_1.svg"
//                         alt="shape"
//                       />
//                     </div>
//                     About Us
//                   </span>
//                   <h2 class="sec-title">
//                     We Are Increasing Business Success With
//                     <span class="text-theme">IT Solution</span>
//                   </h2>
//                 </div>
//                 <p class="mt-n2 mb-25">
//                   Collaboratively envisioneer user friendly supply chains and
//                   cross unit imperative. Authoritativel fabricate competitive
//                   resource and holistic synergy. Uniquely generate efficient
//                   schemas before future.
//                 </p>
//                 <div class="about-feature-wrap">
//                   <div class="about-feature">
//                     <div class="about-feature_icon">
//                       <img
//                         src="assets/img/icon/about_feature_1_1.svg"
//                         alt="Icon"
//                       />
//                     </div>
//                     <div class="media-body">
//                       <h3 class="about-feature_title">Certified Company</h3>
//                       <p class="about-feature_text">
//                         Best Provide Skills Services
//                       </p>
//                     </div>
//                   </div>
//                   <div class="about-feature">
//                     <div class="about-feature_icon">
//                       <img
//                         src="assets/img/icon/about_feature_1_2.svg"
//                         alt="Icon"
//                       />
//                     </div>
//                     <div class="media-body">
//                       <h3 class="about-feature_title">Expart Team</h3>
//                       <p class="about-feature_text">100% Expert Team</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="btn-group">
//                   <a href="about.html" class="th-btn">
//                     DISCOVER MORE<i class="fa-regular fa-arrow-right ms-2"></i>
//                   </a>
//                   <div class="call-btn">
//                     <div class="play-btn">
//                       <i class="fas fa-phone"></i>
//                     </div>
//                     <div class="media-body">
//                       <span class="btn-text">Call Us On:</span>
//                       <a href="tel:+19088000393" class="btn-title">
//                         +190-8800-0393
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutInfo;

import React from "react";

const AboutInfo = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url(assets/img/bg/breadcumb-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="/assets/img/normal/about_1_1.png" alt="About" />
                </div>

                <div className="shape1">
                  <img src="/assets/img/normal/about_shape_1.png" alt="shape" />
                </div>

                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">25</span>
                  </h3>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <span
                        className="mask-icon"
                        data-mask-src="assets/img/theme-img/title_shape_1.svg"
                      ></span>
                      <img
                        src="assets/img/theme-img/title_shape_1.svg"
                        alt="shape"
                      />
                    </div>
                    About Us
                  </span>

                  <h2 className="sec-title">
                    We Are Increasing Business Success With{" "}
                    <span className="text-theme">IT Solution</span>
                  </h2>
                </div>

                <p className="mt-n2 mb-25">
                  Collaboratively envisioneer user friendly supply chains and
                  cross unit imperative. Authoritativel fabricate competitive
                  resource and holistic synergy. Uniquely generate efficient
                  schemas before future.
                </p>

                {/* Features */}
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Certified Company</h3>
                      <p className="about-feature_text">
                        Best Provide Skills Services
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expert Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>

                {/* Button Group */}
                <div className="btn-group">
                  <a href="about.html" className="th-btn">
                    DISCOVER MORE
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>

                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <a href="tel:+19088000393" className="btn-title">
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
