import React, { useState } from 'react';
import './App.css';
import VideoBackground from './components/VideoBackground';
import MenuBar from './components/MenuBar';
import ContentContainer from './components/ContentContainer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Courses from './components/Courses';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'profile':
        return <Profile />; 
      case 'projects':
        return <Projects />; 
      case 'courses':
        return <Courses />; 
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <VideoBackground />
      <MenuBar onMenuSelect={setSelectedMenu} />
      <ContentContainer selectedMenu={selectedMenu}>
        {renderContent()}
      </ContentContainer>
    </div>
  );
}

export default App;