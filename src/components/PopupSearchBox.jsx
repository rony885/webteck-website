import React from "react";

const PopupSearchBox = () => {
  return (
    <div className="popup-search-box d-none d-lg-block">
      <button className="searchClose">
        <i className="fal fa-times"></i>
      </button>
      <form>
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit">
          <i className="fal fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default PopupSearchBox;
