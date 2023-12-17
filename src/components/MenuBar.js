import React, { useState } from 'react';
import './MenuBar.css'; // Create this CSS file for styling

const MenuBar = ({ onMenuSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuSelect(''); // Reset content when closing the menu
  };

  const handleMenuOptionClick = (option) => {
    setIsMenuOpen(false);
    onMenuSelect(option);
  };

  return (
    <div>
      <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`dropdown-content ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => handleMenuOptionClick('profile')}>Profile</button>
        <button onClick={() => handleMenuOptionClick('projects')}>Projects</button>
        <button onClick={() => handleMenuOptionClick('courses')}>Courses</button>
        <button onClick={() => handleMenuOptionClick('contact')}>Contact</button>
        <button onClick={() => handleMenuOptionClick('')}>Home</button> 
      </div>
    </div>
  );
};

export default MenuBar;