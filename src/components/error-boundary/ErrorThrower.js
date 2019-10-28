import React from 'react';

const ErrorThrower = ({ err }) => {
  if (err) {
    console.log('throwing error..');
    throw new Error('oops');
  }
  return (
    <div>
      <h1>Error Thrower</h1>
    </div>
  );
};

ErrorThrower.defaultProps = {
  err: false
};

export { ErrorThrower };
