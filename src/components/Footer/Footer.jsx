/** @format */

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-1">
          <div class="col-md-4 d-flex align-items-center">
            <span class="">© 2023 Ali Saad</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3 bi bi-whatsapp"></li>
            <li class="ms-3 bi bi-telegram"></li>
            <li class="ms-3 bi bi-instagram"></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
