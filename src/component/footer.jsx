import React, { Component } from "react";

function FOOTER() {
  return (
    <>
      <footer className="mx-3">
        <div className="d-flex justify-content-center py-3" id="title">
          <h1>PACKAGE OF SERVICES</h1>
        </div>
        <div className="border-bottom border-2 border-secondary">
          <div className="pb-3 " id="footer">
            <div className=" mb-3 mb-sm-0 ">
              <div className="card border border-2 border-secondary rounded-0">
                <div className="card-body">
                  <h3 className="card-title ">43$</h3>
                  <ol className="card-text list-group list-group-flush ">
                    <li className="list-group-item border-0">5 sessions</li>
                    <li className="list-group-item border-0">lesson 30 min</li>
                    <li className="list-group-item border-0">
                      group of 10 persons
                    </li>
                  </ol>
                  <button className="btn btn-outline-dark mt-3 rounded-0">
                    I WANT TO BOOK
                  </button>
                </div>
              </div>
            </div>
            <div className=" mb-3 mb-sm-0  ">
              <div className="card border border-2 border-secondary rounded-0">
                <div className="card-body">
                  <h3 className="card-title">85$</h3>
                  <ol className="card-text list-group list-group-flush">
                    <li className="list-group-item border-0">7 sessions</li>
                    <li className="list-group-item border-0">lesson 1.5</li>
                    <li className="list-group-item border-0">
                      group of 5 persons
                    </li>
                  </ol>
                  <button className="btn btn-outline-dark mt-3 rounded-0">
                    I WANT TO BOOK
                  </button>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className="card border border-2 border-secondary rounded-0">
                <div className="card-body">
                  <h3 className="card-title">181$</h3>
                  <ol className="card-text list-group list-group-flush">
                    <li className="list-group-item border-0">11 sessions</li>
                    <li className="list-group-item border-0">lesson 30 min</li>
                    <li className="list-group-item border-0">
                      group of 10 persons
                    </li>
                  </ol>
                  <button className="btn btn-outline-dark mt-3 rounded-0">
                    I WANT TO BOOK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FOOTER;
