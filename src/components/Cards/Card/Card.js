import React from 'react';

import classes from './Card.css';

const Card = props => {
    return <div className={classes.Card}>
        {props.title}
        <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt={props.title} width="200px"/>
    </div>
};

export default Card;
