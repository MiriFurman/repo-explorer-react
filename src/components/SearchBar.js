import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      onSubmit(input.value)
      input.value=''
    }}>
      Show repos for user <input ref={i => input = i}/>
      <button type="submit">Go</button>
    </form>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar
