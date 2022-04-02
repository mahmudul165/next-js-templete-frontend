import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
function Slider() {
  const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 600px;
  `;
  const CarouselUI = ({ children }) => <Container>{children}</Container>;
  const Carousel = makeCarousel(CarouselUI);
  return (
    <Carousel defaultWait={3000}>
      <Slide right>
        <section defaultWait={1000} className="slider  mt-0 ">
          <div className="container m-5 p-3">
            <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
              <div className=" p-3 m-3">
                <small className="fw-bolder text-white banner-sub-title">
                  BUSINESS CONSULTING
                </small>
                <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
                  Making Difference Growth Your Business With Modern Ideas
                </h2>
                <div className="flex">
                  <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                    <div className=" inner-button bg-dark fw-bold"></div>
                    Get Started Now
                  </button>
                  <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                    <div className="inner-button btn-color-bg fw-bold"></div>
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      <Slide right>
        <section defaultWait={1000} className="slider  mt-0 ">
          <div className="container m-5 p-3">
            <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
              <div className=" p-3 m-3">
                <small className="fw-bolder text-white banner-sub-title">
                  BUSINESS CONSULTING
                </small>
                <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
                  Making Difference Growth Your Business With Modern Ideas
                </h2>
                <div className="flex">
                  <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                    <div className=" inner-button bg-dark fw-bold"></div>
                    Get Started Now
                  </button>
                  <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                    <div className="inner-button btn-color-bg fw-bold"></div>
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      <Slide right>
        <section defaultWait={1000} className="slider  mt-0 ">
          <div className="container m-5 p-3">
            <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
              <div className=" p-3 m-3">
                <small className="fw-bolder text-white banner-sub-title">
                  BUSINESS CONSULTING
                </small>
                <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
                  Making Difference Growth Your Business With Modern Ideas
                </h2>
                <div className="flex">
                  <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                    <div className=" inner-button bg-dark fw-bold"></div>
                    Get Started Now
                  </button>
                  <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                    <div className="inner-button btn-color-bg fw-bold"></div>
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </Carousel>
  );
}

export default Slider;
{
  /* <Carousel defaultWait={1000}  >
    <Slide right>
     <section defaultWait={1000} className="slider  mt-0 ">
      <div className="container m-5 p-3">
        <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
          <div className=" p-3 m-3">
            <small className="fw-bolder text-white banner-sub-title">
              BUSINESS CONSULTING
            </small>
            <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
              Making Difference Growth Your Business With Modern Ideas
            </h2>
            <div className="flex">
              <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                <div className=" inner-button bg-dark fw-bold"></div>
                Get Started Now
              </button>
              <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                <div className="inner-button btn-color-bg fw-bold"></div>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </Slide>
     <Slide right>
     <section defaultWait={1000} className="slider  mt-0 ">
      <div className="container m-5 p-3">
        <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
          <div className=" p-3 m-3">
            <small className="fw-bolder text-white banner-sub-title">
              BUSINESS CONSULTING
            </small>
            <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
              Making Difference Growth Your Business With Modern Ideas
            </h2>
            <div className="flex">
              <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                <div className=" inner-button bg-dark fw-bold"></div>
                Get Started Now
              </button>
              <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                <div className="inner-button btn-color-bg fw-bold"></div>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </Slide>
     <Slide right>
     <section defaultWait={1000} className="slider  mt-0 ">
      <div className="container m-5 p-3">
        <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
          <div className=" p-3 m-3">
            <small className="fw-bolder text-white banner-sub-title">
              BUSINESS CONSULTING
            </small>
            <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
              Making Difference Growth Your Business With Modern Ideas
            </h2>
            <div className="flex">
              <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                <div className=" inner-button bg-dark fw-bold"></div>
                Get Started Now
              </button>
              <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                <div className="inner-button btn-color-bg fw-bold"></div>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </Slide>
  </Carousel> 
  
   <section defaultWait={1000} className="slider  mt-0 ">
      <div className="container m-5 p-3">
        <div className="row row-cols-2 m-3 p-3 justify-content-center align-items-center">
          <div className=" p-3 m-3">
            <small className="fw-bolder text-white banner-sub-title">
              BUSINESS CONSULTING
            </small>
            <h2 className="banner-main-tittle fw-bolder text-white my-4 py-2">
              Making Difference Growth Your Business With Modern Ideas
            </h2>
            <div className="flex">
              <button className="btn btn-md button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                <div className=" inner-button bg-dark fw-bold"></div>
                Get Started Now
              </button>
              <button className="btn btn-md bg-white text-dark button-custom rounded-pill p-2 m-1">
                <div className="inner-button btn-color-bg fw-bold"></div>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  */
}
