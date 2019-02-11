import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentResponse: []
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.SEARCH_SUCCESS):
            return {
                ...state,
                currentResponse: action.data
            };
        default:
            return state
    }
};

export default search;
