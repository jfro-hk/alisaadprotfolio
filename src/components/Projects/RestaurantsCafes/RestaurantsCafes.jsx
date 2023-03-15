/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./RestaurantsCafes.css";
import Loader from "../../Loader/Loader";
import Page404 from "../../Page404/Page404";

export default function RestaurantsCafes() {
  const [RestaurantsCafes, setRestaurantsCafes] = useState([]);
  const [RestaurantsCafesId, setRestaurantsCafesId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    fetch(
      "http://alisaad.jhdevelopers.com/api/cases-restaurantscafes-projects/$2a$12$5ZRbXc9SCjbQiMkA8uWjZeRM96utZI3CmksHJoP7GWtosi0EGYGfq",
      {
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data < "0") {
          setIsDataEmpty(true);
        } else {
          setIsDataEmpty(false);
          setRestaurantsCafes(data);
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

  let RestaurantsCafesContent;
  if (isLoading) {
    RestaurantsCafesContent = <Loader />;
  } else if (isDataEmpty) {
    RestaurantsCafesContent = <Page404 />;
  } else {
    RestaurantsCafesContent = (
      <div className="RestaurantsCafes">
        <h2>Restaurants & Cafes</h2>
        <div className="container">
          <div className="row py-3">
            {RestaurantsCafes.map((RestaurantsCafes) => (
              <div className="col-sm-6 my-3" key={RestaurantsCafes.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`http://alisaad.jhdevelopers.com/${RestaurantsCafes.path}`}
                    alt="Card imag cap"
                    width="500px"
                    height="500px"
                  />
                  <div className="card-body-RestaurantsCafes card-body d-flex align-items-center justify-content-center">
                    <div>
                      <Link
                        to={`/${RestaurantsCafes.slug}`}
                        onClick={() =>
                          setRestaurantsCafesId(RestaurantsCafes.slug)
                        }
                      >
                        <h5 className="card-title ">
                          {RestaurantsCafes.title}
                        </h5>
                        <p className="card-text">
                          {RestaurantsCafes.short_desc}
                        </p>
                        {RestaurantsCafesId}
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

  return <div>{RestaurantsCafesContent}</div>;
}
