import React, { useState, useEffect } from 'react';
import './Taskbar.css';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      setCurrentTime(`${displayHours}:${minutes} ${ampm}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar">
      <button className="start-button">Start</button>
      <div className="clock">{currentTime}</div>
    </div>
  );
};

export default Taskbar;