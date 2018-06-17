import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SortBar from './SortBar';

const Header = ({ searchRepos, orderRepos }) => (
  <div className ="header">
    <SearchBar onSubmit={(userName => searchRepos(userName))} />
    <SortBar onChange={(orderBy => orderRepos(orderBy))} />
  </div>
)

Header.propTypes = {
  searchRepos: PropTypes.func.isRequired,
  orderRepos: PropTypes.func.isRequired
}

export default Header
