import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
        display: block;
        width: 100%;
        height: 50px;
        background: inherit;
        border: 2px solid #0277bd;
        color: #0277bd;
        
        transition: background-color 0.3s;
        
        :hover {
            color: white;
            background-color: #0277bd;
        }
        
        :active {
            background-color: #004874;
        }
`;

const FavoriteButton = props => {
  return (
      <StyledButton onClick={() => props.clicked(props.isFavorite)}>
          {props.isFavorite ? "REMOVE FROM FAVORITES" : "ADD TO FAVORITES"}
      </StyledButton>
  )
};

export default FavoriteButton;
