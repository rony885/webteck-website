import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
            <h1 className="breadcumb-title">Blog</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img
                      src="assets/img/blog/blog-s-1-1.jpg"
                      alt="Blog Imagee"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="blog">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </Link>
                    <Link to="blog">
                      <i className="fa-light fa-calendar-days"></i>21 June, 2025
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Unsatiable entreaties may collecting Power.
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-Link-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <Link to="/blog-details" className="line-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div
                  className="blog-img th-carousel"
                  data-arrows="true"
                  data-slide-show="1"
                  data-fade="true"
                >
                  <Link to="/blog-details">
                    <img
                      src="assets/img/blog/blog-s-1-2.jpg"
                      alt="Blog Imagee"
                    />
                  </Link>
                  <Link to="/blog-details">
                    <img
                      src="assets/img/blog/blog-s-1-4.jpg"
                      alt="Blog Imagee"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="blog">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </Link>
                    <Link to="blog">
                      <i className="fa-light fa-calendar-days"></i>22 June, 2025
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Regional Manager limited time management.
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-Link-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <Link to="/blog-details" className="line-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="th-blog blog-single">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="blog">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </Link>
                    <Link to="blog">
                      <i className="fa-light fa-calendar-days"></i>24 June, 2025
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      What’s the Holding Back It Solution Industry?
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-Link-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <Link to="/blog-details" className="line-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img
                      src="assets/img/blog/blog-s-1-3.jpg"
                      alt="Blog Imagee"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="blog">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </Link>
                    <Link to="blog">
                      <i className="fa-light fa-calendar-days"></i>24 June, 2025
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Latin derived from Cicero's 1st-century BC
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-Link-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <Link to="/blog-details" className="line-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-audio">
                  <iframe
                    title="Tell Me U Luv Me (with Trippie Redd) by Juice WRLD"
                    src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&amp;show_artwork=true&amp;maxwidth=751&amp;maxheight=1000&amp;dnt=1"
                  ></iframe>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="blog">
                      <img src="assets/img/blog/author-1-1.png" alt="avater" />
                      By Themeholy
                    </Link>
                    <Link to="blog">
                      <i className="fa-light fa-calendar-days"></i>25 June, 2025
                    </Link>
                    <Link to="/blog-details">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link>
                  </div>
                  <h2 className="blog-title">
                    <Link to="/blog-details">
                      Regional Manager limited time management.
                    </Link>
                  </h2>
                  <p className="blog-text">
                    Progressively plagiarize quality metrics for impactful data.
                    Assertively. Holisticly leverage existing magnetic
                    functionalities. Assertively orchestrate high-quality
                    customer service vis-Link-vis intuitive interfaces.
                    Conveniently enhance highly efficient infomediaries.
                  </p>
                  <Link to="/blog-details" className="line-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="th-pagination text-center">
                <ul>
                  <li>
                    <Link to="blog">1</Link>
                  </li>
                  <li>
                    <Link to="blog">2</Link>
                  </li>
                  <li>
                    <Link to="blog">3</Link>
                  </li>
                  <li>
                    <Link to="blog">
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
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
                      <Link to="blog">IT Solution</Link>
                    </li>
                    <li>
                      <Link to="blog">SEO Marketing</Link>
                    </li>
                    <li>
                      <Link to="blog">Web Development</Link>
                    </li>
                    <li>
                      <Link to="blog">Cloud Solution</Link>
                    </li>
                    <li>
                      <Link to="blog">Network Marketing</Link>
                    </li>
                    <li>
                      <Link to="blog">UI/UX Design</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Unsatiable entreaties may collecting Power.
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="blog">
                            <i className="fal fa-calendar-days"></i>21 June,
                            2025
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Regional Manager limited time management.
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="blog">
                            <i className="fal fa-calendar-days"></i>22 June,
                            2025
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            What’s the Holding Back It Solution Industry?
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="blog">
                            <i className="fal fa-calendar-days"></i>23 June,
                            2025
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <Link to="blog">Technology</Link>
                    <Link to="blog">Advice</Link>
                    <Link to="blog">Solution</Link>
                    <Link to="blog">Consultion</Link>
                    <Link to="blog">Business</Link>
                    <Link to="blog">Services</Link>
                    <Link to="blog">Start Up</Link>
                    <Link to="blog">Agency</Link>
                    <Link to="blog">Software</Link>
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

export default Blog;
