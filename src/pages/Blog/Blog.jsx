import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import blogsArray from "../../DataJs/blogs.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsArray);
  }, []);

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
              OUR BLOG
            </span>

            <h2 className="sec-title">
              Latest <span className="text-theme fw-normal">Articles</span>
            </h2>
          </div>

          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-6 mb-4" key={blog.id}>
                <div className="th-blog blog-single has-post-thumbnail">
                  <div className="blog-img">
                    <Link to={`/blog/blog-details/${blog.id}`}>
                      <img src={blog.image} alt="Blog" className="w-100" />
                    </Link>
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link className="author" to="/blog">
                        <img src={blog.authorImage} alt="avatar" />
                        By {blog.author}
                      </Link>

                      <Link to="/blog">
                        <i className="fa-light fa-calendar-days"></i>
                        {blog.date}
                      </Link>

                      {/* <Link to={`/blog/blog-details/${blog.id}`}>
                        <i className="fa-regular fa-comments"></i>
                        Comments ({blog.comments})
                      </Link> */}
                    </div>

                    <h2 className="blog-title">
                      <Link to={`/blog/blog-details/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="blog-text">
                      {blog.description[0].split(" ").slice(0, 15).join(" ")}...
                    </p>
                    <Link
                      to={`/blog/blog-details/${blog.id}`}
                      className="line-btn"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {/* <div className="th-pagination text-center mt-4">
            <ul>
              <li>
                <Link to="/blog">1</Link>
              </li>
              <li>
                <Link to="/blog">2</Link>
              </li>
              <li>
                <Link to="/blog">3</Link>
              </li>
              <li>
                <Link to="/blog">
                  <i className="far fa-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
