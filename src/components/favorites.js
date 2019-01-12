import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const Entities = require('html-entities').AllHtmlEntities;

const decoder = new Entities();

class Favorites extends Component {
    render() {
        const listItems = this.props.favorites.map((entry, i) => 
        <ListItem key={i.toString()} title={entry.title} body={decoder.decode(entry.body) } favorite index={i} onStar={this.props.onStaring} />
    );
        return (
            <div className="favorites">
                <div className="container">
                    <div className="favorites-header">
                        <h2>Favorites</h2>
                    </div>
                    <table className="favorites-table">
                        <tbody>
                            {listItems}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Favorites;