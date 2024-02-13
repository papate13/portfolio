import React, { useState } from 'react';
import './Projects.css';
import ProcedGen1 from './assets/image/procedGen/ProcedGen1.png';
import ProcedGen2 from './assets/image/procedGen/ProcedGen2.png';
import ProcedGen3 from './assets/image/procedGen/ProcedGen3.png';

const ProjectItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="project-item">
      <h3 onClick={toggleOpen}>{title}</h3>
      {isOpen && <div className="project-details">{children}</div>}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <ProjectItem title="JavaFX Checkers (Oct 2023)">
        <p>• Developed a Checkers game featuring both Player vs. Player and basic Player vs. Computer modes, integrating visual and textual interfaces.</p>
        <p>• Technologies Used: JavaFX, Java 8, Personal Software Process (PSP)</p>
        {/* Add images and more details here */}
      </ProjectItem>
      <ProjectItem title="Landmass Procedural Generation (June 2023 - Current)">
        <p>• Engineered a landmass generation subroutine as part of a larger survival game project. The module leverages float curves for noise generation and layers this noise to create a realistic heightmap, simulating geographical features like peaks, valleys, and erosion effects on triangular mesh chunks.</p>
        <p>• Technologies Used: Blueprints Visual Scripting.</p>
        {/* Add images and more details here */}
        <div className="project-images">
          <img src={ProcedGen1} alt="Procedural Generation Example 1" />
          <img src={ProcedGen2} alt="Procedural Generation Example 2" />
          <img src={ProcedGen3} alt="Procedural Generation Example 3" />
        </div>
      </ProjectItem>
      <ProjectItem title="Portfolio Website (Nov 2023 - Current)">
        <p>• Developed a personal portfolio website showcasing project highlights, completed courses, and professional profile, using a clean and intuitive layout.</p>
        <p>• Technologies Used: HTML, CSS, JS, GitHub Pages, React.</p>
      </ProjectItem>
    </div>
  );
};

export default Projects;
