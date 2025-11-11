import React, { useState } from 'react';
import Desktop from './components/Desktop';
import AboutWindow from './components/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow';
import ExperienceWindow from './components/ExperienceWindow';
import SkillsWindow from './components/SkillsWindow';
import ContactWindow from './components/ContactWindow';
import SpeedWatchWindow from './components/SpeedWatchWindow';
import './App.css';

function App() {
  const [activeWindows, setActiveWindows] = useState([]);

  const openWindow = (windowId) => {
    if (!activeWindows.includes(windowId)) {
      setActiveWindows(prev => [...prev, windowId]);
    }
  };

  const closeWindow = (windowId) => {
    setActiveWindows(prev => prev.filter(id => id !== windowId));
  };

  const renderWindow = (windowId) => {
    const props = { onClose: () => closeWindow(windowId) };
    
    switch (windowId) {
      case 'about':
        return <AboutWindow key="about" {...props} />;
      case 'projects':
        return <ProjectsWindow key="projects" {...props} />;
      case 'experience':
        return <ExperienceWindow key="experience" {...props} />;
      case 'skills':
        return <SkillsWindow key="skills" {...props} />;
      case 'contact':
        return <ContactWindow key="contact" {...props} />;
      case 'speedwatch':
        return <SpeedWatchWindow key="speedwatch" {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Desktop openWindow={openWindow} />
      {activeWindows.map(renderWindow)}
    </div>
  );
}

export default App;