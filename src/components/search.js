import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.onSearch(this.state.query);
  }

  handleInput (evt) {
    if (evt.target.value.length === 0) {
      this.props.onSearch('no results pleas');
    }
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.query} placeholder="Type something here..." onChange={this.handleInput} />
        <button type="submit"><FontAwesomeIcon icon="search" flip="horizontal"/></button>
      </form>
    )
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
}

export default Search;