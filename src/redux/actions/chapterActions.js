import * as types from "./actionTypes";
import * as chapterApi from "../../api/chapterApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadChaptersSuccess(bookId, chapters) {
  return { type: types.LOAD_CHAPTERS_SUCCESS, bookId, chapters };
}

export function loadChapters(bookId) {
  return async dispatch => {
    try {
      dispatch(beginApiCall());
      const chapters = await chapterApi.getChapters();
      dispatch(
        loadChaptersSuccess(
          bookId,
          chapters.filter(chapter => chapter.bookId == bookId)
        )
      );
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}
