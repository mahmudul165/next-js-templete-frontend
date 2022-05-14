import React, { Component } from "react";
import Slider from "react-slick";

export default class Products extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="container">
        <h1 className="p-2 fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
          Top selected
        </h1>
        <div className="container my-4 py-4  ">
          <div className="container text-center my-4 py-4">
            <Slider {...settings}>
              <div className="p-2">
                <img src="/favicon.ico" alt="" className="w-25 h-25" />
              </div>
              <div className="p-2">
                <img src="/vercel.svg" alt="" className="w-50 h-50" />
              </div>
              <div className="p-2">
                <img src="/favicon.ico" alt="" className="w-25 h-25" />
              </div>
              <div className="p-2">
                <img src="/favicon.ico" alt="" className="w-25 h-25" />
              </div>
              <div className="p-2">
                <img src="/vercel.svg" alt="" className="w-50 h-50" />
              </div>
              <div className="p-2">
                <img src="/favicon.ico" alt="" className="w-25 h-25" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
