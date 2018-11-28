/*global shallow*/
import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../src/components/counter/counter.js";

describe("<Counter />", () => {
  it("should be found when application starts", () => {
    let app = shallow(<Counter />);
    expect(app.find("section").exists()).toBeTruthy();
  });
  it("should change state and decrement on hitting plus", () => {
    let app = mount(<Counter />);
    let clicker = app.find("a.up-clicker");
    clicker.simulate("click");
    expect(app.state("count")).toEqual(1);
  });
  it("should change state and decrement on hitting minus", () => {
    let app = mount(<Counter />);
    let clicker = app.find("a.down-clicker");
    clicker.simulate("click");
    expect(app.state("count")).toEqual(-1);
  });
  it("should increment on hitting + and render changes to the DOM", () => {
    let app = mount(<Counter />);
    expect(app.find("span").text()).toEqual("0");
    let clicker = app.find("a.up-clicker");
    clicker.simulate("click");
    expect(app.find("span").text()).toEqual("1");
  });
  it("should decrement on hitting minus and render changes to the DOM", () => {
    let app = mount(<Counter />);
    expect(app.find("span").text()).toEqual("0");
    let clicker = app.find("a.down-clicker");
    clicker.simulate("click");
    expect(app.find("span").text()).toEqual("-1");
  });
});
