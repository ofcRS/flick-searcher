import React from 'react';
import styled from 'styled-components';

import Card from './Card/Card';

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Cards = props => {
    return (
        <StyledCards>
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
        </StyledCards>
    )
};

export default Cards;
