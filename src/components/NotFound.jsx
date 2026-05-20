import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="space"
      style={{ paddingTop: "20px", paddingBottom: "40px" }}
    >
      <div className="container">
        <div className="error-img">
          <img
            src="/assets/img/theme-img/error.svg"
            alt="404 imagee"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
        <div className="error-content">
          <h2 className="error-title">
            <span className="text-theme">OooPs!</span> Page Not Found
          </h2>
          <p className="error-text">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link to="/" className="th-btn">
            <i className="fal fa-home me-2"></i>Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
