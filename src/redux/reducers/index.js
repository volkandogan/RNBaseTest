import { combineReducers } from "redux";
import briefReducer from "./briefReducer";

const reducers = combineReducers({
    brief: briefReducer
})

export default reducers;