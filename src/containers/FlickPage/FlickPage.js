import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

const StyledFlickPage = styled.div`
    width: 320px;
    margin: 0 auto;
    
    & img {
        width: 150px;
        margin-right: 8px;
    }
    
    & p {
        margin: 0;
        padding: 0;
    }
    
    @media (min-width: 768px) {
        width: 768px;
        
    
        & img {
            width: 300px;
            float: left;
        }
    }
    
    @media (min-width: 1200px) {
        width: 1200px;
    
        & img {
            width: 350px;
        }
    }
`;

class FlickPage extends Component {
    render() {
        let flickInfo = <h3>LOADING...</h3>;
        if (!this.props.loading && this.props.flick) {
            flickInfo = (
                <>
                    <h3>{this.props.flick.title}</h3>
                    <img alt={this.props.flick.title}
                         src={`https://image.tmdb.org/t/p/w500/${this.props.flick.poster_path}`}/>
                    <p>{this.props.flick.overview}</p>
                </>
            )
        } else if (!this.props.loading && !this.props.flick) {
            flickInfo = <Redirect to="/"/>
        }
        return (
            <StyledFlickPage>
                {flickInfo}
            </StyledFlickPage>
        )
    }
}

const mapStateToProps = state => {
    return {
        flick: state.flick.flickData,
        loading: state.flick.loading
    }
};

export default connect(mapStateToProps)(FlickPage);
