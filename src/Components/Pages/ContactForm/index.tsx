import React from "react";
import { Field, reduxForm } from "redux-form";
import { RdxFormControlInput, ReduxFormProps } from "../../ReduxForm/index";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IFormProps {
  username: string;
  password: string;
}

const ContactForm = () => (
  <form>
    <Field
      name="name"
      component={RdxFormControlInput}
      type="text"
      label="Enter your full name"
    />
    <Field
      name="role"
      component={RdxFormControlInput}
      type="text"
      label="What is your title job"
    />
    <Field
      name="email"
      component={RdxFormControlInput}
      type="email"
      label="Enter your email"
    />
    <Field
      name="password"
      component={RdxFormControlInput}
      type="password"
      label="Enter password"
    />
  </form>
);
const mapStateToProps = (state: ReduxFormProps) => {};

const mapDispatchProps = (dispatch: Dispatch) => {};

const connectForm = connect(mapStateToProps, mapDispatchProps)(ContactForm);

export const UserDetailsForm = reduxForm({ form: "UserDetails" })(connectForm);
