import React from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { incrementStep, decrementStep } from "../store/Steps/action";
import { StepState } from "../store/Steps/types";

import Header from "./Header";
import UserDetails from "./Pages/UserDetails";
import Privacy from "./Pages/Privacy";
import CompleteForm from "./Pages/CompleteForm";

interface StepProps {
  readonly increment: () => void;
  readonly decrement: () => void;
  readonly step: number;
}

const Stepper: React.SFC<StepProps> = ({ step, increment, decrement }) => {
  console.log(step);
  return <>hello</>;
  //let content;
  //   switch (step) {
  //     case 0:
  //       content = (
  //         <>
  //           <Header />
  //           <UserDetails />
  //         </>
  //       );
  //       break;
  //     case 1:
  //       content = (
  //         <>
  //           <Header />
  //           <Privacy />
  //         </>
  //       );
  //       break;
  //     case 2:
  //       content = (
  //         <>
  //           <Header />
  //           <CompleteForm />
  //         </>
  //       );
  //       break;
  //     default:
  //       return content;
  //   }
  //   return content;
};

const mapStateToProps = (state: StepState) => {
  return { step: state.step };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementStep()),
  decrement: () => dispatch(decrementStep()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
