/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="row py-3">
          <div className="col-sm-6 my-3">
            <div className="card">
              <div className="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/boothDesigns">
                  <h5 className="card-title ">Booth Designs</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i className="bi bi-shop"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-3">
            <div className="card">
              <div className="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/restaurantsCafes">
                  <h5 className="card-title">Restaurants & Cafes</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i className="bi bi-house"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-3">
            <div className="card">
              <div className="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/houseDesigns">
                  <h5 className="card-title">House Designs</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i className="bi bi-house"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-3">
            <div className="card">
              <div className="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/commercials">
                  <h5 className="card-title">Commercials</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i className="bi bi-globe"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
