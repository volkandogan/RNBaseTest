import ActionTypes from "../actionTypes";

const initialState = {
    data: [],
    loading: false,
    error: '',
}

const briefReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.brief.GET_BRIEF_BEGIN:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ActionTypes.brief.GET_BRIEF_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }
        case ActionTypes.brief.GET_BRIEF_FAIL:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: true,
            }
        default:
            return state;
    }
}

export default briefReducer;