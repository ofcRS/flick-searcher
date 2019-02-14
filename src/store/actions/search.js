import axios from 'axios';

import * as actionTypes from './actionTypes';

export const initMovies = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.INIT_MOVIES
        });
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=67885b911e84060b5f3c824b510315df`)
            .then(res => {
                dispatch({
                    type: actionTypes.INIT_MOVIES_SUCCESS,
                    data: res.data
                })
            })
            .catch(() => {
                dispatch({
                    type: actionTypes.INIT_MOVIES_FAIL
                })
            })
    }
};

export const search = query => {
    return dispatch => {
        dispatch({
            type: actionTypes.SEARCH
        });
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=67885b911e84060b5f3c824b510315df&query=${query}`)
            .then(res => {
                console.log(res);
                dispatch({
                    type: actionTypes.SEARCH_SUCCESS,
                    query: query,
                    data: res.data
                })
            })
            .catch(() => {
                dispatch({
                    type: actionTypes.SEARCH_FAIL
                })
            })
    }
};

export const autoLoading = (query, page) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTO_LOADING
        });
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=67885b911e84060b5f3c824b510315df&query=${query}&page=${page}`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: actionTypes.AUTO_LOADING_SUCCESS,
                    data: res.data
                })
            })
            .catch(() => {
                dispatch({
                    type: actionTypes.AUTO_LOADING_FAIL
                })
            })
    }
};
