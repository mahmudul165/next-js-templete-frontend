import React from "react";

function About() {
  return (
    <section className="about-us container d-flex">
      <div>
        <img
          width="599px"
          height="354px"
          className="shopping-size"
          src="/images/shopping.png"
          alt=""
        />
      </div>
      <div>
        <div className="d-flex">
          <div className="bg-danger fs4 fw-bolder">
            <hr />
          </div>
          <h5>About us</h5>
        </div>
        <h2>Professional Business Guidance Agency</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since Unknown printer took a galley of type and scrambled it to make a
          type specimen book.
        </p>
        <ol>
          <li>Business & Consulting Agency</li>
          <li>Business & Consulting Agency</li>
        </ol>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default About;
