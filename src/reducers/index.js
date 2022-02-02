import topReducer from "./topReducer";
import newReducer from "./newReducer";
import askReducer from "./askReducer";
import showReducer from "./showReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ topReducer, newReducer, askReducer, showReducer });

export default rootReducer;