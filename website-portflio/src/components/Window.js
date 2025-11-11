import React, { useState } from 'react';
import './Window.css';

const Window = ({ title, children, onClose, initialPosition = { top: 50, left: 100 }, width = 400 }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('window-button')) return;
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setPosition({
      left: e.clientX - dragOffset.x,
      top: e.clientY - dragOffset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div 
      className="window active" 
      style={{ 
        top: `${position.top}px`, 
        left: `${position.left}px`, 
        width: `${width}px` 
      }}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <span>{title}</span>
        <div className="window-controls">
          <button className="window-button" onClick={onClose}>X</button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default Window;