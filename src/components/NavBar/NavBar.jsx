/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="bg container">
        <Link className="navbar-brand" to="/">
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase ">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
