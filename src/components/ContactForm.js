import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactSection = () => {
 // State hooks to store form data
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 // Update state on input change
 const handleInputChange = (e) => {
   const { name, value } = e.target;
   if (name === 'name') setName(value);
   if (name === 'email') setEmail(value);
   if (name === 'message') setMessage(value);
 };

 // Handle form submission
 const handleSubmit = async (event) => {
   event.preventDefault();

   // Form data to be sent
   const formData = {
     name,
     email,
     message
   };

   try {
     // Send the form data to your API endpoint
     const response = await fetch('/api/sendmail', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     });

     if (response.ok) {
       // Handle successful submission here
       alert('Email sent successfully!');
     } else {
       // Handle errors here
       alert('Failed to send email.');
     }
   } catch (error) {
     // Handle network errors here
     alert('Network error.');
   }
 };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Me!</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={handleInputChange} required />
        
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactSection;
