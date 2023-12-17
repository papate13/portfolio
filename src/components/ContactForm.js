import React from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  return (
    <div>
      <h2>Contact Me!</h2>
      <form action="mailto:your-email@example.com" method="GET">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactForm;