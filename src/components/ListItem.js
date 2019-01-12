import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = props => (
    <tr>
        <td>
            <button className={`star-btn ${((props.favorite) ? 'favorite' : '')}`} onClick={() => props.onStar(props.index)}>
                <FontAwesomeIcon icon="star" />
            </button>
        </td>
        <td>
            {props.title}
        </td>
        <td dangerouslySetInnerHTML={{ __html: props.body }}></td>
    </tr>
);

export default ListItem;
