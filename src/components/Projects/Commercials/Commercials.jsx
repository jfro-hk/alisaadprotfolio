/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Commercials.css";
import Loader from "../../Loader/Loader";
import Page404 from "../../Page404/Page404";

export default function Commercials() {
  const [Commercials, setCommercials] = useState([]);
  const [CommercialsId, setCommercialsId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    fetch(
      "http://alisaad.jhdevelopers.com/api/cases-commercials-projects/$2a$12$TAPNXkecyMRrNqk8urnJqugtmj19BlNEqOjeCMD90wCq3J9DWJWf2"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data < "0") {
          setIsDataEmpty(true);
        } else {
          setIsDataEmpty(false);
          setCommercials(data);
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
  let CommercialsContent;
  if (isLoading) {
    CommercialsContent = <Loader />;
  } else if (isDataEmpty) {
    CommercialsContent = <Page404 />;
  } else {
    CommercialsContent = (
      <div className="Commercials">
        <h2>Commercials</h2>
        <div className="container">
          <div className="row py-3">
            {Commercials.map((Commercials) => (
              <div className="col-sm-6 my-3" key={Commercials.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`http://alisaad.jhdevelopers.com/${Commercials.path}`}
                    alt="Card imag cap"
                    width="500px"
                    height="500px"
                  />
                  <div className="card-body-Commercials card-body d-flex align-items-center justify-content-center">
                    <div>
                      <Link
                        to={`/${Commercials.slug}`}
                        onClick={() => setCommercialsId(Commercials.slug)}
                      >
                        <h5 className="card-title ">{Commercials.title}</h5>
                        <p className="card-text">{Commercials.short_desc}</p>
                        {CommercialsId}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div>{CommercialsContent}</div>;
}
