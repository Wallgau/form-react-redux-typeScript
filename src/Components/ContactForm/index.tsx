import React, { useState } from "react";
import {
  reduxForm,
  Field,
  getFormValues,
  getFormInitialValues,
  getFormSyncErrors,
} from "redux-form";
import { validate } from "./validate";
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

const ContactForm = ({
  increment,
  userData,
  handleSubmit,
  submitting,
  username,
  email,
  password,
  errorUsername,
  errorEmail,
  errorPassword,
}: formState & DataProps & any) => {
  const [show, setShow] = useState(false);
  console.log(show);

  const submitForm = (payload: any) => {
    if (username && email && password) {
      increment();
      userData(payload);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field
        name='username'
        id='username'
        component={RdxFormControlInput}
        type='text'
        label={"Enter your full name"}
      />
      {show && !username ? <span style={{ color: "red" }}>{errorUsername}</span> : ""}
      <Field
        name='role'
        component={RdxFormControlInput}
        type='text'
        label='What is your title job'
      />
      <Field name='email' component={RdxFormControlInput} type='email' label='Enter your email' />
      {show && !email ? <span style={{ color: "red" }}>{errorEmail}</span> : ""}

      <Field
        name='password'
        component={RdxFormControlInput}
        type='password'
        label='Enter password'
      />
      {show && !password ? <span style={{ color: "red" }}>{errorPassword}</span> : ""}
      <Next>
        <Button
          type='submit'
          variant='contained'
          className='next'
          disabled={submitting}
          onClick={() => setShow(true)}>
          Next
        </Button>
      </Next>
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  username: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.username,
  role: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.role,
  email: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.email,
  password: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.password,
  errorUsername: state.formReducer.UserDetails.syncErrors.username,
  errorEmail: state.formReducer.UserDetails.syncErrors.email,
  errorPassword: state.formReducer.UserDetails.syncErrors.password,
  values: getFormValues("UserDetails")(state),
  initialValues: getFormInitialValues("UserDetails")(state),
  syncErrors: getFormSyncErrors("UserDetails")(state),
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  userData: () => dispatch(userDetails()),
  increment: () => dispatch(incrementStep()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(ContactForm);

export const UserDetailsForm = reduxForm({
  form: "UserDetails",
  validate,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(connectForm);
