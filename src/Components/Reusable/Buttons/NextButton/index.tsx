import React from "react";
import { errorFormValues } from "../../../../store/UserDetails/action";
import { Button, Next } from "../styled";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { incrementStep } from "../../../../store/Stepper/action";
import { StepState } from "../../../../store/Stepper/types";
import { formState } from "../../../../store/UserDetails/types";
import { userDetails } from "../../../../store/UserDetails";

interface ButtonProps {
  readonly increment: () => void;
}

interface IFormProps {
  name: string;
  role: string;
  email: string;
  password: string;
  errorName: string;
  errorEmail: string;
  errorFormatEmail: string;
  errorPassword: string;
  errorFormatPassword: string;
}
interface DataProps {
  userData: (payload: IFormProps) => void;
  errorName: (payload: IFormProps) => void;
}

const NextButton = ({
  increment,
  userData,
  name,
  errorName,
}: ButtonProps & DataProps & IFormProps & StepState & formState) => {
  console.log(name, errorName);
  return (
    <Next>
      <Button
        type='submit'
        variant='contained'
        className='next'
        onClick={(payload: any) => {
          if (!name) {
            errorName(payload);
            return alert(errorName);
          }
          // increment();
          // userData(payload);
          // nameValidation(name, errorName);
        }}>
        Next
      </Button>
    </Next>
  );
};

// const nameValidation = (name: string, errorName: string) => {
//   if (!name) {
//     errorName();
//     return alert(errorName);
//   }
// };

const mapStateToProps = (state: StepState & formState) => ({
  step: state.step,
  name: state.name,
  role: state.role,
  email: state.email,
  password: state.password,
  errorName: state.errorName,
  errorEmail: state.errorEmail,
  errorFormatEmail: state.errorFormatEmail,
  errorPassword: state.errorPassword,
  errorFormatPassword: state.errorFormatPassword,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementStep()),
  userData: () => dispatch(userDetails()),
  errorName: () => dispatch(errorFormValues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
