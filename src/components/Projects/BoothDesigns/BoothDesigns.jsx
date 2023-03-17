/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoothDesigns.css";
import Loader from "../../Loader/Loader";
import Page404 from "../../Page404/Page404";

export default function BoothDesigns() {
  const [BoothDesigns, setBoothDesigns] = useState([]);
  const [BoothId, setBoothId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    fetch(
      "https://crm.alisaad.art/api/cases-projects/$2a$12$SxC9WlYIvrCjIpSJWBAsmv1bYSiewcuWAFfM2ZxWVTywErztMJu"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data < "0") {
          setIsDataEmpty(true);
        } else {
          setIsDataEmpty(false);
          setBoothDesigns(data);
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
      <div className="BoothDesigns">
        <h2>Booth Designs</h2>
        <div className="container">
          <div className="row py-3">
            {BoothDesigns.map((Booths) => (
              <div className="col-sm-6 my-3" key={Booths.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`https://crm.alisaad.art${Booths.path}`}
                    alt="Card imag cap"
                    width="500px"
                    height="500px"
                  />
                  <div className="card-body-BoothDesigns card-body d-flex align-items-center justify-content-center">
                    <div>
                      <Link
                        to={`/${Booths.slug}`}
                        onClick={() => setBoothId(Booths.slug)}
                      >
                        <h5 className="card-title ">{Booths.title}</h5>
                        <p className="card-text">{Booths.short_desc}</p>
                        {BoothId}
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

  return <div>{boothContent}</div>;
}
