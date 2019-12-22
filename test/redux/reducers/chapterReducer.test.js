import chapterReducer from "../../../src/redux/reducers/chapterReducer";
import * as actions from "../../../src/redux/actions/chapterActions";
import { chapters } from "../../../tools/mockData";

describe("chapterReducer", () => {
  it("should return chapters from LOAD_CHAPTERS_SUCCESS action", () => {
    // arrange
    const bookId = "2";
    const _chapters = chapters.filter(chapter => chapter.bookId == 2);

    const initialState = {
      1: chapters.filter(chapter => chapter.bookId == 1)
    };

    const expectedState = {
      1: chapters.filter(chapter => chapter.bookId == 1),
      2: _chapters
    };

    const action = actions.loadChaptersSuccess(bookId, _chapters);

    // act
    const updatedState = chapterReducer(initialState, action);

    // assert
    expect(updatedState).toEqual(expectedState);
  });
});
