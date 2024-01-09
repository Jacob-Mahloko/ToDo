import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

const Tile = ({ title, description, dueDate, module }) => {
  
  const tileStyle = {
    backgroundColor: getBackgroundColor(module),
    borderColor: getBorderColor(module),
  };

  return (
    <div className="tile" style={tileStyle}>
      <h3>{module} : {title}</h3>
      <hr/>
      <p>{description}</p>
      <p>Due Date: {dueDate}</p>
    </div>
  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
};


const getBackgroundColor = (module) => {
  switch (module) {
    case 'Cos 702':
      return '#3498db';
    case 'Cos 701':
      return '#2ecc71';
    case 'Cos 700':
      return '#e74c3c';
    default:
      return '#f39c12';
  }
};


const getBorderColor = (module) => {
  switch (module) {
    case 'Cos 702':
      return '#2980b9';
    case 'Cos 701':
      return '#27ae60';
    case 'Cos 700':
      return '#c0392b';
    default:
      return '#d35400';
  }
};

export default Tile;
