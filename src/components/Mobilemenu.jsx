// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const Mobilemenu = ({ menuOpen, closeMenu }) => {
//   return (
//     <Wrapper>
//       <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
//         <div className="th-menu-area text-center">
//           <button className="th-menu-toggle" onClick={closeMenu}>
//             <i className="fal fa-times"></i>
//           </button>
//           <div className="mobile-logo">
//             <Link className="icon-masking" to="/">
//               <span
//                 // data-mask-src="assets/img/logo.svg"
//                 style={{
//                   backgroundImage: `url(/assets/img/logo.svg)`,
//                 }}
//                 className="mask-icon"
//               ></span>
//               <img src="/assets/img/logo.svg" alt="Webteck" />
//             </Link>
//           </div>
//           <div className="th-mobile-menu">
//             <ul>
//               <li className="menu-item-has-children mega-menu-wrap">
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li className="menu-item-has-children">
//                 <Link to="/services">Services</Link>
//               </li>
//               <li className="menu-item-has-children">
//                 <Link to="/portfolio">Portfolio</Link>
//               </li>
//               <li className="menu-item-has-children">
//                 <Link to="#">Pages</Link>
//                 <ul className="sub-menu">
//                   <li>
//                     <Link to="/team">Team</Link>
//                   </li>
//                   <li>
//                     <Link to="/team-details">Team Details</Link>
//                   </li>

//                   <li>
//                     <Link to="/gallery">Gallery</Link>
//                   </li>
//                   <li>
//                     <Link to="/pricing">Pricing</Link>
//                   </li>
//                   <li>
//                     <Link to="/faq">Faq Page</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="menu-item-has-children">
//                 <Link to="/blog">Blog</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section``;

// export default Mobilemenu;

import React from "react";
import { Link } from "react-router-dom";

const Mobilemenu = ({ menuOpen, closeMenu }) => {
  return (
    <>
      <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
        <div class="th-menu-area text-center">
          <button class="th-menu-toggle" onClick={closeMenu}>
            <i class="fal fa-times"></i>
          </button>
          <div class="mobile-logo">
            <Link class="icon-masking" to="index-2">
              <span
                class="mask-icon bg-mask"
                style={{
                  maskImage: 'url("/assets/img/logo.svg")',
                  WebkitMaskImage: 'url("/assets/img/logo.svg")',
                }}
              ></span>
              <img src="/assets/img/logo.svg" alt="Webteck" />
            </Link>
          </div>
          <div class="th-mobile-menu">
            <ul>
              <li>
                <Link to="#">
                  Home<span class="th-mean-expand"></span>
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">
                  Services<span class="th-mean-expand"></span>
                </Link>
              </li>
              <li class="menu-item-has-children th-item-has-children open">
                <Link to="#">
                  Pages<span class="th-mean-expand"></span>
                </Link>
                <ul
                  class="sub-menu th-submenu"
                  // style="max-height: 430px; display: none;"
                >
                  <li class="menu-item-has-children th-item-has-children"></li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/team-details">Team Details</Link>
                  </li>

                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/faq">Faq Page</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">
                  Blog<span class="th-mean-expand"></span>
                </Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilemenu;
