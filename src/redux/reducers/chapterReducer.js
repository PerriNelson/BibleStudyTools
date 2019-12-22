import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function chapterReducer(state = initialState.chapters, action) {
  switch (action.type) {
    case types.LOAD_CHAPTERS_SUCCESS:
      return {
        [action.bookId]: action.chapters,
        ...state
      };
    default:
      return state;
  }
}
