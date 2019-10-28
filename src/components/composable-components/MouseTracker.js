import React, { useState } from 'react';
const MouseTracker = props => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = e => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        border: '1px solid #ff0000',
        width: '90%',
        height: '300px',
        margin: '10px auto',
        boxSizing: 'border-box'
      }}
    >
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { pos: position });
      })}
    </div>
  );
};

export { MouseTracker };
