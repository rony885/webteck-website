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
              H
            </span>
            <span preloader-text="E" className="characters">
              E
            </span>
            <span preloader-text="B" className="characters">
              A
            </span>
            <span preloader-text="T" className="characters">
              L
            </span>
            <span preloader-text="E" className="characters">
              I
            </span>
            <span preloader-text="C" className="characters">
              X
            </span>
            <span preloader-text="K" className="characters">
              S
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
