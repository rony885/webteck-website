// import React from "react";

// const FrequentlyQuestion = () => {
//   return (
//     <div class="bg-smoke overflow-hidden space" id="faq-sec">
//       <div class="container">
//         <div class="row justify-content-center">
//           <div class="col-xl-6 col-lg-9">
//             <div class="title-area text-center text-xl-start">
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
//                 Frequently Ask Question
//               </span>
//               <h2 class="sec-title">
//                 Talk To About Any
//                 <span class="text-theme fw-normal">Question?</span>
//               </h2>
//             </div>
//             <div class="accordion-area accordion" id="faqAccordion">
//               <div class="accordion-card">
//                 <div class="accordion-header" id="collapse-item-1">
//                   <button
//                     class="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse-1"
//                     aria-expanded="false"
//                     aria-controls="collapse-1"
//                   >
//                     Where can I get analytics help?
//                   </button>
//                 </div>
//                 <div
//                   id="collapse-1"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="collapse-item-1"
//                   data-bs-parent="#faqAccordion"
//                 >
//                   <div class="accordion-body">
//                     <p class="faq-text">
//                       Dramatically disseminate real-time portals rather than
//                       top-line action items. Uniquely provide access to low-risk
//                       high-yield products without dynamic products.
//                       Progressively re-engineer low-risk high-yield ideas rather
//                       than emerging alignments.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-card active">
//                 <div class="accordion-header" id="collapse-item-2">
//                   <button
//                     class="accordion-button"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse-2"
//                     aria-expanded="true"
//                     aria-controls="collapse-2"
//                   >
//                     How long should a business plan be?
//                   </button>
//                 </div>
//                 <div
//                   id="collapse-2"
//                   class="accordion-collapse collapse show"
//                   aria-labelledby="collapse-item-2"
//                   data-bs-parent="#faqAccordion"
//                 >
//                   <div class="accordion-body">
//                     <p class="faq-text">
//                       Dramatically disseminate real-time portals rather than
//                       top-line action items. Uniquely provide access to low-risk
//                       high-yield products without dynamic products.
//                       Progressively re-engineer low-risk high-yield ideas rather
//                       than emerging alignments.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="accordion-card">
//                 <div class="accordion-header" id="collapse-item-3">
//                   <button
//                     class="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapse-3"
//                     aria-expanded="false"
//                     aria-controls="collapse-3"
//                   >
//                     Do I need a business plan?
//                   </button>
//                 </div>
//                 <div
//                   id="collapse-3"
//                   class="accordion-collapse collapse"
//                   aria-labelledby="collapse-item-3"
//                   data-bs-parent="#faqAccordion"
//                 >
//                   <div class="accordion-body">
//                     <p class="faq-text">
//                       Dramatically disseminate real-time portals rather than
//                       top-line action items. Uniquely provide access to low-risk
//                       high-yield products without dynamic products.
//                       Progressively re-engineer low-risk high-yield ideas rather
//                       than emerging alignments.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-6 mt-35 mt-xl-0">
//             <div class="faq-img tilt-active">
//               <div class="img-shape icon-masking">
//                 <span
//                   class="mask-icon"
//                   data-mask-src="assets/img/normal/about_3_1-shape.png"
//                 ></span>
//                 <img src="assets/img/normal/about_3_1-shape.png" alt="img" />
//               </div>
//               <img src="assets/img/normal/faq_1_1.png" alt="Faq" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="shape-mockup jump" data-bottom="0%" data-left="0%">
//         <img src="assets/img/shape/tech_shape_5.png" alt="shape" />
//       </div>
//     </div>
//   );
// };

// export default FrequentlyQuestion;

import React from "react";

const FrequentlyQuestion = () => {
  return (
    <div className="bg-smoke overflow-hidden space" id="faq-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-9">
            {/* Title */}
            <div className="title-area text-center text-xl-start">
              <span className="sub-title d-flex align-items-center justify-content-center justify-content-xl-start">
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
                Frequently Ask Question
              </span>

              <h2 className="sec-title">
                Talk To About Any{" "}
                <span className="text-theme fw-normal">Question?</span>
              </h2>
            </div>

            {/* Accordion */}
            <div className="accordion-area accordion" id="faqAccordion">
              {/* Item 1 */}
              <div className="accordion-card">
                <div className="accordion-header" id="faq-1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="false"
                    aria-controls="collapse-1"
                  >
                    Where can I get analytics help?
                  </button>
                </div>

                <div
                  id="collapse-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Dramatically disseminate real-time portals rather than
                      top-line action items. Uniquely provide access to low-risk
                      high-yield products without dynamic products.
                      Progressively re-engineer low-risk high-yield ideas rather
                      than emerging alignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 (Open by default) */}
              <div className="accordion-card active">
                <div className="accordion-header" id="faq-2">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="true"
                    aria-controls="collapse-2"
                  >
                    How long should a business plan be?
                  </button>
                </div>

                <div
                  id="collapse-2"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Dramatically disseminate real-time portals rather than
                      top-line action items. Uniquely provide access to low-risk
                      high-yield products without dynamic products.
                      Progressively re-engineer low-risk high-yield ideas rather
                      than emerging alignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-card">
                <div className="accordion-header" id="faq-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    Do I need a business plan?
                  </button>
                </div>

                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Dramatically disseminate real-time portals rather than
                      top-line action items. Uniquely provide access to low-risk
                      high-yield products without dynamic products.
                      Progressively re-engineer low-risk high-yield ideas rather
                      than emerging alignments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-xl-6 mt-35 mt-xl-0">
            <div className="faq-img tilt-active">
              <div className="img-shape icon-masking">
                <span
                  className="mask-icon"
                  style={{
                    WebkitMaskImage:
                      "url(/assets/img/normal/about_3_1-shape.png)",
                    maskImage: "url(/assets/img/normal/about_3_1-shape.png)",
                  }}
                ></span>
                <img src="assets/img/normal/about_3_1-shape.png" alt="img" />
              </div>

              <img src="assets/img/normal/faq_1_1.png" alt="Faq" />
            </div>
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="shape-mockup jump" style={{ bottom: 0, left: 0 }}>
        <img src="assets/img/shape/tech_shape_5.png" alt="shape" />
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
