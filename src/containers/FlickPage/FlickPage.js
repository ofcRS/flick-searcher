import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

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
    
    & img {
        width: 100%;
    }
    
    & .to-favorites {
        display: block;
        width: 100%;
        height: 50px;
        background: inherit;
        border: 2px solid #0277bd;
        color: #0277bd;
        
        :hover {
            color: white;
            background-color: #0277bd;
        }
        
        :active {
            background-color: #004874;
        }
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
    width: 840px;
    
    & h1 {
        font-size: 35px;
        margin: 0 0 5px;
    }
    
    & .tagline {
        font-size: 20px;
        line-height: 31px;
        font-style: italic;
        color: #004c8c;
        margin-bottom: 5px;
    }
    
    & .overview {
        margin: 0 0 8px;
        padding: 0;
        font-size: 16px;
    }
`;

class FlickPage extends Component {
    render() {
        const flick = this.props.flick;
        let flickInfo = <h3>LOADING...</h3>;
        if (!this.props.loading && flick) {
            flickInfo = (
                <StyledFlickPage>
                    <StyledFlickImage>
                        <img alt={flick.title}
                             src={`https://image.tmdb.org/t/p/w500/${flick.poster_path}`}/>
                        <button onClick={() => this.props.onAddToFavorites(flick)} className="to-favorites">ADD TO FAVORITES</button>
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
        loading: state.flick.loading
    }
};

const mapActionsToProps = dispatch => {
    return {
        onAddToFavorites: (flickData) => dispatch(actions.addToFavorites(flickData))
    }
};

export default connect(mapStateToProps, mapActionsToProps)(FlickPage);
