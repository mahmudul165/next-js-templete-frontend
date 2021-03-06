import React from "react";
import styled from "styled-components";
function ExploreMore() {
  // const Button = styled.button`
  //   background-color: white;
  //   color: #ff8095;
  //   border: 0;
  // `;
  // const H1 = styled.h1`
  //   color: #ff8095;
  // `;
  return (
    <div
      className="container mt-5 text-white"
      style={{ backgroundColor: "#F2EBDD" }}
    >
      <div className="row gx-4 mt-5  ">
        <div className="col-md-7 d-flex justify-content-center align-items-center ">
          {/* explore more image*/}
          <div className="d-flex flex-column p-1">
            <h1 className="p-2 fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
              LIMITED EDITION
            </h1>
            <button
              className="btn rounded-pill p-2 px-3"
              style={{ backgroundColor: "white", color: "#ff8095", border: 0 }}
            >
              EXPLORE MORE
            </button>
          </div>
        </div>
        <div className="d-flex flex-column col-md-5  justify-content-center align-items-center m-auto p-2">
          <div className="py-2">
            {/* explore more image*/}
            <a className="navbar-brand" href="">
              <img
                style={{ width: 200, height: 160 }}
                className="logo  "
                src="/home/exploreMore-image.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreMore;
