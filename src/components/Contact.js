import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with me If you have any question.</p>

      <div className="contact-info">
        <div className="contact-method">
          <h3>Email</h3>
          <p>
            Email me{" "}
            <a href="mailto:info@example.com">wasimahmed15042000@gmail.com</a>
          </p>
        </div>

        <div className="contact-method">
          <h3>Phone</h3>
          <p>
            Call me <a href="tel:+1234567890">6200819984</a>
          </p>
        </div>

        <div className="contact-method">
          <h3>My Website</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
