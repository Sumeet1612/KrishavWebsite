import React from "react";
import phone from "../Assets/phone.svg";
import email from "../Assets/email.svg";
import location from "../Assets/loaction.svg";
import whatsapp from "../Assets/whatsapp.svg";



const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p
        style={{ textAlign: "justify", marginBottom: "15px" }}
      >
        When it comes to the safety and functionality of your space, trust
        Krishav Enterprise to deliver exceptional results. Contact us today to
        discuss your security system and electrical service needs. We look
        forward to serving you with dedication and expertise. Your safety is our
        priority.
      </p>
      <br />
      <div className="contact-form">
        <div className="location">
          <img style={{ height: "35px", width: "35px" }} src={location} alt="location" />
          <p>#52, Sector 19, Panchkula 134113</p>
        </div>
        <div className="pmail">
          <div className="phone">
            <img style={{ height: "35px", width: "35px" }} src={phone} alt="phone"/>
            <a href="tel:+919041036916">+91 90410 36916</a>
          </div>
          <div className="whatsapp">
            <img style={{ height: "35px", width: "35px" }} src={whatsapp} alt="whatsapp"/>
            <a href="https://wa.me/919041036916">Send Message</a>
          </div>
          <div className="email">
            <img style={{ height: "35px", width: "35px" }} src={email} alt="email" />
            <a href="mailto:amitkumarsai795@gmail.com">
              amitkumarsai795@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
