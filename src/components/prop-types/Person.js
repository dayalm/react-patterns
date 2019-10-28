import React from 'react';
import PropTypes from 'prop-types';

const Person = props => {
  console.log(props);
  return (
    <div>
      <h1>Person</h1>
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
      <div>Can Drive: {props.canDrive ? 'Yes' : 'No'}</div>
      <div>blah: {11}</div>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  canDrive: PropTypes.bool
};

export { Person };
