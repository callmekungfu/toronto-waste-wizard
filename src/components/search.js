import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Search extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Type something here..." />
                <button type="submit"><FontAwesomeIcon icon="search" /></button>
            </form>
        )
    }
}

export default Search;