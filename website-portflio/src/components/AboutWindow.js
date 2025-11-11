import React from 'react';

const AboutWindow = ({ onClose }) => (
  <Window title="About Me" onClose={onClose} width={400}>
    <h2>Hello, I'm [Your Name]</h2>
    <p>Welcome to my retro-styled portfolio! I'm a passionate developer who loves creating innovative solutions and exploring new technologies.</p>
    <p>I specialize in full-stack development and have a particular interest in creating user-friendly applications that make a real difference.</p>
    <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on creative side projects.</p>
  </Window>
);

export default AboutWindow;