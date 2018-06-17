import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import RepoBox from './RepoBox';

const RepoList = ({ repos }) => (
  <div className="repos-container">
    {
      repos.length > 0 ? 
      <div className="repos-list">
        { 
          repos.map(repo => <RepoBox key={repo.id} {...repo} />)
        }
      </div>
      :
      <span className="container-msg">No repos</span>
    }
  </div>
)

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      link: urlPropType.isRequired
    })
  ).isRequired
}

export default RepoList
