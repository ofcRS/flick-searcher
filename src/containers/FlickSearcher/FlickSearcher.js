import React, {Component} from 'react';

import Cards from '../../components/Cards/Cards';

// import classes from './FlickSearcher.css'

class FlickSearcher extends Component {
    state = {
        movies: [
            {
                title: "Fight Club",
                id: 550,
                image: "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
            },
            {
                title: "Mad Max: Fury Road",
                id: 76341,
                image: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
            },
            {
                title: "Mad Max: Fury Road",
                id: 76341,
                image: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
            },
            {
                title: "Mad Max: Fury Road",
                id: 76341,
                image: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
            },
            {
                title: "Mad Max: Fury Road",
                id: 76341,
                image: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
            },
            {
                title: "Mad Max: Fury Road",
                id: 76341,
                image: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
            },
            {
                title: "Mad Max: Fury Road",
                id: 76341,
                image: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
            }
        ]
    };

    render() {
        return (
            <Cards items={this.state.movies}/>
        )
    }
}

export default FlickSearcher;
