import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState as StepperState } from "./Stepper/reducer";
import { reducer } from "redux-form";

function render({
  initialState = StepperState,
  store = createStore(reducer, StepperState),
  ...renderOptions
} = {}) {
  function Wrapper(children: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
