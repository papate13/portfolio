import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="project-item">
        <h3>JavaFX Checkers (Oct 2023)</h3>
        <p>Developed a Checkers game featuring both Player vs. Player and basic Player vs. Computer modes...</p>
      </div>
      <div className="project-item">
        <h3>Landmass Procedural Generation (June 2023 - Current)</h3>
        <p>Engineered a landmass generation subroutine as part of a larger survival game project...</p>
      </div>
      <div className="project-item">
        <h3>Portfolio Website (Nov 2023 - Current)</h3>
        <p>Developed a personal portfolio website showcasing project highlights...</p>
      </div>
    </div>
  );
};

export default Projects;