import React from 'react';
import Window from './Window';

const SkillsWindow = ({ onClose }) => (
  <Window title="Programming Skills" onClose={onClose} width={400}>
    <h2>Technical Skills</h2>
    
    <p><strong>Languages:</strong></p>
    <div className="skills-grid">
      <div className="skill-badge">JavaScript</div>
      <div className="skill-badge">Python</div>
      <div className="skill-badge">TypeScript</div>
      <div className="skill-badge">Java</div>
      <div className="skill-badge">C++</div>
      <div className="skill-badge">SQL</div>
    </div>
    
    <p style={{ marginTop: '15px' }}><strong>Frameworks & Tools:</strong></p>
    <div className="skills-grid">
      <div className="skill-badge">React</div>
      <div className="skill-badge">Node.js</div>
      <div className="skill-badge">Express</div>
      <div className="skill-badge">Django</div>
      <div className="skill-badge">MongoDB</div>
      <div className="skill-badge">PostgreSQL</div>
      <div className="skill-badge">Docker</div>
      <div className="skill-badge">Git</div>
    </div>
  </Window>
);

export default SkillsWindow;