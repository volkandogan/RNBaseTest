import ActionTypes from "../actionTypes";

const briefBegin = () => {
    return { type: ActionTypes.brief.GET_BRIEF_BEGIN}
}

const briefSuccess = (val) => {
    return {
        type: ActionTypes.brief.GET_BRIEF_SUCCESS,
        payload: val
    }
}

const briefFail = (val) => {
    return {
        type: ActionTypes.brief.GET_BRIEF_FAIL,
        payload: val
    }
}

const briefActions = {
    briefBegin,
    briefSuccess,
    briefFail
}

export default briefActions;