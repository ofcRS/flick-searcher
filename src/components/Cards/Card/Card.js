import React from 'react';

import classes from './Card.css';

const Card = props => {
    return <div className={classes.Card}>
        <img src={props.image ? `https://image.tmdb.org/t/p/w500/${props.image}` : 'https://cdn.browshot.com/static/images/not-found.png'} alt={props.title}/>
        <p>{props.title}</p>
    </div>
};

export default Card;
