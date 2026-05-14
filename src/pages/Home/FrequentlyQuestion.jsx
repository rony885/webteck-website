import React from "react";

const faqData = [
  {
    id: 1,
    question: "Where can I get analytics help?",
    answer:
      "Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high-yield ideas rather than emerging alignments.",
    active: false,
  },
  {
    id: 2,
    question: "How long should a business plan be?",
    answer:
      "Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high-yield ideas rather than emerging alignments.",
    active: true,
  },
  {
    id: 3,
    question: "Do I need a business plan?",
    answer:
      "Dramatically disseminate real-time portals rather than top-line action items. Uniquely provide access to low-risk high-yield products without dynamic products. Progressively re-engineer low-risk high-yield ideas rather than emerging alignments.",
    active: false,
  },
];

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
              {faqData.map((item) => (
                <div
                  className={`accordion-card ${item.active ? "active" : ""}`}
                  key={item.id}
                >
                  <div className="accordion-header" id={`faq-${item.id}`}>
                    <button
                      className={`accordion-button ${
                        !item.active ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${item.id}`}
                      aria-expanded={item.active}
                      aria-controls={`collapse-${item.id}`}
                    >
                      {item.question}
                    </button>
                  </div>

                  <div
                    id={`collapse-${item.id}`}
                    className={`accordion-collapse collapse ${
                      item.active ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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

                <img src="/assets/img/normal/about_3_1-shape.png" alt="img" />
              </div>

              <img src="/assets/img/normal/faq_1_1.png" alt="Faq" />
            </div>
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="shape-mockup jump" style={{ bottom: 0, left: 0 }}>
        <img src="/assets/img/shape/tech_shape_5.png" alt="shape" />
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
