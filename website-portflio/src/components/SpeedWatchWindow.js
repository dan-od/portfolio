import React from 'react';
import Window from './Window';

const ContactWindow = ({ onClose }) => (
  <Window title="Contact Me" onClose={onClose} width={350}>
    <div className="window-content">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
      
      <div style={{ marginTop: '20px' }}>
        <p>📧 Email: your.email@example.com</p>
        <p>📱 Phone: (555) 123-4567</p>
        <p>📍 Location: Toronto, Ontario</p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://linkedin.com" className="link-button" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        <a href="https://github.com" className="link-button" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <a href="mailto:your.email@example.com" className="link-button">Send Email</a>
      </div>
    </div>
  </Window>
);

export default ContactWindow;