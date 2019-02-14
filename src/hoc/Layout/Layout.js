import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';

import NavigationItems from '../../components/Navigation/NavigationItems';

import * as actions from '../../store/actions/index';

const StyledLayout = styled.div`
  header {
    margin-bottom: 20px;
    padding: 0;
    width: 100%;
    background-color: #004c8c;
  }

  input {
    display: block;
    width: 100%;
    height: 50px;
    padding: 0 15px 0;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 25px;
    outline: none;
  }

  input {
    box-sizing: border-box;
  }

  main {
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    input {
      width: 768px;
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
                <header>
                    <input value={this.state.value} onChange={this.changeHandler}/>
                    <NavigationItems />
                </header>
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
