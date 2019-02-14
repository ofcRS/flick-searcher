import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 10px;
    cursor: pointer;
    box-shadow: #303036 3px 3px 8px;
    
    :hover img{
        filter: blur(3px);
    }
    
    img {
        width: 320px;
        max-height: 420px;
        min-height: 420px;
    }
    
    p {
        margin: 0;
        padding-left: 6px;
        color: #293d3d;
    }
    
    a {
        text-decoration: none;
    }
    
    @media (min-width: 768px) {
        width: 240px;
        margin: 0 8px 10px;
    
        & img {
            width: 240px;
            min-height: 360px;
            max-height: 360px;
        }
    }
    
    @media (min-width: 1200px) {
        width: 200px;
        margin: 0 20px 20px;
    
        & img {
            width: 200px;
            min-height: 300px;
            max-height: 300px;
        }
    }
`;

const Card = props => {
    return (
        <StyledCard onClick={props.clicked}>
            <Link to={"/flick"}>
                <img
                    src={props.image ? `https://image.tmdb.org/t/p/w500/${props.image}` : 'https://cdn.browshot.com/static/images/not-found.png'}
                    alt={props.title}/>
                <p>{props.title}</p>
            </Link>
        </StyledCard>
    )

};

export default Card;
