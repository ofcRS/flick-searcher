import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favoritesList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_TO_FAVORITES):
            return {
                ...state,
                favoritesList: state.favoritesList.concat(action.flick)
            };
        case(actionTypes.REMOVE_FAVORITES):
            return {
                ...state,
                favoritesList: [...state.favoritesList.slice(0, action.flickIndex), ...state.favoritesList.slice(parseInt(action.flickIndex) + 1)]
            };
        default:
            return state
    }
};

export default reducer;
