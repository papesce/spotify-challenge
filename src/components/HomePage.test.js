import React from "react";
import HomePage from "./HomePage";
import { shallow } from "enzyme";

describe("Home Page tests", () => {
  it("renders without crashing", () => {
    shallow(<HomePage />);
  });
});
