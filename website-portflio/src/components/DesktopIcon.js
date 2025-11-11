import React from 'react';
import './DesktopIcon.css';

const DesktopIcon = ({ id, label, icon, color, onClick }) => {
  return (
    <div className="desktop-icon" onClick={onClick} onDoubleClick={onClick}>
      <div 
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          backgroundColor: color,
          border: '1px solid #000',
          marginBottom: '5px'
        }}
      >
        {icon}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default DesktopIcon;