import bookReducer from "../../../src/redux/reducers/bookReducer";
import * as actions from "../../../src/redux/actions/bookActions";

describe("bookReducer", () => {
  it("should return books from LOAD_BOOKS_SUCCESS action", () => {
    // arrange
    const initialState = [
      { id: 1, testamentId: 1, abbr: "Gen", name: "Genesis" },
      { id: 2, testamentId: 1, abbr: "Exo", name: "Exodus" },
      { id: 3, testamentId: 1, abbr: "Lev", name: "Leviticus" },
      { id: 4, testamentId: 1, abbr: "Num", name: "Numbers" },
      { id: 5, testamentId: 1, abbr: "Deu", name: "Deuteronomy" }
    ];
    const books = [
      { id: 62, testamentId: 2, abbr: "1Jo", name: "1 John" },
      { id: 63, testamentId: 2, abbr: "2Jo", name: "2 John" },
      { id: 64, testamentId: 2, abbr: "3Jo", name: "3 John" },
      { id: 65, testamentId: 2, abbr: "Jud", name: "Jude" },
      { id: 66, testamentId: 2, abbr: "Rev", name: "Revelation" }
    ];
    const action = actions.loadBooksSuccess(books);

    // act
    const updatedState = bookReducer(initialState, action);

    // assert
    expect(updatedState).toEqual(books);
  });
});
