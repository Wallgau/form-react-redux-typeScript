import React from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { decrementStep } from "../../../store/Steps/action";
import { StepState } from "../../../store/Steps/types";

interface StepProps {
  readonly decrement: () => void;
  readonly step: number;
}

const BackButton = ({ decrement, step }: StepProps) => {
  return (
    <>
      <button onClick={() => decrement()}>Back</button>
    </>
  );
};

const mapStateToProps = (state: StepState) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decrement: () => dispatch(decrementStep()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
