import React, {Component} from 'react';
import {connect} from 'react-redux';

import Cards from '../../components/Cards/Cards';

// import classes from './FlickSearcher.css'

class FlickSearcher extends Component {
    render() {
        return (
            <Cards items={this.props.movies}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.currentResponse
    }
};

export default connect(mapStateToProps)(FlickSearcher);
