/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HouseDesigns.css";
import Loader from "../../Loader/Loader";
import Page404 from "../../Page404/Page404";

export default function HouseDesigns() {
  const [HouseDesigns, setHouseDesigns] = useState([]);
  const [HouseDesignsId, setHouseDesignsId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://alisaad.jhdevelopers.com/api/cases-housedesigns-projects/$2a$12$Tp350chtcyMYIjFtwEwVeCU3mExjQgifoC9PhfTSIDWFYJE24qx"
      )
      .then((response) => {
        if (response.data < "0") {
          setIsDataEmpty(true);
        } else {
          setIsDataEmpty(false);
          setHouseDesigns(response.data);
        }
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  let HouseDesignsContent;
  if (isLoading) {
    HouseDesignsContent = <Loader />;
  } else if (isDataEmpty) {
    HouseDesignsContent = <Page404 />;
  } else {
    HouseDesignsContent = (
      <div className="HouseDesigns">
        <h2>House Designs</h2>
        <div className="container">
          <div className="row py-3">
            {HouseDesigns.map((HouseDesigns) => (
              <div className="col-sm-6 my-3">
                <div className="card" key={HouseDesigns.id}>
                  <img
                    className="card-img-top"
                    src={`http://alisaad.jhdevelopers.com/${HouseDesigns.path}`}
                    alt="Card imag cap"
                    width="500px"
                    height="500px"
                  />
                  <div className="card-body-HouseDesigns card-body d-flex align-items-center justify-content-center">
                    <div>
                      <Link
                        to={`/${HouseDesigns.slug}`}
                        onClick={() => setHouseDesignsId(HouseDesigns.slug)}
                      >
                        <h5 className="card-title ">{HouseDesigns.title}</h5>
                        <p className="card-text">{HouseDesigns.short_desc}</p>
                        {HouseDesignsId}
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

  return <div>{HouseDesignsContent}</div>;
}
