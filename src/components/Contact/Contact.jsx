/** @format */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7326s6",
        "template_dtvrw4a",
        form.current,
        "clgW0nbcKYKoXfO0T"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact container">
      <h2>Contact</h2>
      <div className="container text-center">
        <div className="row justify-content-between">
          <div className="coBox col border border-dark p-5 m-1">
            <h1 className="titleContactUs">Get In Touch</h1>
            <p className="container text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-sm-6 mb-5">
            <input
              className="mb-4"
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              className="mb-4"
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="col-sm-6 mb-5">
            <textarea
              className="mb-4"
              name="message"
              placeholder="Your Message"
              required
            />
            <p className="ContactButton">
              <input type="submit" value="Send Message" />
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
