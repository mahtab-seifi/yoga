import React, { Component } from "react";
import second from "../image/second.jpg";

function FisrtMain() {
  return (
    <>
      <div className="mx-3 border-bottom border-secondary border-2" id="main">
        <div className="right">
          <img src={second} alt="" className="h-100"/>
        </div>
        <div className="left">
          <h4 className="mt-3">TYPES OF ACTIVITIES</h4>
          <ol className="list-group list-group-flush list-group-numbered mx-5 border-bottom border-top border-2 border-secondary ">
            <li class="list-group-item d-flex justify-content-between align-items-start border-end-0 border-start-0 border-top-0 border-2 border-secondary ">
              <div class="ms-2 me-auto">HATHA YOGA</div>
              <span class="text-secondary fs-5">+</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start border-end-0 border-start-0 border-top-0 border-2 border-secondary">
              <div class="ms-2 me-auto">ASHTANGA YOGA</div>
              <span class="text-secondary fs-5">+</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start border-end-0 border-start-0 border-top-0 border-2 border-secondary">
              <div class="ms-2 me-auto">VINYASA YOGA</div>
              <span class="text-secondary fs-5">+</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">KARMA YOGA</div>
              <span class="text-secondary fs-5">+</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default FisrtMain;
