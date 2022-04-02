import React from "react";

function Team() {
  return (
    <>
      <section className="team">
        <div className="row row-cols-2 align-items-center  bg-black bg-opacity-25 text-whte">
          <div className="img-do-section">
            <img src="/images/model.png" alt="" />
          </div>
          <div className=" ">
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
              <div className="button-custom-in"></div>
              Consulting Now
            </button>
          </div>
        </div>
      </section>
      {/* <!--multii button  section - */}
      <section className=" container my-5">
        <div className=" d-flex  p-4 justify-content-center">
          <button className="btn btn-light">Logo</button>
          <button className="btn btn-light mx-4">Logo</button>
          <button className="btn btn-light ">Logo</button>
          <button className="btn btn-light mx-4">Logo</button>
          <button className="btn btn-light">Logo</button>
        </div>
        <div className="fs-1 fw-bolder bg-light my-5">
          <hr />
        </div>
        <div className="d-flex align-items-center justify-content-around my-5">
          <div>
            <h6>-Important Articles</h6>
            <h2>Something Know Our Latest News & Blog</h2>
          </div>
          <div>
            <button className="btn btn-md bg-dark text-white button-custom rounded-pill">
              <div className="button-custom-in"></div>
              Get Started Now
            </button>
          </div>
        </div>
        {/* <!-- last 3 card - */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col p-1">
            <div className="card h-100 bg-light p-2">
              <img
                src="/images/jacket-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h6>
                  {" "}
                  <i
                    className="fa fa-calendar text-warning"
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="ms-3 text-warning">29 Mar 2022</span>
                </h6>
                <h5 className="card-title">
                  How Performance Visiblety with GitLab CI and Hood
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum has been
                </p>
              </div>
              <div className="card-footer  bg-light border-0">
                <h6 className="text-muted">Learn More</h6>
              </div>
            </div>
          </div>
          <div className="col p-1">
            <div className="card h-100 bg-light p-2">
              <img
                src="/images/jacket-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h6>
                  <i
                    className="fa fa-calendar text-warning"
                    aria-hidden="true"
                  ></i>
                  <span className="ms-3 text-warning">29 Mar 2022</span>
                </h6>
                <h5 className="card-title">
                  How Performance Visiblety with GitLab CI and Hood
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum has been
                </p>
              </div>
              <div className="card-footer  bg-light border-0">
                <h6 className="text-muted">Learn More</h6>
              </div>
            </div>
          </div>
          <div className="col p-1">
            <div className="card h-100 bg-light p-2">
              <img
                src="/images/jacket-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h6>
                  <i
                    className="fa fa-calendar text-warning"
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="ms-3 text-warning">29 Mar 2022</span>
                </h6>
                <h5 className="card-title">
                  How Performance Visiblety with GitLab CI and Hood
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum has been
                </p>
              </div>
              <div className="card-footer  bg-light border-0">
                <h6 className="text-muted">Learn More</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
