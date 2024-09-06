import React, { Component } from "react";
import third from "../image/third2.jpg";

function SECOND() {
  return (
    <>
      <main
        className="mx-3 border-bottom border-secondary border-2"
        id="secondMain"
      >
        <div className="border-bottom border-2 border-secondary py-3" id="textNone"><span className="fs-1">SCHEDULE</span></div>
        <div className="leftmain">
          <div className="border-bottom border-secondary border-2 p-md-5 p-sm-3" id="topText">
            <h4>
              SCHEDULE FOR <br />
              YOURSELF
            </h4>
            <span>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur est dicta reiciendis!
              </small>
            </span>
            <button className="btn btn-outline-dark rounded-0 mt-3">REGISTER</button>
          </div>
          <div
            className="border-start  border-secondary border-2 h-100"
            id="imageLeft"
          >
            <img src={third} alt="" />
          </div>
          <div  className="p-3 " id="bottomText">
            <h4>INDIVIDUAL LESSONS</h4>
            <span>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur est dicta reiciendis!
              </small>
            </span>
            <button className="btn btn-outline-dark mt-3 rounded-0">REGISTER</button>
          </div>
        </div>
        <div className="rightmain  border-secondary border-2">
          <ol className="list-group list-group-flush " id="secondlist">
            <li className="list-group-item border-start-0 border-top-0 border-end-0 border-secondary border-2" id="monday">
              <div class="ms-2 me-auto">
                <div class="fw-bold fs-3">MONDAY</div>
                <small> Lorem ipsum dolor sit amet.</small>
              </div>
            </li>
            <li className="list-group-item border-start-0 border-top-0 border-end-0 border-secondary border-2" id="wednesday">
              <div class="ms-2 me-auto">
                <div class="fw-bold fs-3">WEDNESDAY</div>
                <small> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
              </div>
            </li>
            <li className="list-group-item border-start-0 border-top-0 border-end-0 border-secondary border-2" id="thursday">
              <div class="ms-2 me-auto">
                <div class="fw-bold fs-3">THURSDAY</div>
                <small> Lorem ipsum dolor sit.</small>
              </div>
            </li>
            <li className="list-group-item "id="sunday">
              <div class="ms-2 me-auto">
                <div class="fw-bold fs-3">SUNDAY</div>
                <small> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus cupiditate maxime eaque?</small>
              </div>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}

export default SECOND;
