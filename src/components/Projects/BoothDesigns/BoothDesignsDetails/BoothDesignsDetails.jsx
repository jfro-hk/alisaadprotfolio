/** @format */

import React, { useEffect, useState } from "react";

import axios from "axios";
import "./BoothDesignsDetails.css";
import {useParams} from "react-router-dom";

export default function BoothDesignsDetails({ Booths }) {
   let id = useParams();
console.log(id.id)
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://alisaad.jhdevelopers.com/api/cases-projects-content/$2a$12$rtlPfAu0TXm6dq0Nb5ak6ePkZ1W6zyClBSXc7GHPonIKvXlSIYv6/`+id.id
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
    <div className="BoothDesignsDetails">
      {slug.map((Booth) => (
        <>
          <h2 class="card-title">{Booth.title}</h2>
          <div className="row">
            <div class="card mb-3">
              <img
                class="card-img-top"
                src={`http://alisaad.jhdevelopers.com/${Booth.image_path}`}
                alt="Card imag cap"
              />
              <div class="card-body">
                <p class="card-text">{Booth.type}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
