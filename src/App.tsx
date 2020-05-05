import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { Card } from "./styled";
import Stepper from "./Components/Stepper/index";

const StepComponent: any = Stepper;
function App() {
  return (
    <>
      <Provider store={store}>
        <Card>
          <StepComponent />
        </Card>
      </Provider>
    </>
  );
}

export default App;
