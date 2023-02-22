/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div class="row py-3">
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/boothDesigns">
                  <h5 class="card-title ">Booth Designs</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i class="bi bi-shop"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i class="bi bi-house"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body-Projects card-body d-flex align-items-center justify-content-center">
                <Link to="/">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i class="bi bi-house"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <div class="card-body-Projects card-body d-flex align-items-center">
                <Link to="/">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <i class="bi bi-globe"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
