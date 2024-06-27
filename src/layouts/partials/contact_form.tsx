"use client";
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-form-section">
      <div className="container">
      <h6 className="contact-title">Kontaktieren Sie uns heute noch</h6>
        <form
          name="contact"
          method="POST"
          action="https://formspree.io/f/meqydney"
          netlify-honeypot="bot-field"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you are human: <input name="bot-field" />
            </label>
          </p>
          <div className="form-group">
            
            <input type="text" name="name" id="name" placeholder="Vor- und Nachname" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea rows={3} name="text" id="message" placeholder="Optionale Nachricht" />
          </div>
          <button type="submit" className="submit-button">Jetzt kostenlos anfragen</button>
        </form>
      </div>
      <style jsx>{`
        .contact-form-section {
          padding: 20px;
          border-top: 1px solid #ddd;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          text-align: left;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .contact-title {
          font-weight: normal; /* Adjust the font weight to make it less bold */
          margin-bottom: 20px; /* Add space between the title and the form */
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 5px;
          font-weight: bold;
        }
        input {
          padding: 10px;
          font-size: 16px;
          border: 0px solid #ccc;
          border-radius: 5px;
        }
        .submit-button {
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #016D5D;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          max-width: 220px;
        }
        .submit-button:hover {
          background-color: #014f4a;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
