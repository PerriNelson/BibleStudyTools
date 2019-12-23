import React from "react";
import { shallow } from "enzyme";
import BookList from "../../../src/components/books/BookList";
import { Link } from "react-router-dom";

describe("<BookList />", () => {
  const books = [
    { id: 1, name: "Genesis", abbr: "Gen" },
    { id: 2, name: "Exodus", abbr: "Exo" }
  ];

  it("should render all books as Link components", () => {
    const wrapper = shallow(<BookList books={books} />);
    const links = wrapper.find(Link);
    const genesis = links.find({ to: "/book/1" });
    const exodus = links.find({ to: "/book/2" });
    expect(links.length).toBe(2);
    expect(genesis.length).toBe(1);
    expect(genesis.text()).toEqual("Genesis");
    expect(exodus.length).toBe(1);
    expect(exodus.text()).toEqual("Exodus");
  });
});
