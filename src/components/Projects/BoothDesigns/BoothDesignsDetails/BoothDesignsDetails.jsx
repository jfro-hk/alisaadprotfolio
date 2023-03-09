/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BoothDesignsDetails.css";
import { useParams } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import Page404 from "../../../Page404/Page404";

export default function BoothDesignsDetails() {
  const [title, setTitle] = useState([]);
  const [Details, setDetails] = useState([]);
  const [foto, setFoto] = useState([]);
  const [fotos, setFotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  let id = useParams();
  useEffect(() => {
    axios
      .get(
        `http://alisaad.jhdevelopers.com/api/cases-projects-content/$2a$12$rtlPfAu0TXm6dq0Nb5ak6ePkZ1W6zyClBSXc7GHPonIKvXlSIYv6/` +
          id.id
      )
      .then((response) => {
        if (response.data < "0") {
          setIsDataEmpty(true);
        } else {
          setIsDataEmpty(false);
          setTitle(response.data);
          setDetails(response.data[0]);
          setFoto(response.data[1]);
          setFotos(response.data);
          console.log(response.data);
        }
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  let fotosFromForLoob = [];
  if (fotos) {
    for (let i = 2; i < fotos.length; i++) {
      fotosFromForLoob.push(fotos[i]);
    }
  }

  let pageContent;
  if (isLoading) {
    pageContent = <Loader />;
  } else if (isDataEmpty) {
    pageContent = <Page404 />;
  } else {
    pageContent = (
      <div className="BoothDesignsDetails container">
        {title.map((title) => (
          <h1 className="title">{title.title}</h1>
        ))}

        <div className="row">
          <div className="col-md-4">
            <h3 className="my-3">Project Description</h3>
            <p>{Details.description}</p>

            <h3 className="my-3">Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>

          <div className="col-md-8">
            <img
              className="card-img-top"
              src={`http://alisaad.jhdevelopers.com/${foto.image_path}`}
              alt="Card imag cap"
            />
          </div>
        </div>
        <br></br>

        <div className="row">
          {fotosFromForLoob.map((foto) => (
            <div className="col-md-3 col-sm-6 mb-4" key={foto.id}>
              <img
                className="img-fluid"
                src={`http://alisaad.jhdevelopers.com/${foto.image_path}`}
                alt="Card imag cap"
                height="500px"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div>{pageContent}</div>;
}
