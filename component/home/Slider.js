import React from "react";

function Slider() {
  return (
    <section className="container  " style={{ backgroundColor: "#FFDDDE" }}>
      <div className="row g-0 align-items-center">
        <div className="col-sm-12 col-md-6 ">
          <div className="d-flex  flex-column justify-content-center align-items-center p-3">
            <h1 className="text-color  ">Arschi</h1>
            <h5 className="text-color py-2">365</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur similique quibusdam velit fugit rem, reprehenderit at
              id pariatur omnis, et asperiores placeat, sed facere earum?
            </p>
          </div>
        </div>
        <div className="col-sm-12  col-md-6">
          <div className="d-flex justify-content-center align-items-center p-3">
            <div>
              {/* start carousel */}
              <div
                id="carouselExampleInterval"
                className="carousel slide p-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active  "
                    data-bs-interval="10000"
                  >
                    <img
                      src="/home/slider1.png"
                      className="d-block w-100"
                      alt=" "
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img
                      src="/home/slider2.png"
                      className="d-block w-100"
                      alt=" "
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/home/slider3.png"
                      className="d-block w-100"
                      alt=" "
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
