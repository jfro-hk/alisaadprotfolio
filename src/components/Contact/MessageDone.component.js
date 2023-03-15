/** @format */

import React from "react";
import "./MessageDone.css";
import { Link } from "react-router-dom";

export const MessageDone = () => {
  return (
    <div className="MessageDone">
      <div className="MessageDoneContainer ">
        <div className="MessageContainer ">
          <p>
            Your message has been sent.
            <br />
            Thank you! We will get back to you as soon as I can.
          </p>
          <p className="MessageDoneButton">
            <Link to="/">
              <button>Go Back!</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
