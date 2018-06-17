import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import RepoList from './RepoList';

const Container = ({ loading, repos }) => (
  <div>
    {
    loading ? 
      <div className="container-msg">
        Loading...
      </div>
    :
      <RepoList repos={repos}/>
  }
  </div>
)

Container.propTypes = {
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      link: urlPropType.isRequired
    })
  ).isRequired
}

export default Container
