/** @format */

import React from "react";
import "./Media.css";

export default function Media() {
  return (
    <div className="media">
      <h2>Media</h2>
      <div className="card-group">
        <div className="card">
          <iframe
            height="315"
            title="ali"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <iframe
            height="315"
            title="ali"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <iframe
            height="315"
            title="ali"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}
