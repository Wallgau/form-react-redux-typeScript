import React from "react";
import {
  reduxForm,
  Field,
  getFormValues,
  getFormInitialValues,
  getFormSyncErrors,
  getFormMeta,
  getFormAsyncErrors,
  getFormSyncWarnings,
  getFormSubmitErrors,
  getFormNames,
  isDirty,
  isPristine,
  isValid,
  isInvalid,
  isSubmitting,
  hasSubmitSucceeded,
  hasSubmitFailed,
} from "redux-form";
// import { required, email, length, validateForm, FormValidator } from "redux-form-validators";
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
}: formState & DataProps) => {
  return (
    <form onSubmit={submitForm}>
      <Field
        name='username'
        id='username'
        component={RdxFormControlInput}
        type='text'
        label='Enter your full name'
      />
      <Field
        name='role'
        component={RdxFormControlInput}
        type='text'
        label='What is your title job'
      />
      <Field name='email' component={RdxFormControlInput} type='email' label='Enter your email' />
      <Field
        name='password'
        component={RdxFormControlInput}
        type='password'
        label='Enter password'
      />
      <Next>
        <Button
          type='submit'
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
};

const mapStateToProps = (state: any) => ({
  username: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.username,
  role: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.role,
  email: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.email,
  password: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.password,
  values: getFormValues("UserDetails")(state),
  initialValues: getFormInitialValues("UserDetails")(state),
  syncErrors: getFormSyncErrors("UserDetails")(state),
  fields: getFormMeta("UserDetails")(state),
  asyncErrors: getFormAsyncErrors("UserDetails")(state),
  syncWarnings: getFormSyncWarnings("UserDetails")(state),
  submitErrors: getFormSubmitErrors("UserDetails")(state),
  names: getFormNames()(state),
  dirty: isDirty("UserDetails")(state),
  pristine: isPristine("UserDetails")(state),
  valid: isValid("UserDetails")(state),
  invalid: isInvalid("UserDetails")(state),
  submitting: isSubmitting("UserDetails")(state),
  submitSucceeded: hasSubmitSucceeded("UserDetails")(state),
  submitFailed: hasSubmitFailed("UserDetails")(state),
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  userData: () => dispatch(userDetails()),
  increment: () => dispatch(incrementStep()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(ContactForm);

export const validate = ({ username, password, role, email }: formState) => {
  const mailformat: any = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  const errors: any = {};
  if (!username) {
    errors.username = "Your name is required";
    console.log("error:name");
  }
  if (!password) {
    errors.password = "Your password is Required";
    console.log("password:true");
  }
  if (!email) {
    errors.email = "Your email is required";
    console.log("email:true");
  }
  if (email && !email.match(mailformat)) {
    errors.email = "your email is not valid!";
  }
  console.log(errors);
  return errors;
};

export const UserDetailsForm = reduxForm({
  form: "UserDetails",
  validate,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(connectForm);
