import React from 'react';
import DesktopIcon from './DesktopIcon';
import Taskbar from './Taskbar';
import './Desktop.css';

const Desktop = ({ openWindow }) => {
  const icons = [
    { id: 'about', label: 'About Me', icon: '👤', color: '#c0c0c0' },
    { id: 'projects', label: 'My Projects', icon: '📁', color: '#ffff00' },
    { id: 'experience', label: 'Experience', icon: '💼', color: '#808080' },
    { id: 'skills', label: 'Skills', icon: '⚙️', color: '#00ff00' },
    { id: 'contact', label: 'Contact', icon: '📧', color: '#0080ff' },
    { id: 'github', label: 'GitHub', icon: 'GH', color: '#000', isExternal: true, url: 'https://github.com' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'in', color: '#0077b5', isExternal: true, url: 'https://linkedin.com' },
    { id: 'speedwatch', label: 'SpeedWatch Ontario', icon: '🚗', color: '#ff0000' }
  ];

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {icons.map(icon => (
          <DesktopIcon
            key={icon.id}
            {...icon}
            onClick={icon.isExternal ? () => window.open(icon.url, '_blank') : () => openWindow(icon.id)}
          />
        ))}
      </div>
      <Taskbar />
    </div>
  );
};

export default Desktop;