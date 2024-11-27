import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Send the form data to EmailJS
    emailjs
        .send(
            "service_7vyjfzy",
            "template_8d5aqfy",
            formData,
            "LokyFPLvm_dZCIu8S"
        )
        .then(
            (response) => {
              console.log("Email sent successfully:", response);
              alert("Message sent successfully!");
            },
            (error) => {
              console.error("Error sending email:", error);
              alert("Failed to send message. Please try again.");
            }
        );

    // Reset form fields after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
      <div id="contact" className="section dark2">
        <div className="container contact">
          <div className="section-title">
            <h1>Contact <span className="color-primary">Me</span></h1>
            <p className="width70">Feel free to get in touch with me. I am always open to discuss new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>

          <div>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></li>
              <li><a href="https://twitter.com/"  target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/"  target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/"  target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>

          <div className="columns">
            <div className="column contact-box">
              <h3>Address</h3>
              <i className="bi bi-map icon"></i>
              <p>73 New Geern Mount<br />Bihar, India, 2032</p>
            </div>
            <div className="column contact-box">
              <h3>Email</h3>
              <i className="bi bi-envelope icon"></i>
              <p>contact@example.com</p>
            </div>
            <div className="column contact-box">
              <h3>Call Me</h3>
              <i className="bi bi-telephone-inbound icon"></i>
              <p>+91-9122574715</p>
            </div>
          </div>

          <div>
            <form className="contact-form" onSubmit={formSubmitHandler}>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
              />
              <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
              />
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
              />
              <textarea
                  rows="5"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
              />
              <button type="submit" className="button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
