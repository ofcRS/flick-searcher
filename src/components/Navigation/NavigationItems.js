import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem/NavigationItem';

const StyledNavigationItems = styled.nav`
  ul {
    list-style: none;
    width: 320px;
    margin: 0 auto;
    padding: 0;
  }
  
  @media(min-width: 768px) {
    ul {
      width: 768px;
    }
  }
`;

const NavigationItems = props => {
    return (
        <StyledNavigationItems>
            <ul>
                <NavigationItem link="/" exact>Searcher</NavigationItem>
                <NavigationItem link="/favorites">Favorites</NavigationItem>
            </ul>
        </StyledNavigationItems>
    )
};

export default NavigationItems;
