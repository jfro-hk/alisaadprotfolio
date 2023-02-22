/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="bg container">
        <Link class="navbar-brand" to="/">
          <img
            className="logoImg img-fluid"
            alt="logo"
            src="./assets/images/logo.png"
          />
        </Link>
        <button
          type="button"
          className={`mobile-open-button ${isMobileNavOpen ? "open" : ""}`}
          onClick={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
        >
          {isMobileNavOpen ? (
            <div className="_2_1Hw _1XNn4">
              <div className="_2x2ES _3SfeL _2Gsgc"></div>
              <div className="_2x2ES _2vsXM"></div>
              <div className="_2x2ES _3SfeL _24e0Q"></div>
            </div>
          ) : (
            <div className="_2_1Hw">
              <div className="_2x2ES _3SfeL _2Gsgc"></div>
              <div className="_2x2ES _2vsXM"></div>
              <div className="_2x2ES _3SfeL _24e0Q"></div>
            </div>
          )}
        </button>
        <MobileNavbar
          open={isMobileNavOpen}
          handleMobile={setIsMobileNavOpen}
        />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-uppercase ">
            <li class="nav-item">
              <Link class="nav-link " to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/media">
                Media
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
