import axios from 'axios';

import * as actionTypes from './actionTypes';

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
                    data: res.data.results
                })
            })
            .catch(() => {
                dispatch({
                    type: actionTypes.SEARCH_FAIL
                })
            })
    }
};
