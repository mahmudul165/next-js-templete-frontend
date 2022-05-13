import React from "react";

function Slider() {
  return (
    <section className="container   " style={{ backgroundColor: "#FFDDDE" }}>
      <div className="row g-2 align-items-centerc  ">
        <div className="col-sm-12 col-md-6 p-4">
          <div className="card h-100    border-light border-5  ">
            <div className="card-body     ">
              <h1
                className="text-color   fw-bolder "
                style={{ fontSize: "73px" }}
              >
                Arshi
              </h1>
              <h5
                className="card-title text-color py-2"
                style={{ fontSize: "42px" }}
              >
                365
              </h5>
              <p className="  py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur similique quibusdam velit fugit rem, reprehenderit
                at id pariatur omnis, et asperiores placeat, sed facere earum?
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12  col-md-6 p-4">
          <div className="  d-flex justify-content-center align-items-center  ">
            <div className="  card    border-light border-5">
              {/* start carousel */}
              <div
                id="carouselExampleInterval"
                className="carousel slide p-3  card-body"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner  ">
                  <div
                    className="carousel-item active  "
                    data-bs-interval="500"
                  >
                    <img
                      src="/home/slider1.png"
                      className="d-block w-100"
                      alt=" "
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="500">
                    <img
                      src="/home/slider2.png"
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
