import React, { Component, useState } from "react";
import profile from "../image/user.png";
import "./style.css"

function Nav() {
 
  return (
    <>
      <nav className="navbar  navbar-expand-sm  mx-3 mt-3 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={profile} alt="" style={{width:"25px"}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
             tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                YOGA MENU
              </h5>
              <button
                type="button"
                className="btn-close"
              data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
           
            <div className="offcanvas-body  " >
              <ul className="navbar-nav  flex-grow-1 "id="mylist">
               
                <li className="nav-item border-start border-2  border-secondary ps-4">
                  <a href="#" className="nav-link ">
                    CENTRAL
                  </a>
                </li>
                <li className="nav-item  border-start border-2  border-secondary ps-4">
                  <a  href="#" className="nav-link">
                    TYPES
                  </a>
                </li>
                <li className="nav-item border-start border-2  border-secondary ps-4">
                  <a href="#" className="nav-link">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item  border-start border-2  border-secondary ps-4">
                  <a href="#" className="nav-link">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
