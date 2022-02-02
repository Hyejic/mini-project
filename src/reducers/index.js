import topReducer from "./topReducer";
import newReducer from "./newReducer";
import askReducer from "./askReducer";
import showReducer from "./showReducer";
import dailyReducer from "./dailyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ topReducer, newReducer, askReducer, showReducer, dailyReducer });

export default rootReducer;