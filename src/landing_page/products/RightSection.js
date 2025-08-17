import React from "react";

function RightSection({prodTitle,prodDesp, link, imageURL}) {
  return (
    <div className="container pt-5">
      <div className="row pt-5">
        <div className="d-flex justify-content-center flex-column col-4">
          <h1 className="ps-3 text-muted fs-3">{prodTitle}</h1>
          <p className="ps-3 text-muted">{prodDesp}</p>
          <a href={link} className="ps-3 text-decoration-none">Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={imageURL} alt="imageurl" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
