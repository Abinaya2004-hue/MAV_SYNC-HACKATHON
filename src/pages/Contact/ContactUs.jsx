import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have any questions? We'd love to hear from you. Fill out the form below and we'll get back to you soon!
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..." required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
