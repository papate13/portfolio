import React, { useState } from 'react';
import './Courses.css';

const CourseDetail = ({ id, name, year }) => (
  <p>{id} - {name} ({year})</p>
);

const CourseItem = ({ title, courses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`course-item ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <h3>{title}</h3>
      <div className="course-details">
        {isOpen && courses.map(course => <CourseDetail key={course.id} {...course} />)}
      </div>
    </div>
  );
};

const Courses = () => {
  const courseData = {
    SER : [
      { id: "SER 334", name: "Software Systems Operating Systems&System Prog", year: "2024" },
      { id: "SER 321", name: "Principles and Practices of Software Engineering", year: "2024" },
      { id: "SER 316", name: "Software Enterprise: Cnstrct", year: "2024" },
      { id: "SER 315", name: "Software Enterprise: Dsgn&Proc", year: "2024" },
      { id: "SER 232", name: "Computer Systems Fundamentals", year: "2023" },
      { id: "SER 222", name: "Dsgn & Analy: Data Strs & Algo", year: "2023" },
      { id: "SER 216", name: "Sftware Enterpr: PersProc&Qual", year: "2023" }
    ],
    CSE: [
      { id: "CSE 240", name: "Intro to Programming Languages", year: "2023" },
      { id: "CSE 230", name: "Computer Org/Assemb Lang Prog", year: "2023" },
      { id: "CSE 205", name: "Object-Oriented Program & Data", year: "2023" },
      { id: "CSE 110", name: "Principles of Programming", year: "2022" }
    ],
    MAT: [
      { id: "MAT 267", name: "Calculus for Engineers III", year: "2023" },
      { id: "MAT 243", name: "Discrete Math Structures", year: "2022" }
    ],
    EGR: [
      { id: "EGR 280", name: "Engineering Statistics", year: "2023" },
      { id: "FSE 100", name: "Intro to Engineering", year: "2024"}
    ]
    // Add other course categories
  };

  return (
    <div className="courses-container">
      <h2 className="courses-header">Courses & Certifications</h2>
      {Object.entries(courseData).map(([category, courses]) => (
        <CourseItem key={category} title={category} courses={courses} />
      ))}
    </div>
  );
};

export default Courses;
