import React from "react";
import { Button, Next } from "../styled";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { incrementStep } from "../../../store/Stepper/action";
import { StepState } from "../../../store/Stepper/types";

interface StepProps {
  readonly increment: () => void;
  readonly step: number;
}

const NextButton = ({ increment, step }: StepProps) => {
  return (
    <Next>
      <Button variant="contained" className="next" onClick={() => increment()}>
        Next
      </Button>
    </Next>
  );
};

const mapStateToProps = (state: StepState) => ({ step: state.step });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementStep()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
