import axios from 'axios';

import * as actionTypes from './actionTypes';

export const initFlick = id => {
    return dispatch => {
        dispatch({
            type: actionTypes.FETCH_FLICK
        });
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=67885b911e84060b5f3c824b510315df`)
            .then(res => {
                dispatch({
                    type: actionTypes.FETCH_FLICK_SUCCESS,
                    data: res.data
                })
            })
            .catch(() => {
                dispatch({
                    type: actionTypes.FETCH_FLICK_FAIL
                })
            })
    }
};
