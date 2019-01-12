import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Search from './components/search';
import SearchResults from './components/search-results'

import './App.css';
import Favorites from './components/favorites';

library.add([faSearch,faStar]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search_results: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStaring = this.handleStaring.bind(this);
  }

  componentDidMount() {
    axios.get('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=700')
    .then((res) => {
      let data = res.data;
      for ()
      this.setState({
        data: res.data,
      });
    });
  }

  handleStaring (index) {
    console.log(index);
    let temp = this.state.data
  }

  handleSearch(query) {
    query = query.replace(/\s/g, '').toLowerCase();
    const results = this.state.data.filter((element) => {
      return element.keywords.indexOf(query) !== -1;
    });
    this.setState({
      search_results: results
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Toronto Waste Lookup</h1>
        </header>
        <div className="container">
          <Search onSearch={this.handleSearch} />
          <SearchResults results={this.state.search_results} onStaring={this.handleStaring} />
        </div>
        <Favorites favorites={this.state.data} onStaring={this.handleStaring} />
      </div>
    );
  }
}

export default App;
