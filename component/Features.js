import React from "react";

function Features() {
  return (
    <>
      {" "}
      <section className="container">
        <div className="my-3 text-center">
          <h6>Our Core Feature</h6>
          <h3>We Provide Most Exclusive Service for Business</h3>
        </div>

        <div>
          <div className="row row-cols-4 align-items-center bg-light rounded-3 m-0 justify-content-around">
            <div className="col-12 col-lg-3 bg-white rounded border-primary text-center shadow-sm my-5 p-3">
              {/* <!-- card 1 start  --> */}
              <div className="card bg-white text-dark border-0">
                <img src="images/jacket-1.png" className="card-img" alt="..." />
                <div className="card-img-overlay"></div>
                <div className="card-footer border-0 shadow-none bg-white">
                  <p>Last updated 3 mins ago</p>
                </div>
              </div>
              {/* <!-- card 1 end --> */}
            </div>
            {/* <!-- card 2 start  --> */}
            <div className="card bg-white text-dark border-0">
              <img src="images/jacket-1.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="card-footer border-0 shadow-none bg-white">
                <p>Last updated 3 mins ago</p>
              </div>
            </div>
            {/* <!-- card 2 end -->
      <!-- card 3 start  --> */}
            <div className="card bg-white text-dark border-0">
              <img src="images/jacket-1.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="card-footer border-0 shadow-none bg-white">
                <p>Last updated 3 mins ago</p>
              </div>
            </div>
            {/* <!-- card 3 end --> */}
          </div>
        </div>
      </section>
      <section className="container mb-lg-5">
        <div>
          <div className="row row-cols-4 align-items-center bg-light rounded-3 m-0 justify-content-around">
            <div className="col-12 col-lg-3 bg-white rounded border-primary text-center shadow-sm my-5 p-3">
              {/* <!-- card 1 start  --> */}
              <div className="card bg-white text-dark border-0">
                <img src="images/jacket-1.png" className="card-img" alt="..." />
                <div className="card-img-overlay"></div>
                <div className="card-footer border-0 shadow-none bg-white">
                  <p>Last updated 3 mins ago</p>
                </div>
              </div>
              {/* <!-- card 1 end --> */}
            </div>
            {/* <!-- card 2 start  --> */}
            <div className="card bg-white text-dark border-0">
              <img src="images/jacket-1.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="card-footer border-0 shadow-none bg-white">
                <p>Last updated 3 mins ago</p>
              </div>
            </div>
            {/* <!-- card 2 end -->
      <!-- card 3 start  --> */}
            <div className="card bg-white text-dark border-0">
              <img src="images/jacket-1.png" className="card-img" alt="..." />
              <div className="card-img-overlay"></div>
              <div className="card-footer border-0 shadow-none bg-white">
                <p>Last updated 3 mins ago</p>
              </div>
            </div>
            {/* <!-- card 3 end --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
