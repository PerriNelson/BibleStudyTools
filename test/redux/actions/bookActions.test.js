import * as types from "../../../src/redux/actions/actionTypes";
import * as bookActions from "../../../src/redux/actions/bookActions";
import { books } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Book Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Books thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_BOOKS_SUCCESS when loading books succeeds", () => {
      // arrange
      fetchMock.mock("*", {
        body: books,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_BOOKS_SUCCESS, books }
      ];

      const store = mockStore({ books: [] });

      // act
      return (
        store
          .dispatch(bookActions.loadBooks())
          // assert
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          })
      );
    });
    it("should throw appropriate error when loading books fails", () => {
      // arrange
      fetchMock.mock("*", {
        status: 500
      });

      const store = mockStore({ books: [] });

      // act
      return (
        store
          .dispatch(bookActions.loadBooks())
          // assert
          .catch(error => {
            expect(error.message).toEqual("Network response was not ok.");
          })
      );
    });
    it("should create BEGIN_API_CALL and API_CALL_ERROR when loading books fails", () => {
      // arrange
      fetchMock.mock("*", {
        status: 500
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.API_CALL_ERROR }
      ];

      const store = mockStore({ books: [] });
      return store.dispatch(bookActions.loadBooks()).catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("loadBooksSuccess", () => {
  it("should create a LOAD_BOOKS_SUCCESS action", () => {
    // arrange
    const expectedAction = { type: types.LOAD_BOOKS_SUCCESS, books };

    // act
    const action = bookActions.loadBooksSuccess(books);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
