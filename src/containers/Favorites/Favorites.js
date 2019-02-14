import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Cards from '../../components/Cards/Cards';
import * as actions from "../../store/actions";

const StyledFavorites = styled.div`
  @media(min-width: 768px) {
    margin: 0 auto;
    width: 768px;
  }
  @media(min-width: 1200px) {
    margin: 0 auto;
    width: 1200px;
  }
`;

class Favorites extends Component {
    render() {
        return (
            <StyledFavorites>
                <Cards
                    items={this.props.movies}
                    clicked={this.props.onFlickChoice}/>
            </StyledFavorites>)
    }
}

const mapStateToProps = state => {
    return {
        movies: state.favorites.favoritesList
    }
};

const mapActionsToProps = dispatch => {
    return {
        onFlickChoice: (id) => dispatch(actions.fetchFlick(id))
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Favorites);
