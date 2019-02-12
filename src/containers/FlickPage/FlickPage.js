import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import classes from './FlickPage.css'

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
            <div className={classes.FlickPage}>
                {flickInfo}
            </div>
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
