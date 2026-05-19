import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Frequently Asked Question</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Frequently Asked Question</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
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
                  src="/assets/img/theme-img/title_shape_2.svg"
                  alt="shape"
                />
              </div>
              FAQ
            </span>
            <h2 className="sec-title">
              Talk To About Any <span className="text-theme">Question?</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-1">
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
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2 active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      How long should Link business plan be?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Do I need Link business plan?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      How To Choose A Good QA Consultant?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="accordion-area accordion" id="faqAccordion2">
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      What is off page SEO link building?
                    </button>
                  </div>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-5"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      Best SEO Practices for Page Layouts
                    </button>
                  </div>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-6"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-7"
                      aria-expanded="false"
                      aria-controls="collapse-7"
                    >
                      How can I order web design for my website?
                    </button>
                  </div>
                  <div
                    id="collapse-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-7"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-8"
                      aria-expanded="false"
                      aria-controls="collapse-8"
                    >
                      Outsourced IT Services For Small Business?
                    </button>
                  </div>
                  <div
                    id="collapse-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-8"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style2">
                  <div className="accordion-header" id="collapse-item-9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-9"
                      aria-expanded="false"
                      aria-controls="collapse-9"
                    >
                      Digital solution for your startup agency?
                    </button>
                  </div>
                  <div
                    id="collapse-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-9"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Dramatically disseminate real-time portals rather than
                        top-line action items. Uniquely provide access to
                        low-risk high-yield products without dynamic products.
                        Progressively re-engineer low-risk high-yield ideas
                        rather than emerging alignments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="space"
        id="contact-sec"
        style={{
          backgroundImage: "url('/assets/img/bg/form_bg_1.jpg')",
        }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  style={{
                    WebkitMaskImage:
                      "url('/assets/img/theme-img/title_shape_2.svg')",
                    maskImage: "url('/assets/img/theme-img/title_shape_2.svg')",
                  }}
                ></span>

                <img
                  src="/assets/img/theme-img/title_shape_2.svg"
                  alt="shape"
                />
              </div>
              GET A QUOTE
            </span>
            <h2 className="sec-title">
              Request A Free <span className="text-theme">Consultation</span>
            </h2>
          </div>
          <form className="quote-form ajax-contact">
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                />
                <i className="fal fa-user"></i>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
                <i className="fal fa-envelope"></i>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  name="number"
                  id="number"
                  placeholder="Phone number"
                />
                <i className="fal fa-phone"></i>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
                <i className="fal fa-tag"></i>
              </div>
              <div className="form-group col-12">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  className="form-control"
                  placeholder="Write Your Message"
                ></textarea>
                <i className="fal fa-pencil"></i>
              </div>
              <div className="form-btn text-center col-12">
                <button className="th-btn" disabled>
                  Send Message<i className="fa-regular fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Faq;
