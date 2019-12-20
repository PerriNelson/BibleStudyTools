import { createStore } from "redux";
import rootReducer from "../../src/redux/reducers";
import initialState from "../../src/redux/reducers/initialState";
import * as bookActions from "../../src/redux/actions/bookActions";
import { books } from "../../tools/mockData";

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
