import { call, put, takeLatest } from "redux-saga/effects";
import ActionTypes from "../actionTypes";
import Actions from "../actions";
import axios from 'axios';

async function fetchBrief() {
    const response = axios.get('/api/data')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw error.response
        })
    return response
}

function* handleBrief(action) {
    try {
        const brief = yield call(fetchBrief, action)
        yield put(Actions.briefActions.briefSuccess(brief))
    } catch (e) {
        yield put(Actions.briefActions.briefFail(e))
    }
}

export function* watchBrief() {
    yield takeLatest(ActionTypes.brief.GET_BRIEF_BEGIN, handleBrief)
}