import React from 'react';
import './ContentContainer.css'; 

const ContentContainer = ({ selectedMenu, children }) => {
  return (
    <div className={`content-container ${selectedMenu ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default ContentContainer;