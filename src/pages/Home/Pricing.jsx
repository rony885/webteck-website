// import React from "react";

// const Pricing = () => {
//   return (
//     <section class="space">
//       <div class="container">
//         <div class="title-area text-center">
//           <span class="sub-title">
//             <div class="icon-masking me-2">
//               <span
//                 class="mask-icon"
//                 data-mask-src="assets/img/theme-img/title_shape_2.svg"
//               ></span>
//               <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
//             </div>
//             OUR PRICING
//           </span>
//           <h2 class="sec-title">
//             Popular Pricing <span class="text-theme fw-normal">Package</span>
//           </h2>
//         </div>
//         <div class="row gy-4 justify-content-center">
//           <div class="col-xl-4 col-md-6">
//             <div class="price-card">
//               <div class="price-card_top">
//                 <h3 class="price-card_title">Silver Package</h3>
//                 <p class="price-card_text">
//                   Pricing plan for IT Solution company
//                 </p>
//                 <h4 class="price-card_price">
//                   $199.00 <span class="duration">/Per Month</span>
//                 </h4>
//                 <div class="particle">
//                   <div class="price-particle" id="price-p1"></div>
//                 </div>
//               </div>
//               <div class="price-card_content">
//                 <div class="checklist">
//                   <ul>
//                     <li>
//                       <i class="fas fa-circle-check"></i> 30 Days Trial Features
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Unlimited Features
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Multi-Language Content
//                     </li>
//                     <li class="unavailable">
//                       <i class="fas fa-circle-check"></i> Data backup and
//                       recovery
//                     </li>
//                     <li class="unavailable">
//                       <i class="fas fa-circle-check"></i> Synced To Cloud
//                       Database
//                     </li>
//                   </ul>
//                 </div>
//                 <a href="pricing.html" class="th-btn">
//                   PURCHASE NOW<i class="fa-regular fa-arrow-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-4 col-md-6">
//             <div class="price-card">
//               <div class="price-card_top">
//                 <h3 class="price-card_title">Gold Package</h3>
//                 <p class="price-card_text">
//                   Pricing plan for IT Solution company
//                 </p>
//                 <h4 class="price-card_price">
//                   $299.00 <span class="duration">/Per Month</span>
//                 </h4>
//                 <div class="particle">
//                   <div class="price-particle" id="price-p2"></div>
//                 </div>
//               </div>
//               <div class="price-card_content">
//                 <div class="checklist">
//                   <ul>
//                     <li>
//                       <i class="fas fa-circle-check"></i> 30 Days Trial Features
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Unlimited Features
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Multi-Language Content
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Data backup and
//                       recovery
//                     </li>
//                     <li class="unavailable">
//                       <i class="fas fa-circle-check"></i> Synced To Cloud
//                       Database
//                     </li>
//                   </ul>
//                 </div>
//                 <a href="pricing.html" class="th-btn">
//                   PURCHASE NOW<i class="fa-regular fa-arrow-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-4 col-md-6">
//             <div class="price-card">
//               <div class="price-card_top">
//                 <h3 class="price-card_title">Platinum Package</h3>
//                 <p class="price-card_text">
//                   Pricing plan for IT Solution company
//                 </p>
//                 <h4 class="price-card_price">
//                   $599.00 <span class="duration">/Per Month</span>
//                 </h4>
//                 <div class="particle">
//                   <div class="price-particle" id="price-p3"></div>
//                 </div>
//               </div>
//               <div class="price-card_content">
//                 <div class="checklist">
//                   <ul>
//                     <li>
//                       <i class="fas fa-circle-check"></i> 30 Days Trial Features
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Unlimited Features
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Multi-Language Content
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Data backup and
//                       recovery
//                     </li>
//                     <li>
//                       <i class="fas fa-circle-check"></i> Synced To Cloud
//                       Database
//                     </li>
//                   </ul>
//                 </div>
//                 <a href="pricing.html" class="th-btn">
//                   PURCHASE NOW<i class="fa-regular fa-arrow-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="shape-mockup" data-top="0" data-right="0">
//         <img src="assets/img/shape/tech_shape_1.png" alt="shape" />
//       </div>
//       <div class="shape-mockup" data-top="0%" data-left="0%">
//         <img src="assets/img/shape/square_1.png" alt="shape" />
//       </div>
//     </section>
//   );
// };

// export default Pricing;

import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="space">
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
            OUR PRICING
          </span>

          <h2 className="sec-title">
            Popular Pricing{" "}
            <span className="text-theme fw-normal">Package</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="row gy-4 justify-content-center">
          {/* Silver */}
          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="price-card_top">
                <h3 className="price-card_title">Silver Package</h3>
                <p className="price-card_text">
                  Pricing plan for IT Solution company
                </p>

                <h4 className="price-card_price">
                  $199.00 <span className="duration">/Per Month</span>
                </h4>

                <div className="particle">
                  <div className="price-particle" id="price-p1"></div>
                </div>
              </div>

              <div className="price-card_content">
                <ul className="checklist">
                  <li>
                    <i className="fas fa-circle-check"></i> 30 Days Trial
                    Features
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Unlimited Features
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Multi-Language
                    Content
                  </li>
                  <li className="unavailable">
                    <i className="fas fa-circle-check"></i> Data backup and
                    recovery
                  </li>
                  <li className="unavailable">
                    <i className="fas fa-circle-check"></i> Synced To Cloud
                    Database
                  </li>
                </ul>

                <Link to="#" className="th-btn">
                  PURCHASE NOW
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Gold */}
          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="price-card_top">
                <h3 className="price-card_title">Gold Package</h3>
                <p className="price-card_text">
                  Pricing plan for IT Solution company
                </p>

                <h4 className="price-card_price">
                  $299.00 <span className="duration">/Per Month</span>
                </h4>

                <div className="particle">
                  <div className="price-particle" id="price-p2"></div>
                </div>
              </div>

              <div className="price-card_content">
                <ul className="checklist">
                  <li>
                    <i className="fas fa-circle-check"></i> 30 Days Trial
                    Features
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Unlimited Features
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Multi-Language
                    Content
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Data backup and
                    recovery
                  </li>
                  <li className="unavailable">
                    <i className="fas fa-circle-check"></i> Synced To Cloud
                    Database
                  </li>
                </ul>

                <Link to="#" className="th-btn">
                  PURCHASE NOW
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Platinum */}
          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="price-card_top">
                <h3 className="price-card_title">Platinum Package</h3>
                <p className="price-card_text">
                  Pricing plan for IT Solution company
                </p>

                <h4 className="price-card_price">
                  $599.00 <span className="duration">/Per Month</span>
                </h4>

                <div className="particle">
                  <div className="price-particle" id="price-p3"></div>
                </div>
              </div>

              <div className="price-card_content">
                <ul className="checklist">
                  <li>
                    <i className="fas fa-circle-check"></i> 30 Days Trial
                    Features
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Unlimited Features
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Multi-Language
                    Content
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Data backup and
                    recovery
                  </li>
                  <li>
                    <i className="fas fa-circle-check"></i> Synced To Cloud
                    Database
                  </li>
                </ul>

                <Link to="#" className="th-btn">
                  PURCHASE NOW
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="shape-mockup" style={{ top: 0, right: 0 }}>
        <img src="assets/img/shape/tech_shape_1.png" alt="shape" />
      </div>

      <div className="shape-mockup" style={{ top: "0%", left: 0 }}>
        <img src="assets/img/shape/square_1.png" alt="shape" />
      </div>
    </section>
  );
};

export default Pricing;
