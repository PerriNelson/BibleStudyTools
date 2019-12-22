import { combineReducers } from "redux";
import books from "./bookReducer";
import chapters from "./chapterReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  books,
  chapters,
  apiCallsInProgress
});

export default rootReducer;
