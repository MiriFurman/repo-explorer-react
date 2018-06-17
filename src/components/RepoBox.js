import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

const RepoBox = ({ name, stargazers_count, link }) => (
  <div className ="repo-box">
    <a href={link} target="_blank">{name}</a>
    <span>{stargazers_count} ⭐</span>
  </div>
)

RepoBox.propTypes = {
  name: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  link: urlPropType.isRequired
}

export default RepoBox
