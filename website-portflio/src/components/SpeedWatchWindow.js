import React from 'react';
import Window from './Window';

const SpeedWatchWindow = ({ onClose }) => (
  <Window title="SpeedWatch Ontario" onClose={onClose} width={500}>
    <h2>🚗 SpeedWatch Ontario</h2>
    <p>A real-time traffic monitoring application that raises awareness about speeding in Ontario after the removal of speed cameras.</p>
    
    <div className="project-card">
      <h3>About the Project</h3>
      <p>SpeedWatch Ontario is designed to promote road safety by providing real-time traffic data and speed monitoring information across Ontario.</p>
      <p><strong>Features:</strong></p>
      <p>• Real-time speed monitoring</p>
      <p>• Traffic incident tracking</p>
      <p>• Data visualization</p>
      <p>• Public awareness campaigns</p>
    </div>
    
    <div className="project-card">
      <h3>Technology Stack</h3>
      <p>Built with React, Node.js, and public traffic APIs to deliver accurate, up-to-date information about road conditions and speeding across the province.</p>
    </div>
    
    <div style={{ marginTop: '20px' }}>
      <a href="#" className="link-button">View Project</a>
      <a href="#" className="link-button">GitHub Repository</a>
      <a href="#" className="link-button">Live Demo</a>
    </div>
  </Window>
);

export default SpeedWatchWindow;