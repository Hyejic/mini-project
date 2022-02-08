import topReducer from "./topReducer";
import newReducer from "./newReducer";
import askReducer from "./askReducer";
import showReducer from "./showReducer";
import dailyReducer from "./dailyReducer";
import userInfoReducer from "./userInfoReducer";
import submissionReducer from "./submissionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ topReducer, newReducer, askReducer, showReducer, dailyReducer, userInfoReducer, submissionReducer });

export default rootReducer;