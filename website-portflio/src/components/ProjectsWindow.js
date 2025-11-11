import React from 'react';
import Window from './Window';

const ProjectsWindow = ({ onClose }) => (
  <Window title="My Projects" onClose={onClose} width={500}>
    <h2>Featured Projects</h2>
    
    <div className="project-card">
      <h3>🚗 SpeedWatch Ontario</h3>
      <p>A real-time traffic monitoring application that raises awareness about speeding in Ontario after the removal of speed cameras. Uses public traffic APIs to display live speed data and accident statistics.</p>
      <a href="#" className="link-button">View Project</a>
      <a href="#" className="link-button">GitHub</a>
    </div>
    
    <div className="project-card">
      <h3>📊 Data Visualization Dashboard</h3>
      <p>Interactive dashboard for visualizing complex datasets using D3.js and React. Features real-time updates and responsive design.</p>
      <a href="#" className="link-button">Live Demo</a>
      <a href="#" className="link-button">Source Code</a>
    </div>
    
    <div className="project-card">
      <h3>🤖 AI Chat Assistant</h3>
      <p>Intelligent chatbot using natural language processing to help users with technical questions and code debugging.</p>
      <a href="#" className="link-button">Try It Out</a>
    </div>
  </Window>
);

export default ProjectsWindow;