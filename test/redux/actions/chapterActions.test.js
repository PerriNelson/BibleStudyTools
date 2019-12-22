import * as types from "../../../src/redux/actions/actionTypes";
import * as chapterActions from "../../../src/redux/actions/chapterActions";
import { chapters } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Chapter Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Chapters thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_CHAPTERS_SUCCESS when loading chapters succeeds", () => {
      // arrange
      fetchMock.mock("*", {
        body: chapters,
        headers: { "content-type": "application/json" }
      });
      const bookId = "2";
      const expectedChapters = chapters.filter(
        chapter => chapter.bookId == bookId
      );

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        {
          type: types.LOAD_CHAPTERS_SUCCESS,
          bookId,
          chapters: expectedChapters
        }
      ];

      const store = mockStore({ chapters: {} });

      // act
      return (
        store
          .dispatch(chapterActions.loadChapters(bookId))
          // assert
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          })
      );
    });
    it("should throw appropriate error when loading chapters fails", () => {
      // arrange
      fetchMock.mock("*", {
        status: 500
      });

      const store = mockStore({ chapters: {} });
      const bookId = 67;
      // act
      return (
        store
          .dispatch(chapterActions.loadChapters(bookId))
          // assert
          .catch(error => {
            expect(error.message).toEqual("Network response was not ok.");
          })
      );
    });
    it("should create BEGIN_API_CALL and API_CALL_ERROR when loading chapters fails", () => {
      // arrange
      fetchMock.mock("*", {
        status: 500
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.API_CALL_ERROR }
      ];

      const bookId = 67;
      const store = mockStore({ chapters: {} });
      return store.dispatch(chapterActions.loadChapters(bookId)).catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("loadChaptersSuccess", () => {
  it("should create a LOAD_CHAPTERS_SUCCESS action", () => {
    // arrange
    const bookId = "1";
    const _chapters = chapters.filter(chapter => chapter.bookId == bookId);

    const expectedAction = {
      type: types.LOAD_CHAPTERS_SUCCESS,
      bookId,
      chapters: _chapters
    };

    // act
    const action = chapterActions.loadChaptersSuccess(bookId, _chapters);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
