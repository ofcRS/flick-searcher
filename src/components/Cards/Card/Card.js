import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Card.css';

const Card = props => {
    return (
        <div className={classes.Card} onClick={props.clicked}>
            <Link to={"/flick"}>
                <img
                    src={props.image ? `https://image.tmdb.org/t/p/w500/${props.image}` : 'https://cdn.browshot.com/static/images/not-found.png'}
                    alt={props.title}/>
                <p>{props.title}</p>
            </Link>
        </div>
    )

};

export default Card;
