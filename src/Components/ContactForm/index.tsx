import React from "react";
import { Field, reduxForm } from "redux-form";
import { RdxFormControlInput, ReduxFormProps } from "../ReduxForm/index";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { userDetails } from "../../store/UserDetails/action";

interface IFormProps {
  name: string;
  role: string;
  email: string;
  password: string;
}
interface DataProps {
  userData: (payload: IFormProps) => void;
}

const ContactForm = ({ name, role, email, password, userData }: IFormProps & DataProps) => (
  <form>
    <Field
      name='name'
      component={RdxFormControlInput}
      type='text'
      label='Enter your full name'
      required
    />
    <Field name='role' component={RdxFormControlInput} type='text' label='What is your title job' />
    <Field name='email' component={RdxFormControlInput} type='email' label='Enter your email' />
    <Field name='password' component={RdxFormControlInput} type='password' label='Enter password' />
  </form>
);

const mapStateToProps = (state: any) => ({
  name: state.name,
  role: state.role,
  email: state.email,
  password: state.password,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  userData: () => dispatch(userDetails()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(ContactForm);

export const UserDetailsForm = reduxForm({
  form: "UserDetails",
  destroyOnUnmount: false,
})(connectForm);
