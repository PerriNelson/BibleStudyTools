import React from "react";
import { shallow, mount } from "enzyme";
import { BookPage as BookPageInternal } from "../../../src/components/books/BookPage";
import Spinner from "../../../src/components/common/Spinner";
import ChapterList from "../../../src/components/books/ChapterList";

describe("<BookPage />", () => {
  it("should render Spinner when loading", () => {
    const wrapper = shallow(
      <BookPageInternal
        books={[]}
        chapters={[]}
        history={{}}
        match={{ params: { bookId: 1 } }}
        loading={true}
        loadBooks={() => {}}
        loadChapters={() => {}}
      />
    );

    expect(wrapper.find(Spinner).length).toBe(1);
    expect(wrapper.find(ChapterList).length).toBe(0);
  });

  it("should render ChapterList when not loading", () => {
    const wrapper = shallow(
      <BookPageInternal
        books={[{ id: 1, name: "Genesis", abbr: "Gen" }]}
        chapters={[]}
        history={{}}
        match={{ params: { bookId: 1 } }}
        loading={false}
        loadBooks={() => {}}
        loadChapters={() => {}}
      />
    );

    expect(wrapper.find(Spinner).length).toBe(0);
    expect(wrapper.find(ChapterList).length).toBe(1);
  });

  it("should render Book Name when not loaded", () => {
    const wrapper = mount(
      <BookPageInternal
        books={[]}
        chapters={[]}
        history={{}}
        match={{ params: { bookId: 1 } }}
        loading={true}
        loadBooks={() => Promise.resolve([])}
        loadChapters={() => Promise.resolve([])}
      />
    );
    expect(wrapper.find(Spinner).length).toBe(1);
    expect(wrapper.find(ChapterList).length).toBe(0);

    const newWrapper = wrapper.setProps({
      books: [
        { id: 1, name: "Genesis", abbr: "Gen" },
        { id: 2, name: "Exodus", abbr: "Exo" }
      ],
      loading: false
    });

    expect(newWrapper.find("h2").length).toBe(1);
    expect(newWrapper.find("h2").text()).toEqual("Genesis");
    expect(newWrapper.find(Spinner).length).toBe(0);
    expect(newWrapper.find(ChapterList).length).toBe(1);
  });
});
