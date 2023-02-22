/** @format */

import React from "react";
import "./BoothDesigns.css";
import { Link } from "react-router-dom";

export default function BoothDesigns() {
  return (
    <div className="BoothDesigns">
      <h2>Booth Designs</h2>
      <div className="container">
        <div class="row py-3">
          <div class="col-sm-6 my-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/assets/projectsimages/Baghdad LENSES.jpeg"
                alt="Card imag cap"
                width="500px"
                height="500px"
              />
              <div class="card-body-BoothDesigns card-body d-flex align-items-center justify-content-center">
                <Link to="/booth">
                  <h5 class="card-title ">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/assets/projectsimages/lewelry.jpeg"
                alt="Card imag cap"
                width="500px"
                height="500px"
              />
              <div class="card-body-BoothDesigns card-body d-flex align-items-center">
                <Link to="/booth">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/assets/projectsimages/Nola ICE CREAM.jpeg"
                alt="Card imag cap"
                width="500px"
                height="500px"
              />
              <div class="card-body-BoothDesigns card-body d-flex align-items-center justify-content-center">
                <Link to="/booth">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/assets/projectsimages/TECNO.jpeg"
                alt="Card imag cap"
                width="500px"
                height="500px"
              />
              <div class="card-body-BoothDesigns card-body d-flex align-items-center justify-content-center">
                <Link to="/booth">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6 my-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/assets/projectsimages/SWEET VILLAGE.jpeg"
                alt="Card imag cap"
                width="600px"
                height="500px"
              />
              <div class="card-body-BoothDesigns card-body d-flex align-items-center">
                <Link to="/booth">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
