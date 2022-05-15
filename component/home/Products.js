import React, { Component } from "react";
import Slider from "react-slick";

export default class Products extends Component {
  render() {
    const settings = {
      //dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="container">
        <h3 className="fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
          Top selected
        </h3>
        <div className="   ">
          <div className="container text-center my-4 py-4  ">
            <Slider {...settings}>
              <div className="p-2  ">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="p-2  ">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="p-2  ">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2  2">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2  ">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div class="card border-0 " style={{ width: "18rem" }}>
                  <img
                    src="/images/jacket-1.png"
                    alt=""
                    className="card-img-top  p-2 "
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="text-center">550</p>
                    <button
                      className="btn rounded-pill p-2 px-3"
                      style={{
                        backgroundColor: "#FFDDDE",
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
// test
// import React, { useEffect, useState } from "react";
// const Services = () => {
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     fetch("https://intense-caverns-52774.herokuapp.com/packages")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

//   return (
//     <div id="package" className="container">
//       <h2 className="text-primary mt-5  my-3 py-2">
//         Our <span className="text-warning  ">Package</span>
//       </h2>
//       <div className="service-container">
//         {services.map((service) => (
//           <Service key={service._id} service={service}></Service>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
