import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const galleryImages = [
  "/assets/img/gallery/gallery_1_1.jpg",
  "/assets/img/gallery/gallery_1_2.jpg",
  "/assets/img/gallery/gallery_1_3.jpg",
  "/assets/img/gallery/gallery_1_4.jpg",
  "/assets/img/gallery/gallery_1_5.jpg",
  "/assets/img/gallery/gallery_1_6.jpg",
  "/assets/img/gallery/gallery_1_7.jpg",
  "/assets/img/gallery/gallery_1_8.jpg",
  "/assets/img/gallery/gallery_1_9.jpg",
];

const Gallery = () => {
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

    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <Wrapper>
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
            {galleryImages.map((img, index) => (
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
            src={galleryImages[currentIndex]}
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
