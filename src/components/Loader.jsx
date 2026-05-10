import React from "react";

const Loader = () => {
  return (
    <div id="preloader" className="preloader">
      <button className="th-btn th-radius preloaderCls">
        Cancel Preloader
      </button>
      <div id="loader" className="th-preloader">
        <div className="animation-preloader">
          <div className="txt-loading">
            <span preloader-text="W" className="characters">
              W
            </span>
            <span preloader-text="E" className="characters">
              E
            </span>
            <span preloader-text="B" className="characters">
              B
            </span>
            <span preloader-text="T" className="characters">
              T
            </span>
            <span preloader-text="E" className="characters">
              E
            </span>
            <span preloader-text="C" className="characters">
              C
            </span>
            <span preloader-text="K" className="characters">
              K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
