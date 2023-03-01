/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BoothDesigns.css";

export default function BoothDesigns() {
  const [BoothDesigns, setBoothDesigns] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://alisaad.jhdevelopers.com/api/cases-projects/$2a$12$SxC9WlYIvrCjIpSJWBAsmv1bYSiewcuWAFfM2ZxWVTywErztMJu"
      )
      .then((response) => {
        console.log(response);
        setBoothDesigns(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="BoothDesigns">
      <h2>Booth Designs</h2>
      <div className="container">
        <div class="row py-3">
          {BoothDesigns.map((Booth) => (
            <div class="col-sm-6 my-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src={`http://alisaad.jhdevelopers.com/${Booth.path}`}
                  alt="Card imag cap"
                  width="500px"
                  height="500px"
                />
                <div class="card-body-BoothDesigns card-body d-flex align-items-center justify-content-center">
                  <Link to={`/booth${Booth.slug}`}>
                    <h5 class="card-title ">{Booth.title}</h5>
                    <p class="card-text">{Booth.short_desc}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
