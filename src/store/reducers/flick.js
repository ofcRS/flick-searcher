import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    flickData: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionsTypes.FETCH_FLICK):
            return {
                ...state,
                loading: true
            };
        case(actionsTypes.FETCH_FLICK_SUCCESS):
            return {
                ...state,
                flickData: action.data,
                loading: false
            };
        case(actionsTypes.FETCH_FLICK_FAIL):
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
