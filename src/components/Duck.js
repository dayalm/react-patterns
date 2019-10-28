import React from 'react';

const Duck = ({ pos, name }) => {
  return (
    <div>
      <h1>Duck - {name}</h1>
      <div>
        Mouse is at {pos.x},{pos.y}
      </div>
    </div>
  );
};

Duck.defaultProps = {
  name: 'Donald'
};

export { Duck };
