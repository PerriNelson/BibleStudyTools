import { createStore } from "redux";
import rootReducer from "../../src/redux/reducers";
import initialState from "../../src/redux/reducers/initialState";
import * as bookActions from "../../src/redux/actions/bookActions";
import * as chapterActions from "../../src/redux/actions/chapterActions";
import { books, chapters } from "../../tools/mockData";

it("should handle loading books", () => {
  // arrange
  const store = createStore(rootReducer, initialState);

  // act
  const action = bookActions.loadBooksSuccess(books);
  store.dispatch(action);

  // assert
  const newState = store.getState().books;
  expect(newState).toEqual(books);
});

it("should handle loading chapters", () => {
  // arrange
  const store = createStore(rootReducer, initialState);
  const bookId = "1";
  const _chapters = chapters.filter(chapter => chapter.bookId == bookId);
  const expectedState = {
    [bookId]: _chapters
  };

  // act
  const action = chapterActions.loadChaptersSuccess(bookId, _chapters);
  store.dispatch(action);

  // assert
  const newState = store.getState().chapters;
  expect(newState).toEqual(expectedState);
});
