import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const Button = styled.button`
    background-color: #c1706f;
  `;
  return (
    <header className="container">
      {/* <!-- navbar --> */}
      <nav className=" navbar navbar-expand-lg ">
        {/* web view */}
        <div className="container-fluid ">
          {/* logo part  section*/}
          <div>
            <a className="navbar-brand" href="#">
              <img
                src="/home/business-logo.png"
                alt=""
                width="125"
                height="125"
              />
            </a>
          </div>
          {/* search section */}
          <div className="w-50 d-flex justify-content-center align-items-center  ">
            {/* search part */}
            <div className="input-group mb-3  ">
              <input
                type="text"
                className="form-control  "
                placeholder="search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <Button className="   input-group-text" type="submit">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ fontSize: 50, color: "white" }}
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* cart part */}
          <div className=" d-flex  mx-4">
            <img
              src="/home/cart-logo.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top  "
            />
            <button className="ms-1 border-0 bg-none ">MY CART</button>
          </div>
          {/*authentication section */}

          {/* login  */}
          <div className=" d-flex  ">
            <img
              src="/home/icon-login.png"
              alt=""
              width="20"
              height="20"
              className="d-inline-block align-text-top  "
            />
            <button className="ms-1 border-0 bg-none">LOGIN</button>
          </div>
          {/* register  */}

          <div className="text-center d-flex   ms-1">
            <img
              src="/home/icon-register.png"
              alt=""
              width="20"
              height="20"
              className=" ms-1"
            />
            <button className="ms-1 border-0 bg-none">REGISTER</button>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div> */}
      </nav>

      {/* <!--test  navbar --> */}
      {/* <div className="container">
        <div className="row g-0">
          <div className="col-lg-4  "> logo</div>
          <div className="col-lg-8 col-md-8">search</div>
          <div className="col-lg-4  ">auth </div>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
