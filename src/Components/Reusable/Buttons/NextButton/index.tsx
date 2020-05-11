import React from "react";
import { Button, Next } from "../styled";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { PrivacyState } from "../../../../store/Privacy/types";
import { incrementStep } from "../../../../store/Stepper/action";
import { StepState } from "../../../../store/Stepper/types";
import { formState } from "../../../../store/UserDetails/types";
import { userDetails } from "../../../../store/UserDetails";

interface ButtonProps {
  readonly increment: () => void;
}

interface DataProps {
  userData: (payload: formState) => void;
}

const NextButton = ({
  step,
  increment,
  userData,
  privacyOne,
  privacyTwo,
}: ButtonProps & DataProps & formState & StepState & PrivacyState) => {
  return (
    <Next>
      <Button
        type='button'
        variant='contained'
        className='next'
        disabled={!privacyOne && !privacyTwo}
        onClick={(payload: any) => {
          increment();
          userData(payload);
        }}>
        Next
      </Button>
    </Next>
  );
};

const mapStateToProps = (state: StepState & formState & any) => ({
  step: state.step.step,
  username: state.username,
  role: state.role,
  email: state.email,
  password: state.password,
  privacyOne: state.privacyChecked.privacyOne,
  privacyTwo: state.privacyChecked.privacyTwo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementStep()),
  userData: () => dispatch(userDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
