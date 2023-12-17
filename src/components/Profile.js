import React from 'react';
import ContactForm from './ContactForm';
import './Profile.css'; 
import ProfilePicture from './assets/image/ProfilePicture.jpeg';

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={ProfilePicture} alt="Preet Patel" className="profile-image" />
      <h1 className="profile-header">Preet Patel</h1>
      
      <section className="profile-section">
        <h2 className="profile-subheader">Education</h2>
        <ul className="profile-list">
          <li>B.S. Software Engineering, Arizona State University (Oct 2022 – Current)</li>
          <li>B.S. Chemistry, Nova Southeastern University (Aug 2018 – Dec 2020)</li>
        </ul>
      </section>

      <section className="profile-section">
        <h2 className="profile-subheader">Skills</h2>
        <ul className="profile-list">
          <li>Java, C/C++ – Proficient</li>
          <li>C# – Basic</li>
          <li>HTML – Basic</li>
          <li>Hardware Troubleshooting, OOP, Data Structures, Algorithms – Proficient</li>
        </ul>
      </section>

      <ContactForm />
    </div>
  );
};

export default Profile;
