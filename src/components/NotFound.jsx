import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">404 - Error Page</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>404 - Error Page</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="error-img">
            <img src="/assets/img/theme-img/error.svg" alt="404 imagee" />
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
    </>
  );
};

export default NotFound;
