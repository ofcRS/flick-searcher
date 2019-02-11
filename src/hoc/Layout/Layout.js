import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/search';

import classes from './Layout.css';

class Layout extends Component {
    state = {
        value: ''
    };

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

const mapActionsToProps = dispatch => {
    return {
        onQueryChange: query => dispatch(actions.search(query))
    };
};

export default connect(null, mapActionsToProps)(Layout);
