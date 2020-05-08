import React from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { incrementStep, decrementStep } from "../../store/Stepper/action";

import Header from "../Reusable/Header";
import UserDetails from "../Pages/UserDetails/index";
import Privacy from "../Pages/Privacy/index";
import CompleteForm from "../Pages/Completed/index";

interface StepProps {
  readonly increment: () => void;
  readonly decrement: () => void;
  readonly step: number;
}

const Stepper = ({ step }: StepProps) => {
  switch (step) {
    case 0:
      return (
        <>
          <Header />
          <UserDetails />
        </>
      );
    case 1:
      return (
        <>
          <Header />
          <Privacy />
        </>
      );
    case 2:
      return (
        <>
          <Header />
          <CompleteForm />
        </>
      );
    default:
      return <>LOADING</>;
  }
};

const mapStateToProps = (state: any) => ({ step: state.step.step });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementStep()),
  decrement: () => dispatch(decrementStep()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
