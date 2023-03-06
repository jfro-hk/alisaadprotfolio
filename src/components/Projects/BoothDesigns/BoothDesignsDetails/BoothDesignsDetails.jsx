/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BoothDesignsDetails.css";
import { useParams } from "react-router-dom";

export default function BoothDesignsDetails() {
  const [slug, setSlug] = useState([]);
  let id = useParams();
  useEffect(() => {
    axios
      .get(
        `http://alisaad.jhdevelopers.com/api/cases-projects-content/$2a$12$rtlPfAu0TXm6dq0Nb5ak6ePkZ1W6zyClBSXc7GHPonIKvXlSIYv6/` +
          id.id
      )
      .then((response) => {
        console.log(response.data);
        setSlug(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {slug.map((Booth) => (
        <div className="BoothDesignsDetails" key={Booth.id}>
          <h2 className="card-title">{Booth.title}</h2>
          <div className="row">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={`http://alisaad.jhdevelopers.com/${Booth.image_path}`}
                alt="Card imag cap"
              />
              <div className="card-body">
                <p className="card-text">{Booth.type}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
