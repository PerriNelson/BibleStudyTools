import * as types from "./actionTypes";
import * as bookApi from "../../api/bookApis";
import { apiCallError, beginApiCall } from "./apiStatusActions";

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function loadBooks() {
  return async dispatch => {
    try {
      dispatch(beginApiCall());
      const books = await bookApi.getBooks();
      dispatch(loadBooksSuccess(books));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}
