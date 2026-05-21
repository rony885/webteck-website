import React from "react";
import { Link } from "react-router-dom";

// const socialLinks = [
//   {
//     id: 1,
//     name: "Facebook",
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: 2,
//     name: "Twitter",
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: 3,
//     name: "Instagram",
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: 4,
//     name: "Linkedin",
//     link: "https://www.linkedin.com/",
//   },
// ];

const heroData = {
  subtitle: "SECURE & IT SERVICES",

  titles: ["Webteck Best", "IT Solution 2024"],

  description:
    "Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.",

  desktopImage: "/assets/img/hero/hero_img_3_1.png",

  mobileImage: "/assets/img/hero/hero_img_3_phone.png",

  shapeImage: "/assets/img/hero/hero_shape_3_1.png",

  aboutButton: {
    text: "ABOUT US",
    link: "/about",
  },

  videoButton: {
    videoLink: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
    title: "Watch Our Story",
    subtitle: "Subscribe Now",
  },

  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://www.twitter.com/",
    },
    {
      id: 3,
      name: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      id: 4,
      name: "Linkedin",
      link: "https://www.linkedin.com/",
    },
  ],
};

const HeroSection = () => {
  return (
    // <div className="th-hero-wrapper hero-3" id="hero">
    //   {/* Desktop Image */}
    //   <div className="hero-img">
    //     <img src="/assets/img/hero/hero_img_3_1.png" alt="Hero" />
    //     <div className="shape-blur"></div>
    //   </div>

    //   {/* Mobile Image */}
    //   <div className="hero-img-phone">
    //     <img src="/assets/img/hero/hero_img_3_phone.png" alt="Hero Mobile" />
    //     <div className="shape-blur"></div>
    //   </div>

    //   <div className="container">
    //     <div className="hero-style3">
    //       <span className="hero-subtitle">SECURE & IT SERVICES</span>

    //       <h1 className="hero-title">Webteck Best</h1>
    //       <h1 className="hero-title">IT Solution 2024</h1>

    //       <p className="hero-text">
    //         Energistically harness ubiquitous imperatives without state of the
    //         art collaboration and idea-sharing. Monotonectally parallel task
    //         cross-unit experiences and front-end.
    //       </p>

    //       <div className="btn-group">
    //         {/* About Button */}
    //         <Link to="/about" className="th-btn">
    //           ABOUT US
    //           <i className="fa-regular fa-arrow-right ms-2"></i>
    //         </Link>

    //         {/* Video Button */}
    //         <div className="call-btn">
    //           <Link
    //             to="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
    //             className="play-btn popup-video"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <i className="fas fa-play"></i>
    //           </Link>

    //           <div className="media-body">
    //             <Link
    //               to="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
    //               className="btn-title popup-video"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               Watch Our Story
    //             </Link>

    //             <span className="btn-text">Subscribe Now</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Social Links */}
    //   <div className="hero-social">
    //     {socialLinks.map((item) => (
    //       <Link key={item.id} to={item.link} target="_blank" rel="noreferrer">
    //         {item.name}
    //       </Link>
    //     ))}
    //   </div>

    //   {/* Shape */}
    //   <div className="hero-shape1">
    //     <img src="/assets/img/hero/hero_shape_3_1.png" alt="shape" />
    //   </div>
    // </div>

    <div className="th-hero-wrapper hero-3" id="hero">
      <div className="hero-img">
        <img src={heroData.desktopImage} alt="Hero" />

        <div className="shape-blur"></div>
      </div>

      <div className="hero-img-phone">
        <img src={heroData.mobileImage} alt="Hero Mobile" />

        <div className="shape-blur"></div>
      </div>

      <div className="container">
        <div className="hero-style3">
          <span className="hero-subtitle">{heroData.subtitle}</span>

          {heroData.titles.map((title, index) => (
            <h1 key={index} className="hero-title">
              {title}
            </h1>
          ))}

          <p className="hero-text">{heroData.description}</p>

          <div className="btn-group">
            <Link to={heroData.aboutButton.link} className="th-btn">
              {heroData.aboutButton.text}

              <i className="fa-regular fa-arrow-right ms-2"></i>
            </Link>

            <div className="call-btn">
              <Link
                to={heroData.videoButton.videoLink}
                className="play-btn popup-video"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play"></i>
              </Link>

              <div className="media-body">
                <Link
                  to={heroData.videoButton.videoLink}
                  className="btn-title popup-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroData.videoButton.title}
                </Link>

                <span className="btn-text">
                  {heroData.videoButton.subtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-social">
        {heroData.socialLinks.map((item) => (
          <Link key={item.id} to={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="hero-shape1">
        <img src={heroData.shapeImage} alt="shape" />
      </div>
    </div>
  );
};

export default HeroSection;
