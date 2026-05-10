// import React from "react";

// const ScrollToTop = () => {
//   return (
//     <div class="scroll-top">
//       <svg
//         class="progress-circle svg-content"
//         width="100%"
//         height="100%"
//         viewBox="-1 -1 102 102"
//       >
//         <path
//           d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//           style="
//             transition: stroke-dashoffset 10ms linear 0s;
//             stroke-dasharray: 307.919, 307.919;
//             stroke-dashoffset: 307.919;
//           "
//         ></path>
//       </svg>
//     </div>
//   );
// };

// export default ScrollToTop;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();

    // Initialize circle
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;
    path.style.transition = "stroke-dashoffset 10ms linear";

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = pathLength - (scrollTop * pathLength) / docHeight;
      path.style.strokeDashoffset = progress;

      // Show / Hide button
      setShow(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <div className={`scroll-top ${show ? "show" : ""}`} onClick={scrollTop}>
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .scroll-top {
    position: fixed;
    right: 30px;
    bottom: 30px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(45px);
    transition: all 300ms linear;
  }

  .scroll-top:after {
    content: "↑"; /* safer than font icon */
    position: absolute;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: var(--theme-color);
    left: 0;
    top: 0;
    height: 50px;
    width: 50px;
    border: 2px solid var(--theme-color);
    border-radius: 50%;
  }

  .scroll-top svg {
    border-radius: 50%;
    background: var(--white-color);
  }

  .scroll-top svg path {
    fill: none;
  }

  .scroll-top .progress-circle path {
    stroke: var(--theme-color);
    stroke-width: 6;
    transition: all 400ms linear;
  }

  .scroll-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export default ScrollToTop;
