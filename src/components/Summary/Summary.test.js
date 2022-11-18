import React from "react";
import { shallow } from "enzyme";
import Summary from "./Summary";

describe("Summary", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Summary />);
    expect(wrapper).toMatchSnapshot();
  });
});
