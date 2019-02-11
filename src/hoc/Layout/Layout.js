import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/search';

import classes from './Layout.css';

class Layout extends Component {
    state = {
        value: ''
    };

    componentDidMount() {
        this.props.onPageLoad();
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === document.documentElement.scrollHeight - document.documentElement.clientHeight && this.props.loadable) {
                this.props.onPageScroll(this.props.query, this.props.currentPage + 1)
            }
        })
    }

    changeHandler = event => {
        this.setState({
            value: event.target.value
        });
        if (event.target.value) {
            this.props.onQueryChange(event.target.value)
        }
    };

    render() {
        return (
            <div className={classes.Layout}>
                <input value={this.state.value} onChange={this.changeHandler}/>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        query: state.currentQuery,
        loadable: state.loadable,
        currentPage: state.currentPage
    }
};

const mapActionsToProps = dispatch => {
    return {
        onPageLoad: () => dispatch(actions.initMovies()),
        onQueryChange: query => dispatch(actions.search(query)),
        onPageScroll: (query, page) => dispatch(actions.autoLoading(query, page))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Layout);
