import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Search from './components/search'

import './App.css';

library.add(faSearch);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Toronto Waste Lookup</h1>
        </header>
        <Search />
        
      </div>
    );
  }
}

export default App;
