import React from 'react';
import Window from './Window';

const ExperienceWindow = ({ onClose }) => (
  <Window title="Experience" onClose={onClose} width={450}>
    <h2>Professional Experience</h2>
    
    <div className="project-card">
      <h3>Software Developer - Tech Company</h3>
      <p><strong>2022 - Present</strong></p>
      <p>• Developed and maintained web applications using React and Node.js</p>
      <p>• Collaborated with cross-functional teams to deliver high-quality software</p>
      <p>• Implemented CI/CD pipelines and improved deployment processes</p>
    </div>
    
    <div className="project-card">
      <h3>Junior Developer - Startup Inc.</h3>
      <p><strong>2020 - 2022</strong></p>
      <p>• Built RESTful APIs and microservices</p>
      <p>• Participated in code reviews and agile development practices</p>
      <p>• Contributed to open-source projects</p>
    </div>
  </Window>
);

export default ExperienceWindow;