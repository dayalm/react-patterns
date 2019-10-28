import React from 'react';

const Cat = ({ pos, name }) => {
  return (
    <div>
      <h1>Cat - {name}</h1>
      <div>
        Mouse is at {pos.x},{pos.y}
      </div>
    </div>
  );
};

Cat.defaultProps = {
  name: 'Tom'
};

export { Cat };
