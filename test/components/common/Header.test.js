import React from "react";
import { shallow } from "enzyme";
import Header from "../../../src/components/common/Header";
import { NavLink } from "react-router-dom";

describe("<Header />", () => {
  it("renders Home NavLink", () => {
    expect(
      shallow(<Header />)
        .find(NavLink)
        .find({ to: "/" })
        .text()
    ).toBe("Home");
  });

  it("renders Books NavLink", () => {
    expect(
      shallow(<Header />)
        .find(NavLink)
        .find({ to: "/books/" })
        .text()
    ).toBe("Books");
  });
});
