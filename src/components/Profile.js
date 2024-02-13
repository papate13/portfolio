import React from 'react';
import ContactForm from './ContactForm';
import './Profile.css'; 
import ProfilePicture from './assets/image/ProfilePicture.jpeg';
import LinkedInIcon from './assets/image/icons/LinkedinIcon1.png'; 
import GitHubIcon from './assets/image/icons/GithubIcon.svg'; 

const Profile = () => {
  const skills = [
    "Java                     - Proficient",
    "C/C++                    - Proficient",
    "OOP                      - Proficient",
    "Data Structures          - Proficient",
    "Algorithms               - Proficient",
    "Hardware Troubleshooting - Advanced",
    "C#                       - Basic",
    "HTML                     - Basic",
    "Git                      - Basic",
    "SDLCs                    - Basic",
    "Scheme/Prolog            - Basic",
    "Gujarati                 - Native",
    "English                  - Fluent"
  ];

  return (
    <div className="profile-container">
      <div className="profile-education">
        <h1 className="profile-subheader">Education</h1>
        <ul className="profile-list">
          <li>
              <strong>Arizona State University</strong><br />
              <em>B.S. Software Engineering</em><br />
              Oct 2022 – Current<br />
              Overall GPA: 3.51, Major GPA: 3.72
          </li>
          <li>
              <strong>Nova Southeastern University</strong><br />
              <em>B.S. Chemistry</em><br />
              Aug 2018 – Dec 2020<br />
              Transferred
          </li>
        </ul>

        <h1 className="profile-subheader">Socials</h1>
        <div className="socials-container">
          <a href="https://www.linkedin.com/in/preetpatelse" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon-img" />
          </a>
          <a href="https://github.com/00preetpatel" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" className="social-icon-img" />
          </a>
        </div>
        
        <h1 className="profile-subheader">*work in progress*</h1>
        <div className="contact-container">
          <ContactForm />
        </div>
      </div>

      <div className="profile-main">
        <div className="profile-header-container">
          <img src={ProfilePicture} alt="Preet Patel" className="profile-image" />
          <div className="profile-name-title-container">
            <h1 className="profile-name">Preet Patel</h1>
            <h2 className="profile-title">Software Engineering Student</h2>
          </div>
        </div>
      </div>

      <div className="profile-hobbies">
        <div className="hobbies-section">
          <h1 className="profile-subheader">Hobbies & Interests</h1>
          <p>
            My passion for the outdoors comes alive through activities like hiking and camping. On the field, soccer is where I actively immerse myself, valuing participation over spectating. This enthusiasm for engagement extends to my projects, where creating and building are not just tasks but opportunities to enhance my problem-solving skills and practical knowledge.
          </p>
        </div>
      </div>

      <div className="profile-skills">
        <h1 className="profile-subheader">Skills</h1>
        <div>
          {skills.map(skill => (
            <div key={skill} className="skill-box">{skill}</div>
          ))}
        </div>
      </div>
      {/* Add Interests, Resume Download, and Cover Letter Download */}
    </div>
  );
};

export default Profile;
