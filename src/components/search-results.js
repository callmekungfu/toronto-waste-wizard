import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const Entities = require('html-entities').AllHtmlEntities;

const decoder = new Entities();

class SearchResults extends Component {
    
    render() {
        const listItems = this.props.results.map((entry, i) => 
            <ListItem key={i.toString()} title={entry.title} body={decoder.decode(entry.body)} index={i} onStar={this.props.onStaring} />
        );
        return (
            <div>
                <table>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

SearchResults.propTypes = {
    results: PropTypes.array,
}

export default SearchResults;