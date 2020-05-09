import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, email, length, validateForm, FormValidator } from "redux-form-validators";
import { RdxFormControlInput } from "../Reusable/ReduxForm/index";
import NextButton from "../Reusable/Buttons/NextButton";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { userDetails } from "../../store/UserDetails/action";
import { errorFormValues } from "../../store/UserDetails/action";

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
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e && e.preventDefault();
};

// const nameValidation = ({ name, errorName }: IFormProps) => {
//   if (!name) {
//     errorFormValues();
//     return alert(errorName);
//   }
// };

const ContactForm = () => (
  <form onSubmit={handleSubmit}>
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
    <div>
      <NextButton />
    </div>
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
const validate: FormValidator = validateForm({
  username: [required(), length({ max: 15 })],
  email: [required(), email()],
  password: [required()],
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(ContactForm);

export const UserDetailsForm = reduxForm({
  form: "UserDetails",
  validate,
  destroyOnUnmount: false,
})(connectForm);
