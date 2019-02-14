import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favoritesList: []
};

const reducer = (state = initialState, action) => {
    switch (action.types) {
        case (actionTypes.ADD_TO_FAVORITES):
            return {
                ...state,
                favoritesList: state.favoritesList.push(action.flick)
            };
        default:
            return state
    }
};

export default reducer;
