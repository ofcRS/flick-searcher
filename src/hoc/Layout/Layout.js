import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';

import * as actions from '../../store/actions/index';

const StyledLayout = styled.div`
  & input {
    display: block;
    box-sizing: border-box;
    width: 280px;
    height: 30px;
    padding: 0;
    margin: 20px auto;
    outline: none;
  }

  @media (min-width: 768px) {
    & input {
        width: 700px;
    }
  }
`;


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
            <StyledLayout>
                <input value={this.state.value} onChange={this.changeHandler}/>
                <main>
                    {this.props.children}
                </main>
            </StyledLayout>
        );
    }
}

const mapStateToProps = state => {
    return {
        query: state.search.currentQuery,
        loadable: state.search.loadable,
        currentPage: state.search.currentPage
    }
};

const mapActionsToProps = dispatch => {
    return {
        onPageLoad: () => dispatch(actions.initMovies()),
        onQueryChange: query => dispatch(actions.search(query)),
        onPageScroll: (query, page) => dispatch(actions.autoLoading(query, page))
    };
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Layout));
