import { formState } from "../../store/UserDetails/types";
import { FormErrors } from "redux-form";

export const validate = (values: Readonly<formState>): FormErrors<formState> => {
  const errors: FormErrors<formState> = {};

  if (!values.username) {
    errors.username = "Your name is required";
  }
  if (!values.password) {
    errors.password = "Your password is required";
  }
  if (
    !values.email ||
    (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  ) {
    errors.email = "your email is missing or is not valid, it should include @";
  }
  return errors;
};
