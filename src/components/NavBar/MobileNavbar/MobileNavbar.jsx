/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

export default function MobileNavbar(props) {
  const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
  return (
    <nav className={isOpenClass}>
      <Link
        to="/"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        About Me
      </Link>
      <Link
        to="/media"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Media
      </Link>
      <Link
        to="/projects"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Contact
      </Link>
    </nav>
  );
}
MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
};
