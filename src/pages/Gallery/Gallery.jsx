import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
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
            <h1 className="breadcumb-title">Gallery</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_1.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_1.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_2.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_2.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_3.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_3.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_4.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_4.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_7.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_7.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_5.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_5.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_6.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_6.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_8.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_8.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="assets/img/gallery/gallery_1_9.jpg"
                    alt="gallery imagee"
                  />
                  <Link
                    to="assets/img/gallery/gallery_1_9.jpg"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="th-pagination mt-5 text-center">
            <ul>
              <li>
                <Link to="blog.html">1</Link>
              </li>
              <li>
                <Link to="blog.html">2</Link>
              </li>
              <li>
                <Link to="blog.html">3</Link>
              </li>
              <li>
                <Link to="blog.html">
                  <i className="far fa-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
