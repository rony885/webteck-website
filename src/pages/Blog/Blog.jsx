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
            {blogs.map((blog) => (
              <div className="col-lg-6 mb-4" key={blog.id}>
                <div className="th-blog blog-single has-post-thumbnail">
                  <div className="blog-img">
                    <Link to="/blog-details">
                      <img src={blog.image} alt="Blog" className="w-100" />
                    </Link>
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link className="author" to="/blog">
                        <img
                          src="assets/img/blog/author-1-1.png"
                          alt="avatar"
                        />
                        By Themeholy
                      </Link>

                      <Link to="/blog">
                        <i className="fa-light fa-calendar-days"></i>
                        {blog.date}
                      </Link>

                      <Link to="/blog-details">
                        <i className="fa-regular fa-comments"></i>
                        Comments ({blog.comments})
                      </Link>
                    </div>

                    <h2 className="blog-title">
                      <Link to="/blog-details">{blog.title}</Link>
                    </h2>

                    <p className="blog-text">
                      {blog.description.slice(0, 60)}...
                    </p>

                    <Link to="/blog-details" className="line-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="th-pagination text-center mt-4">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
