/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Media.css";
import Loader from "../Loader/Loader";
import Page404 from "../Page404/Page404";

export default function Media() {
  const [MediaDesigns, setMediaDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    fetch(
      "http://alisaad.jhdevelopers.com/api/media-videos/$2a$12$g12rae83xXFn9Pj3kf4ouAeHnpiddQVcoAsDYG4V3WaE3lwQzOu"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data < "0") {
          setIsDataEmpty(true);
        } else {
          setIsDataEmpty(false);
          setMediaDesigns(data);
          console.log(data);
        }
        console.log(data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let boothContent;
  if (isLoading) {
    boothContent = <Loader />;
  } else if (isDataEmpty) {
    boothContent = <Page404 />;
  } else {
    boothContent = (
      <div className="media">
        <h2>Media</h2>
        <div className="card-group">
          {MediaDesigns.map((Media) => (
            <div className="card" key={Media.id}>
              <iframe height="315" title="ali" src={Media.link}></iframe>
              <div className="card-body">
                <h5 className="card-title">{Media.title}</h5>
                <p className="card-text">{Media.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div>{boothContent}</div>;
}
