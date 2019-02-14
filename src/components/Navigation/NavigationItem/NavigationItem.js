import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const StyledNavigationItem = styled.li.attrs({
    activeClassName: 'active'
})`
  display: inline-block;
  text-align: center;
  width: 33%; 
  
  a {
    display: block;
    background-color: #58a5f0;
    padding: 15px 5px;
    text-decoration: none;
    color: #ffffff;
    
    :hover {
      background-color: #0277bd;
    }
  }
  
  a.active {
    background-color: #004c8c;
    cursor: default;
  }
`;

const NavigationItem = props => {
    return (
        <StyledNavigationItem>
            <NavLink
                to={props.link}
                exact={props.exact}>{props.children}</NavLink>
        </StyledNavigationItem>
    );
};

export default NavigationItem;
