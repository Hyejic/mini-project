import topReducer from "./topReducer";
import newReducer from "./newReducer";
import askReducer from "./askReducer";
import showReducer from "./showReducer";
import dailyReducer from "./dailyReducer";
import userInfoReducer from "./userInfoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ topReducer, newReducer, askReducer, showReducer, dailyReducer, userInfoReducer });

export default rootReducer;