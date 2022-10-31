import * as briefSaga from './briefSaga';
import {all, fork} from "redux-saga/effects";


export function* rootSaga() {
    yield all([
        fork(briefSaga.watchBrief),
    ]);
}