import React, { useState, useEffect } from "react";
import { reduxForm, Field, getFormValues, getFormSyncErrors } from "redux-form";
import { ErrorStyled } from "./styled";
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
  role,
  email,
  password,
  errorUsername,
  errorEmail,
  errorPassword,
  hasReduxValues,
}: formState & DataProps & any) => {
  const [show, setShow] = useState(false);

  const submitForm = (payload: any) => {
    if (username && email && password) {
      increment();
      userData(payload);
    }
  };

  useEffect(() => {
    hasReduxValues && userData();
  });

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field
        name='username'
        id='username'
        component={RdxFormControlInput}
        type='text'
        defaultValue={username}
        label={"Enter your full name"}
        required
      />

      {show && !username ? (
        <ErrorStyled>
          <span>{errorUsername}</span>
        </ErrorStyled>
      ) : (
        ""
      )}
      <Field
        name='role'
        component={RdxFormControlInput}
        type='text'
        defaultValue={role}
        label='What is your title job'
      />
      <Field
        name='email'
        component={RdxFormControlInput}
        type='email'
        defaultValue={email}
        label='Enter your email'
        required
      />

      {show && (!email || (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) ? (
        <ErrorStyled>
          <span>{errorEmail}</span>
        </ErrorStyled>
      ) : (
        ""
      )}

      <Field
        name='password'
        component={RdxFormControlInput}
        type='password'
        defaultValue={password}
        label='Enter password'
        required
      />
      {show && !password ? (
        <ErrorStyled>
          <span>{errorPassword}</span>
        </ErrorStyled>
      ) : (
        ""
      )}
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
  hasReduxValues: state.formReducer.UserDetails.values,
  username: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.username,
  role: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.role,
  email: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.email,
  password: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.password,
  errorUsername: state.formReducer.UserDetails.syncErrors.username,
  errorEmail: state.formReducer.UserDetails.syncErrors.email,
  errorPassword: state.formReducer.UserDetails.syncErrors.password,
  values: getFormValues("UserDetails")(state),
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
  forceUnregisterOnUnmount: true,
})(connectForm);
