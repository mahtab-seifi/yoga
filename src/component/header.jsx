import React, { Component } from "react";
import headerimage from "../image/photo_2_2024-08-25_16-39-10.jpg";

function Header() {
  return (
    <>
      <header className="mx-3 border-bottom border-secondary border-2 ">
        <div id="headergoal">
          <div
            className=" d-flex flex-column justify-content-center "
            id="headertext"
          >
            <div id="titleHeader">
              <h1 className=" pe-md-5 me-md-5 " style={{ fontSize: "5em" }}>
                YOGA
              </h1>
              <h5 className="ms-md-5 ps-md-5" style={{ fontSize: "3em" }}>
                CLASS
              </h5>
            </div>
          </div>
          <div className="" id="btnheader">
            <span className="">
              <small>
                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
                Pariatur, odit?
              </small>
            </span>
            <button className="btn btn-outline-dark rounded-0 mt-3">
              WANT TO START
            </button>
          </div>
          <div  id="image">
            <img src={headerimage} alt="" />
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
