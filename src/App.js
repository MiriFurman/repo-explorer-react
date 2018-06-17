import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from 'components/Header';
import Container from 'components/Container';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: false
    };
  }

  searchRepos = userName => {
    const self = this;
    self.setState({loading: true})
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        if (response.ok) {
           return response.json();
        } else {
          return [];
        }
      })
      .then(myObj => {
        self.sortByStars(myObj);
        const repos = myObj
          .slice(0,9)
          .map(repo => Object.assign({}, {id: repo.id}, {name: repo.name}, {stargazers_count: repo.stargazers_count}, {link: repo.html_url}));
        self.setState({repos, loading: false});
      })
      .catch(error => console.log(error.massage));
  }

  orderRepos = sortBy => {
    let repos = this.state.repos;
    if (sortBy === 'stars') {
      this.sortByStars(repos);
    } else {
      this.sortByName(repos);
    }
    this.setState({repos});
  }

  sortByStars = array => {
    array.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  sortByName = array => {
    array.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    return (
      <div className="app-main">
        <h1>Repos Explorer</h1>
        <Header searchRepos={userName => this.searchRepos(userName)} orderRepos={sortBy => this.orderRepos(sortBy)} />
        <Container repos={this.state.repos} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
