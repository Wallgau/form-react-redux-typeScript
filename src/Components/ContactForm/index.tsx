import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, email, length, validateForm, FormValidator } from "redux-form-validators";
import { formState } from "../../store/UserDetails/index";
import { RdxFormControlInput } from "../Reusable/ReduxForm/index";
import { incrementStep } from "../../store/Stepper";
import { Button, Next } from "../Reusable/styled";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { userDetails } from "../../store/UserDetails/action";

interface DataProps {
  userData: (payload: formState) => void;
  increment: () => void;
}

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e && e.preventDefault();
// };
const submitForm = (formValues: object) => {
  alert(formValues);
};

const ContactForm = ({
  increment,
  userData,
  username,
  role,
  email,
  password,
}: formState & DataProps) => (
  <form onSubmit={submitForm}>
    <Field
      name='username'
      id='username'
      component={RdxFormControlInput}
      type='text'
      label='Enter your full name'
      required
    />
    <Field name='role' component={RdxFormControlInput} type='text' label='What is your title job' />
    <Field name='email' component={RdxFormControlInput} type='email' label='Enter your email' />
    <Field name='password' component={RdxFormControlInput} type='password' label='Enter password' />
    <Next>
      <Button
        type='button'
        variant='contained'
        className='next'
        onClick={(payload: any) => {
          increment();
          userData(payload);
        }}>
        Next
      </Button>
    </Next>
  </form>
);

const mapStateToProps = (state: any) => ({
  username: state.name,
  role: state.role,
  email: state.email,
  password: state.password,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  userData: () => dispatch(userDetails()),
  increment: () => dispatch(incrementStep()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(ContactForm);

export const validate = ({ username, password }: any) => {
  const errors: any = {};
  if (!username) {
    errors.username = "Required";
  }
  if (!password) {
    errors.password = "Required";
  }
  return errors;
};

export const UserDetailsForm = reduxForm({
  form: "UserDetails",
  validate,
})(connectForm);
