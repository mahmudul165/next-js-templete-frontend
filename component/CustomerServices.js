import React from "react";

function CustomerServices() {
  return (
    <section className="service mt-5 bg-light">
      <div className="container-custom container text-center">
        <div className="my-3">
          <h6>Company Services</h6>
          <h3>We Provide Most Exclusive Service for Business</h3>
        </div>
        <div className="div-content py-4">
          <section>
            <section className="row row-cols-4 align-items-center rounded-3 m-0 justify-content-around">
              <div className="col-12 col-lg-3 bg-white rounded border-primary text-center">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <div className="p-3">
                    <img
                      width="200px"
                      height="200px"
                      src="/icons/image 12.png"
                      className="card-img-top p-3"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Creative Idea</h5>
                    <p className="card-text">
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                    <a href="#" className="btn fw-700 fs-2"></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 bg-white rounded border-primary text-center">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <div className="p-3">
                    <img
                      width="200px"
                      height="200px"
                      src="/icons/image 13.png"
                      className="card-img-top p-3"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Creative Idea</h5>
                    <p className="card-text">
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                    <a href="#" className="btn fw-700 fs-2"></a>
                  </div>
                </div>
              </div>
              <div className="card border-0" style={{ width: "18rem" }}>
                <div className="p-3">
                  <img
                    width="200px"
                    height="200px"
                    src="/icons/image 13.png"
                    className="card-img-top p-3"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Creative Idea</h5>
                  <p className="card-text">
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                  <a href="#" className="btn fw-700 fs-2"></a>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default CustomerServices;
