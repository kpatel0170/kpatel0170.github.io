import React from "react";
import { shallow } from "enzyme";
import Experiences from "./Experiences";

describe("Experiences", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Experiences />);
    expect(wrapper).toMatchSnapshot();
  });
});
