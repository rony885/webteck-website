import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogsArray from "../../DataJs/blogs.js";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setBlogDetails(blogsArray);
  }, []);

  const findBlogDetails = blogDetails.find(
    (blogItem) => blogItem.id === parseInt(id),
  );

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
            <div className="col-xxl-12 col-lg-12">
              <div className="th-blog blog-single">
                <div className="blog-img">
                  <img
                    src={findBlogDetails && findBlogDetails.image}
                    alt="Blog Imagee"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link className="author" to="/blog">
                      <img
                        src={findBlogDetails && findBlogDetails.authorImage}
                        alt="avater"
                      />
                      By {findBlogDetails && findBlogDetails.author}
                    </Link>
                    <Link to="/blog">
                      <i className="fa-light fa-calendar-days"></i>
                      {findBlogDetails && findBlogDetails.date}
                    </Link>
                    {/* <Link to="/blog-details">
                      <i className="fa-regular fa-comments"></i>Comments (3)
                    </Link> */}
                  </div>
                  <h2 className="blog-title">
                    {findBlogDetails && findBlogDetails.title}
                  </h2>
                  <p>{findBlogDetails && findBlogDetails.description[0]}</p>
                  <p>{findBlogDetails && findBlogDetails.description[1]}</p>
                  <p>{findBlogDetails && findBlogDetails.description[2]}</p>
                  <blockquote>
                    <p>{findBlogDetails && findBlogDetails.quote.text}</p>
                    <cite>
                      {findBlogDetails && findBlogDetails.quote.author}
                    </cite>
                  </blockquote>
                  <p>{findBlogDetails && findBlogDetails.moreDescription[0]}</p>
                  <p>{findBlogDetails && findBlogDetails.moreDescription[1]}</p>
                  <h3 className="h4 mt-40">
                    {findBlogDetails && findBlogDetails.subTitle}
                  </h3>
                  <p>{findBlogDetails && findBlogDetails.subDescription}</p>
                  <div className="row mt-15">
                    <div className="col-md-6 mb-4">
                      <img
                        className="w-100 rounded-3"
                        src={findBlogDetails && findBlogDetails.innerImages[0]}
                        alt="Blog Imagee"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <img
                        className="w-100 rounded-3"
                        src={findBlogDetails && findBlogDetails.innerImages[1]}
                        alt="Blog Imagee"
                      />
                    </div>
                  </div>
                  <p>
                    {findBlogDetails && findBlogDetails.bottomDescription[0]}
                  </p>
                  <p className="mb-n2">
                    {findBlogDetails && findBlogDetails.bottomDescription[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
