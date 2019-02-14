import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

import FavoriteButton from '../../components/FlickPage/FavoriteButton'
import Spinner from '../../components/UI/Spinner';

import * as actions from '../../store/actions/index';

const StyledFlickPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
   
    
    @media (min-width: 768px) {
        width: 768px;
    }
    
    @media (min-width: 1200px) {
        width: 1200px;
    }
`;

const StyledFlickImage = styled.div`
    width: 100%;
    order: 9;
    
    img {
        width: 100%;
    }
    
    @media(min-width: 768px) {
        width: 300px;
        margin-right: 10px;
        order: -1;
    }
    
    @media(min-width: 1200px) {
        width: 350px;
    }
`;

const StyledInfo = styled.div`
  h1 {
    font-size: 35px;
    margin: 0 0 5px;
  }

  .tagline {
    font-size: 20px;
    line-height: 31px;
    font-style: italic;
    color: #004c8c;
    margin-bottom: 5px;
  }

  .overview {
    margin: 0 0 8px;
    padding: 0;
    font-size: 16px;
  }
  
  @media(min-width: 768px) {
    width: 458px;
  }
  
  @media(min-width: 1200px) {
    width: 840px;
  }
`;

class FlickPage extends Component {
    favoriteClickHandler = flickIndex => {
        if (flickIndex) {
            this.props.onRemoveFromFavorites(flickIndex);
        }
        else {
            this.props.onAddToFavorites(this.props.flick);
        }
    };

    checkFavorite(flick, favorites) {
        for (let i in favorites) {
            if (favorites[i].id === flick.id) {
                return i;
            }
        }
        return false;
    }

    render() {
        const flick = this.props.flick;
        let flickInfo = <Spinner />;
        if (!this.props.loading && flick) {
            flickInfo = (
                <StyledFlickPage>
                    <StyledFlickImage>
                        <img alt={flick.title}
                             src={`https://image.tmdb.org/t/p/w500/${flick.poster_path}`}/>
                        <FavoriteButton
                            clicked={this.favoriteClickHandler}
                            isFavorite={this.checkFavorite(flick, this.props.favorites)} />
                    </StyledFlickImage>
                    <StyledInfo>
                        <h1>{flick.title}({flick.release_date.split('-')[0]})</h1>
                        <p className="tagline">{flick.tagline}</p>
                        <p className="overview">{flick.overview}</p>
                    </StyledInfo>
                </StyledFlickPage>
            )
        } else if (!this.props.loading && !flick) {
            flickInfo = <Redirect to="/"/>
        }
        return (
            <>
                {flickInfo}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        flick: state.flick.flickData,
        loading: state.flick.loading,
        favorites: state.favorites.favoritesList
    }
};

const mapActionsToProps = dispatch => {
    return {
        onAddToFavorites: flickData => dispatch(actions.addToFavorites(flickData)),
        onRemoveFromFavorites: index => dispatch(actions.removeFavorites(index))
    }
};

export default connect(mapStateToProps, mapActionsToProps)(FlickPage);
