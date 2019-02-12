import React from 'react';

import Card from './Card/Card';

import classes from './Cards.css';

const Cards = props => {
    return (
        <div className={classes.Cards}>
            {
                props.items.map(item => {
                    return <Card
                        key={item.id}
                        title={item.title}
                        image={item.poster_path}
                        overview={item.overview}
                        clicked={() => props.clicked(item.id)}
                    />
                })
            }
        </div>
    )
};

export default Cards;
