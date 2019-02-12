import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentQuery: null,
    currentResponse: [],
    currentPage: null,
    totalPages: null,
    loadable: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.SEARCH_SUCCESS):
            return {
                ...state,
                currentQuery: action.query,
                currentResponse: action.data.results,
                currentPage: action.data.page,
                totalPages: action.data.total_pages,
                loadable: action.data.total_pages !== action.data.page
            };
        case(actionTypes.AUTO_LOADING_SUCCESS):
            return {
                ...state,
                currentResponse: state.currentResponse.concat(action.data.results),
                currentPage: action.data.page,
                loadable: action.data.total_pages !== action.data.page
            };
        case(actionTypes.INIT_MOVIES_SUCCESS):
            return {
                ...state,
                currentResponse: action.data.results
            };
        default:
            return state
    }
};

export default reducer;
