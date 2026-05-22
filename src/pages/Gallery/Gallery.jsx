import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import galleriesArray from "../../DataJs/gallery.js";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    setGalleries(galleriesArray);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setCurrentIndex((prev) => (prev === galleries.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();

    setCurrentIndex((prev) => (prev === 0 ? galleries.length - 1 : prev - 1));
  };

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/breadcumb-bg.jpg)",
          padding: "60px 0",
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
              OUR GALLERY
            </span>

            <h2 className="sec-title">
              Photo <span className="text-theme fw-normal">Showcase</span>
            </h2>
          </div>
          <div className="row gy-4">
            {galleries.map((img, index) => (
              <div className="col-md-6 col-xl-4" key={index}>
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img src={img} alt="gallery" />

                    <Link
                      to="#"
                      className="play-btn style3 popup-image"
                      onClick={() => openImage(index)}
                    >
                      <i className="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="custom-lightbox" onClick={closeImage}>
          {/* Prev Button */}
          <button className="prev-btn" onClick={prevImage}>
            <i className="far fa-arrow-left"></i>
          </button>

          {/* Image */}
          <img
            src={galleries[currentIndex]}
            alt="popup"
            className="popup-img"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button className="next-btn" onClick={nextImage}>
            <i className="far fa-arrow-right"></i>
          </button>

          {/* Close */}
          <span className="close-btn" onClick={closeImage}>
            &times;
          </span>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .custom-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
  }

  .popup-img {
    max-width: 90%;
    max-height: 90vh;
    border-radius: 10px;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #fff;
    font-size: 45px;
    cursor: pointer;
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
  }

  .prev-btn:hover,
  .next-btn:hover {
    background: #684df4;
  }

  .prev-btn {
    left: 30px;
  }

  .next-btn {
    right: 30px;
  }
`;

export default Gallery;
