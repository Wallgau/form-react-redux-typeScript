import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Stepper from "./Components/Stepper";

const StepComponent: any = Stepper;
function App() {
  return (
    <>
      <Provider store={store}>
        <StepComponent />
      </Provider>
    </>
  );
}

export default App;
