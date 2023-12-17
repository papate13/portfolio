import React, { useState } from 'react';
import './MenuBar.css'; 

const MenuBar = ({ onMenuSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const handleMenuOptionClick = (option) => {
    onMenuSelect(option);
  };

  return (
    <div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`dropdown-content ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => handleMenuOptionClick('profile')}>Profile</button>
        <button onClick={() => handleMenuOptionClick('projects')}>Projects</button>
        <button onClick={() => handleMenuOptionClick('courses')}>Courses</button>
        <button onClick={() => handleMenuOptionClick('')}>Home</button>
      </div>
    </div>
  );
};

export default MenuBar;