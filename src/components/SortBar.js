import React from 'react';
import PropTypes from 'prop-types';

const SortBar = ({ onChange }) => {
  let input;

  return (
    <div>
      sort repositories by &nbsp;
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="stars">stargazers count</option>
        <option value="name">name</option>
      </select>
    </div>
  )
}

SortBar.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SortBar
