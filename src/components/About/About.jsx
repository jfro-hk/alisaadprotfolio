/** @format */

import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="container" data-aos="fade-up">
        <div className="">
          <h2>About</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="./assets/images/bg.JPG"
              className="aboutImg img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Interior Designer &amp; Production Designer.</h3>
            <p className="fst-italic">
              Design is a tool for improving our humanity.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>9 Aug 1997</span>
                  </li>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong>
                    <span>+964 077000000</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong>
                    <span>Baghdad, Iraq</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span>30</span>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>
                    <span>Bachelor's degree in interior design</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>E-mail:</strong> <span>alisaad9770@yahoo.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
