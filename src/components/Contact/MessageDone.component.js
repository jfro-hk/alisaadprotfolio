import React from "react";
import "./MessageDone.css";

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
            <a href="https://hkhaleefah.com/">
              <button>Go Back!</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
