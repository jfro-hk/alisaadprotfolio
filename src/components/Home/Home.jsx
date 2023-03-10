/** @format */

import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div class="homeTitle">
        <div class="homeTitle-inner">
          <div class="name">
            <div class="name-inner">Ali Saad</div>
          </div>
          <div class="textForWhatYouDo">
            <div class="textForWhatYouDo-inner">I'm an Interior Designer</div>
          </div>
        </div>
      </div>

      <div class="image">
        <div className="aliImage">
          {/* <img
            src="./assets/images/White.png"
            className="img-fluid"
            alt=""
            width="300px"
            height="300px"
          /> */}
        </div>
      </div>
    </div>
  );
}
