import React, {Component} from 'react';
import {connect} from 'react-redux';

import Cards from '../../components/Cards/Cards';

class Favorites extends Component {
    render() {
        console.log(this.props.movies)
        return <Cards items={this.props.movies} />
    }
}

const mapStateToProps = state => {
  return {
      movies: state.favorites.favoritesList
  }
};

export default connect(mapStateToProps)(Favorites);
