import * as React from "react";
import {shallow} from "enzyme";
import InRange from "../src/components/InRange";

describe("Tests for InRange", () => {
  it("should apply valid classname when input in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '5' }});
    expect(wrapper.find('input').hasClass('valid')).toEqual(true);
  });
  it("should apply invalid classname when input NOT in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '15' }});
    expect(wrapper.find('input').hasClass('invalid')).toEqual(true);
  });
  /*
  it("should initially be empty with invalid classname", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    expect(wrapper.find('input').hasClass('invalid')).toEqual(true);
    expect(wrapper.find('input').props().value).toEqual('');
  });
  it("should include high value in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '10' }});
    expect(wrapper.find('input').hasClass('valid')).toEqual(true);
  });
  it("should include low value in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '1' }});
    expect(wrapper.find('input').hasClass('valid')).toEqual(true);
  });
  */
});
