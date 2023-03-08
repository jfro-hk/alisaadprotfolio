/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BoothDesignsDetails.css";
import { useParams } from "react-router-dom";

export default function BoothDesignsDetails() {
  const [title, setTitle] = useState([]);
  const [slug, setSlug] = useState([]);
  const [foto, setFoto] = useState([]);
  let id = useParams();
  useEffect(() => {
    axios
      .get(
        `http://alisaad.jhdevelopers.com/api/cases-projects-content/$2a$12$rtlPfAu0TXm6dq0Nb5ak6ePkZ1W6zyClBSXc7GHPonIKvXlSIYv6/` +
          id.id
      )
      .then((response) => {
        setSlug(response.data);
        setTitle(response.data);
        setFoto(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="BoothDesignsDetails container">
      {title.map((h) => (
        <h1 className="title">{h.title}</h1>
      ))}

      <div className="divForTextFoto">
        {slug.map((Booth) => (
          <div key={Booth.id}>
            <div className="">
              {Booth.sort < "1" ? (
                <div className="text">
                  <h3 className="my-3">Project Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
                    nec metus. Mauris ultricies, justo eu convallis placerat,
                    felis enim.
                  </p>

                  <h3 className="my-3">Project Details</h3>
                  <ul>
                    <li>Lorem Ipsum</li>
                    <li>Dolor Sit Amet</li>
                    <li>Consectetur</li>
                    <li>Adipiscing Elit</li>
                  </ul>
                </div>
              ) : () (
                <div className="foto">
                  <img
                    className="card-img-top"
                    src={`http://alisaad.jhdevelopers.com/${Booth.image_path}`}
                    alt="Card imag cap"
                  />
                </div>
              )}
            </div>

            {/* {foto.map((i) => (
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <img
                  className="img-fluid"
                  src={`http://alisaad.jhdevelopers.com/${i.image_path}`}
                  alt=""
                />
              </div>
            </div>
          ))} */}
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <img
                  className="img-fluid"
                  src={`http://alisaad.jhdevelopers.com/${}`}
                  alt=""
                />
              </div>
            </div> */
}
