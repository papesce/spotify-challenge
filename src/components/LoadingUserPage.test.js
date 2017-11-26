import React from "react";
import ReactDOM from "react-dom";
import LoadingUserPage from "./LoadingUserPage";
import { shallow } from "enzyme";

describe("LoadingUserPage tests", () => {
  it("renders without crashing", () => {
    shallow(<LoadingUserPage />);
  });
});
