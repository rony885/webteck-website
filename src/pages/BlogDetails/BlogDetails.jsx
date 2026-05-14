import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Details</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                  <img src="assets/img/blog/blog-s-1-1.jpg" alt="Blog Imagee" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="blog.html">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </Link>
                    <Link to="blog.html">
                      <i className="fa-light fa-calendar-days"></i>21 June, 2025
                    </Link>
                    <Link to="blog-details.html">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    Unsatiable entreaties may collecting Power.
                  </h2>
                  <p>
                    Rapidiously repurpose leading edge growth strategies with
                    just in time web readiness service Objectively communicate
                    timely meta services for synergistic initiatives
                    functionalities.
                  </p>
                  <p>
                    Uniquely pursue emerging experiences before emerging
                    content. Efficiently underwhelm customer directed total
                    linkage after B2C synergy. Dynamically simplify superior
                    human capital whereas efficient infrastructures.
                    Authoritatively generate e-business web-readiness after
                    wireless outsourcing. Seamlessly evisculate visionary
                    scenarios for resource maximizing mindshare.
                  </p>
                  <p>
                    Assertively recaptiualize interdependent alignments via
                    backend leadership skills. Monotonectally formulate focused
                    quality vectors whereas proactive infomediaries.
                    Energistically utilize ethical initiatives without impactful
                    applications. Authoritatively coordinate seamless e-services
                    and user friendly information. Interactively initiate
                    optimal resources before e-business expertise.
                  </p>
                  <blockquote>
                    <p>
                      “IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE
                      READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.”
                    </p>
                    <cite>Md Sumon Mia</cite>
                  </blockquote>
                  <p>
                    Appropriately mesh standards compliant communities
                    vis-Link-vis client-centric channels. Seamlessly reinvent
                    open-source data via bricks-and-clicks bandwidth. Globally
                    leverage other's inexpensive technologies vis-Link-vis user
                    friendly systems. Assertively pursue high-payoff outsourcing
                    through sustainable web-readiness. Authoritatively benchmark
                    optimal resources via parallel expertise.
                  </p>
                  <p>
                    Uniquely seize open-source synergy without leveraged
                    functionalities. Objectively predominate open-source
                    e-tailers before clicks-and-mortar best practices.
                    Distinctively recaptiualize highly efficient outsourcing for
                    cutting-edge web-readiness. Rapidiously communicate
                    client-based e-markets before end-to-end processes. Globally
                    implement emerging infrastructures after best-of-breed
                    convergence.
                  </p>
                  <h3 className="h4 mt-40">
                    Dalky is the only theme you will ever need
                  </h3>
                  <p>
                    Phosfluorescently incubate market-driven networks and
                    synergistic e-services. Collaboratively harness ubiquitous
                    applications via accurate results. Conveniently incubate
                    mission-critical e-business with high-quality systems.
                    Interactively provide access to open-source e-business
                    without compelling e-markets. Intrinsicly visualize
                    user-centric meta-services after vertical e-business.
                  </p>
                  <div className="row mt-15">
                    <div className="col-md-6 mb-4">
                      <img
                        className="w-100 rounded-3"
                        src="assets/img/blog/blog_inner_1.jpg"
                        alt="Blog Imagee"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <img
                        className="w-100 rounded-3"
                        src="assets/img/blog/blog_inner_2.jpg"
                        alt="Blog Imagee"
                      />
                    </div>
                  </div>
                  <p>
                    Globally cultivate ubiquitous growth strategies before team
                    building users. Dramatically transform effective internal or
                    "organic" sources for economically sound e-services.
                    Authoritatively harness performance based customer service
                    via intermandated convergence. Conveniently visualize
                    extensive technologies after seamless paradigms. Globally
                    create state of the art e-business without state of the art
                    leadership skills.
                  </p>
                  <p className="mb-n2">
                    Completely seize seamless e-tailers whereas mission-critical
                    ideas. Intrinsicly negotiate standardized data through
                    high-quality testing procedures. Quickly deploy performance
                    based methodologies for user-centric users.
                    Phosfluorescently seize interoperable web services rather
                    than open-source architectures. Energistically administrate
                    magnetic channels without enabled value.
                  </p>
                </div>
                <div className="share-links clearfix">
                  <div className="row justify-content-between">
                    <div className="col-sm-auto">
                      <span className="share-links-title">Tags:</span>
                      <div className="tagcloud">
                        <Link to="blog.html">Education</Link>
                        <Link to="blog.html">Online</Link>
                      </div>
                    </div>
                    <div className="col-sm-auto text-xl-end">
                      <span className="share-links-title">Share:</span>
                      <ul className="social-links">
                        <li>
                          <Link to="https://facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://instagram.com/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="th-comments-wrap">
                <h2 className="blog-inner-title h3">
                  <i className="far fa-comments"></i> Comments (03)
                </h2>
                <ul className="comment-list">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="assets/img/blog/comment-author-1.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="fal fa-calendar-alt"></i>14 March, 2024
                        </span>
                        <h3 className="name">David Malan</h3>
                        <p className="text">
                          Collaboratively empower multifunctional e-commerce for
                          prospective applications. Seamlessly productivate plug
                          and play markets.
                        </p>
                        <div className="reply_and_edit">
                          <Link to="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply"></i>Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="th-comment-item">
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img
                              src="assets/img/blog/comment-author-2.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <span className="commented-on">
                              <i className="fal fa-calendar-alt"></i>15 March, 2024
                            </span>
                            <h3 className="name">Tara sing</h3>
                            <p className="text">
                              Competently provide access to fully researched
                              methods of empowerment without sticky models.
                            </p>
                            <div className="reply_and_edit">
                              <Link to="blog-details.html" className="reply-btn">
                                <i className="fas fa-reply"></i>Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="assets/img/blog/comment-author-3.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="fal fa-calendar-alt"></i>16 March, 2024
                        </span>
                        <h3 className="name">Anadi Juila</h3>
                        <p className="text">
                          Collaboratively empower multifunctional e-commerce for
                          prospective applications. Seamlessly productivate plug
                          and play markets.
                        </p>
                        <div className="reply_and_edit">
                          <Link to="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply"></i>Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="th-comment-form">
                <div className="form-title">
                  <h3 className="blog-inner-title mb-2">
                    <i className="fa-solid fa-reply"></i> Leave Link Comment
                  </h3>
                  <p className="form-text">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="form-control"
                    />
                    <i className="fal fa-user"></i>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email*"
                      className="form-control"
                    />
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                    />
                    <i className="fal fa-globe"></i>
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Write Link Comment*"
                      className="form-control"
                    ></textarea>
                    <i className="fal fa-pencil"></i>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="th-btn">Post Comment</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <input type="text" placeholder="Enter Keyword" />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="blog.html">IT Solution</Link>
                    </li>
                    <li>
                      <Link to="blog.html">SEO Marketing</Link>
                    </li>
                    <li>
                      <Link to="blog.html">Web Development</Link>
                    </li>
                    <li>
                      <Link to="blog.html">Cloud Solution</Link>
                    </li>
                    <li>
                      <Link to="blog.html">Network Marketing</Link>
                    </li>
                    <li>
                      <Link to="blog.html">UI/UX Design</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Gallery Post</h3>
                  <div className="sidebar-gallery">
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_1.jpg"
                        alt="Gallery Imagee"
                      />
                      <Link
                        to="assets/img/widget/gallery_1_1.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_2.jpg"
                        alt="Gallery Imagee"
                      />
                      <Link
                        to="assets/img/widget/gallery_1_2.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_3.jpg"
                        alt="Gallery Imagee"
                      />
                      <Link
                        to="assets/img/widget/gallery_1_3.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_4.jpg"
                        alt="Gallery Imagee"
                      />
                      <Link
                        to="assets/img/widget/gallery_1_4.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_5.jpg"
                        alt="Gallery Imagee"
                      />
                      <Link
                        to="assets/img/widget/gallery_1_5.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="assets/img/widget/gallery_1_6.jpg"
                        alt="Gallery Imagee"
                      />
                      <Link
                        to="assets/img/widget/gallery_1_6.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="blog-details.html">
                            Unsatiable entreaties may collecting Power.
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="blog.html">
                            <i className="fal fa-calendar-days"></i>21 June, 2025
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="blog-details.html">
                            Regional Manager limited time management.
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="blog.html">
                            <i className="fal fa-calendar-days"></i>22 June, 2025
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="blog-details.html">
                            What’s the Holding Back It Solution Industry?
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="blog.html">
                            <i className="fal fa-calendar-days"></i>23 June, 2025
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <Link to="blog.html">Technology</Link>
                    <Link to="blog.html">Advice</Link>
                    <Link to="blog.html">Solution</Link>
                    <Link to="blog.html">Consultion</Link>
                    <Link to="blog.html">Business</Link>
                    <Link to="blog.html">Services</Link>
                    <Link to="blog.html">Start Up</Link>
                    <Link to="blog.html">Agency</Link>
                    <Link to="blog.html">Software</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
