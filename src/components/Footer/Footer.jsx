/** @format */

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-1">
          <div className="col-md-4 d-flex align-items-center">
            <span className="">© 2023 Ali Saad</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3 bi bi-whatsapp"></li>
            <li className="ms-3 bi bi-telegram"></li>
            <li className="ms-3 bi bi-instagram"></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
