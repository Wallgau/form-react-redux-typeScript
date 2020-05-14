import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { UserDetailsForm } from "./index";
import Enzyme from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

test("renders the component", () => {
  const component: any = shallow(<UserDetailsForm />);
  expect(component).toMatchSnapshot();
});
describe("Login Component", () => {
  it("it renders a <form /> element", () => {
    shallow(
      <Provider store={store}>
        <UserDetailsForm />
      </Provider>,
    ).dive();
  });
});
