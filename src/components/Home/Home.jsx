/** @format */

import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div id="app">
        <div class="homeTitle">
          <div class="homeTitle-inner">
            <div class="cafe">
              <div class="cafe-inner">Ali Saad</div>
            </div>
            <div class="mozart">
              <div class="mozart-inner">I'm an Interior Designer</div>
            </div>
          </div>
        </div>

        <div class="image">
          <img className="aliImage" src="/assets/images/bg.JPG" alt="" />
        </div>
      </div>
    </div>
  );
}
