import * as actionTypes from './actionTypes';

export const addToFavorites = flickData => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        flick: flickData
    }
};
