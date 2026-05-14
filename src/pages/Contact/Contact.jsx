import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        // data-bg-src="assets/img/bg/breadcumb-bg.jpg"
        style={{
          backgroundImage: `url(/assets/img/bg/breadcumb-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="index-2.html">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="space" id="contact-sec-info">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Our Office Address</h4>
                  <span className="contact-info_text">
                    Burnsville, MN 55337 Streat,
                    <br />
                    United States
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Call Us Anytime</h4>
                  <span className="contact-info_text">
                    <Link to="tel:+65485965789">(+65) - 48596 - 5789</Link>
                    <Link to="tel:+65485965789">+65-48596-5789</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Send An Email</h4>
                  <span className="contact-info_text">
                    <Link to="mailto:info@healixsoft.com">
                      info@healixsoft.com
                    </Link>
                    <Link to="mailto:support@healixsoft.com">
                      support@healixsoft.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        className="bg-smoke space"
        data-bg-src="assets/img/bg/contact_bg_1.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="title-area mb-35 text-xl-start text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    ></span>
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  contact with us!
                </span>

                <h2 className="sec-title">Have Any Questions?</h2>

                <p className="sec-text">
                  Enthusiastically disintermediate one-to-one leadership via
                  business e-commerce. Dramatically reintermediate compelling
                  process improvements rather than empowered relationships.
                </p>
              </div>

              <form className="contact-form ajax-contact">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                    />
                    <i className="fal fa-user"></i>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                    />
                    <i className="fal fa-envelope"></i>
                  </div>

                  <div className="form-group col-md-6">
                    <select name="subject" className="form-select">
                      <option value="" disabled selected hidden>
                        Select Subject
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Brand Marketing">Brand Marketing</option>
                      <option value="UI/UX Designing">UI/UX Designing</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                    <i className="fal fa-chevron-down"></i>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      placeholder="Phone Number"
                    />
                    <i className="fal fa-phone"></i>
                  </div>

                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      rows="3"
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                    <i className="fal fa-comment"></i>
                  </div>

                  <div className="form-btn text-xl-start text-center col-12">
                    <button type="submit" className="th-btn">
                      Send Message
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>

                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sThemeholy!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
          title="Google Map"
          loading="lazy"
          style={{ border: 0, width: "100%", height: "400px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
