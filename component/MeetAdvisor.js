import React from "react";

function MeetAdvisor() {
  return (
    <section className="container mt-5  ">
      <div className="text-center">
        <h6>-Meet Our Advisors-</h6>
        <h2>We have an Exclusive Team Member</h2>
      </div>
      {/* <!-- team member card start  --> */}
      <div className="row row-cols-4 advisor-container">
        {/* <!-- card 1 start  --> */}
        <div className="card bg-white text-dark border-0">
          <img src="images/jacket-1.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Last updated 3 mins ago</p>
          </div>
        </div>
        {/* <!-- card 1 end --> */}
        <div className="card bg-white text-dark border-0">
          <img src="images/jacket-1.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Last updated 3 mins ago</p>
          </div>
        </div>
        <div className="card bg-white text-dark border-0">
          <img src="images/jacket-1.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Last updated 3 mins ago</p>
          </div>
        </div>
        <div className="card bg-white text-dark border-0">
          <img src="images/jacket-1.png" className="card-img" alt="..." />
          <div className="card-img-overlay"></div>
          <div className="card-footer border-0 shadow-none bg-white text-center">
            <h6>mahmudul Hasan</h6>
            <p>Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      {/* <!-- 2nd part of advisors team --> */}
      <section className="d-flex">
        <div className="do-section-element">
          <h6>- Company Skills</h6>
          <h3>We Have Experience for Business Planning</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
          <p>
            Unknown printer took a galley of type and scrambled it to make a
            type specimen book.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even.
          </p>

          <button className="btn btn-md btn-dark text-white button-custom rounded-pill">
            <div className="button-custom-in"></div>
            Consulting Now
          </button>
        </div>
        <div className="d-flex p-3">
          <div className="m-3 ">
            <div className="test-shape  "></div>
            <div className="test-shape"></div>
          </div>
          <div className="m-3">
            <div className="test-shape "></div>
            <div className="test-shape"></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MeetAdvisor;
