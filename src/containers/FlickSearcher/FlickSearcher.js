import React, {Component} from 'react';
import {connect} from 'react-redux';

import Cards from '../../components/Cards/Cards';
import * as actions from '../../store/actions/index';

import classes from './FlickSearcher.css'

class FlickSearcher extends Component {
    render() {
        return (
            <div className={classes.FlickSearcher}>
                <Cards
                    items={this.props.movies}
                    clicked={this.props.onFlickChoice}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.search.currentResponse
    }
};

const mapActionsToProps = dispatch => {
    return {
        onFlickChoice: (id) => dispatch(actions.initFlick(id))
    }
};

export default connect(mapStateToProps, mapActionsToProps)(FlickSearcher);
