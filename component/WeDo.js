import React from "react";

function WeDo() {
  return (
    <section className="bg-light we-do-section">
      <div className="container p-5">
        <div className="row row-cols-2 align-items-center we-do-top-container bg-dark bg-opacity-75 text-whte">
          <div className="img-do-section">
            <img src="/images/model.png" alt="" />
          </div>
          <div className="do-section-element">
            <h6>- What We Do</h6>
            <h3>Why Choose Our Business Agency</h3>
            <p3>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p3>
            <ol>
              <li>Business & Consulting Agency</li>
              <li>Business & Consulting Agency</li>
              <li>Business & Consulting Agency</li>
            </ol>
            <button className="btn btn-md btn-dark text-white button-custom rounded-pill">
              <div className="button-custom-in fw-bold"></div>
              Consulting Now
            </button>
          </div>
        </div>
      </div>
      {/* <!-- 4 card for we do section start --> */}
      <div className="container p-5">
        <div className="row row-cols-4 align-items-center bg-light rounded-3 m-0 justify-content-around">
          {/* <!-- card 1 start  --> */}
          <div className="card text-dark border-0">
            <img src="images/jacket-1.png" className="card-img" alt="..." />
            <div className="card-img-overlay"></div>
            <div className="card-footer border-0 shadow-none bg-white">
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
          {/* <!-- card 1 end -->
      <!-- card 2 start  --> */}
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
          {/* <!-- card 3 end -->
      <!-- card 4 start  --> */}
          <div className="card bg-white text-dark border-0">
            <img src="images/jacket-1.png" className="card-img" alt="..." />
            <div className="card-img-overlay"></div>
            <div className="card-footer border-0 shadow-none bg-white">
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
          {/* <!-- card 4 end --> */}
        </div>
      </div>
    </section>
  );
}

export default WeDo;
