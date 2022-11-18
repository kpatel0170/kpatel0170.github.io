import React from "react";
import { shallow } from "enzyme";
import Education from "./Education";

describe("Education", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Education />);
    expect(wrapper).toMatchSnapshot();
  });
});
