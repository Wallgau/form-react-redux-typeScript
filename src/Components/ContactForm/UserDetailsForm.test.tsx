import React from "react";
import {shallow} from "enzyme";
import {UserDetailsForm} from "./index";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});
test("renders the component", () => {
    const component: any = shallow(< UserDetailsForm />);
    expect(component).toMatchSnapshot();
});
