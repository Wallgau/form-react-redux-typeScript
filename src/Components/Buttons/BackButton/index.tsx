import React from "react";
import { Button } from "../styled";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { decrementStep } from "../../../store/Stepper/action";
import { StepState } from "../../../store/Stepper/types";

interface StepProps {
  readonly decrement: () => void;
  readonly step: number;
}

const BackButton = ({ decrement, step }: StepProps) => {
  return (
    <Button variant='contained' className='back' onClick={() => decrement()}>
      Back
    </Button>
  );
};

const mapStateToProps = (state: StepState) => ({ step: state.step });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decrement: () => dispatch(decrementStep()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
