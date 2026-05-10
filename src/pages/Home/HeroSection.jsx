// import React from 'react'

// const HeroSection = () => {
//   return (
//     <div className="th-hero-wrapper hero-3" id="hero">
//       <div className="hero-img">
//         <img src="/assets/img/hero/hero_img_3_1.png" alt="Hero Imagee" />
//         <div className="shape-blur"></div>
//       </div>
//       <div className="hero-img-phone">
//         <img src="/assets/img/hero/hero_img_3_phone.png" alt="Hero Imagee" />
//         <div className="shape-blur"></div>
//       </div>
//       <div className="container">
//         <div className="hero-style3">
//           <span className="hero-subtitle">SECURE & IT SERVICES</span>
//           <h1 className="hero-title">Webteck Best</h1>
//           <h1 className="hero-title">IT Solution 2024</h1>
//           <p className="hero-text">
//             Energistically harness ubiquitous imperatives without state of the
//             art collaboration and idea-sharing. Monotonectally parallel task
//             cross-unit experiences and front-end.
//           </p>
//           <div className="btn-group">
//             <a href="about.html" className="th-btn"
//               >ABOUT US<i className="fa-regular fa-arrow-right ms-2"></i
//             ></a>
//             <div className="call-btn">
//               <a
//                 href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
//                 className="play-btn popup-video"
//                 ><i className="fas fa-play"></i
//               ></a>
//               <div className="media-body">
//                 <a
//                   href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
//                   className="btn-title popup-video"
//                   >Watch Our Story</a
//                 >
//                 <span className="btn-text">Subscribe Now</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hero-social">
//         <a href="https://www.facebook.com/">Facebook</a>
//         <a href="https://www.twitter.com/">Twitter</a>
//         <a href="https://www.instagram.com/">Instagram</a>
//         <a href="https://www.linkedin.com/">Linkedin</a>
//       </div>
//       <div className="hero-shape1">
//         <img src="assets/img/hero/hero_shape_3_1.png" alt="shape" />
//       </div>
//     </div>
//   )
// }

// export default HeroSection

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="th-hero-wrapper hero-3" id="hero">
      {/* Desktop Image */}
      <div className="hero-img">
        <img src="/assets/img/hero/hero_img_3_1.png" alt="Hero" />
        <div className="shape-blur"></div>
      </div>

      {/* Mobile Image */}
      <div className="hero-img-phone">
        <img src="/assets/img/hero/hero_img_3_phone.png" alt="Hero Mobile" />
        <div className="shape-blur"></div>
      </div>

      <div className="container">
        <div className="hero-style3">
          <span className="hero-subtitle">SECURE & IT SERVICES</span>

          <h1 className="hero-title">Webteck Best</h1>
          <h1 className="hero-title">IT Solution 2024</h1>

          <p className="hero-text">
            Energistically harness ubiquitous imperatives without state of the
            art collaboration and idea-sharing. Monotonectally parallel task
            cross-unit experiences and front-end.
          </p>

          <div className="btn-group">
            {/* About Button */}
            <Link to="/about" className="th-btn">
              ABOUT US
              <i className="fa-regular fa-arrow-right ms-2"></i>
            </Link>

            {/* Video Button */}
            <div className="call-btn">
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn popup-video"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play"></i>
              </a>

              <div className="media-body">
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="btn-title popup-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Our Story
                </a>
                <span className="btn-text">Subscribe Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="hero-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          Linkedin
        </a>
      </div>

      {/* Shape */}
      <div className="hero-shape1">
        <img src="/assets/img/hero/hero_shape_3_1.png" alt="shape" />
      </div>
    </div>
  );
};

export default HeroSection;
