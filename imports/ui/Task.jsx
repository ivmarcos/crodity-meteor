import React from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
const Task = ({ task }) => (
  <li>{task.text}</li>
);

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};

export default Task;
