import { formState } from "../../store/UserDetails/types";
import { FormErrors } from "redux-form";

export const validate = (values: Readonly<formState>): FormErrors<formState> => {
  const errors: FormErrors<formState> = {};
  const mailformat: any = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  console.log(values, errors);

  if (!values.username) {
    errors.username = "Your name is required";
  }
  if (!values.password) {
    errors.password = "Your password is required";
  }
  console.log(values.password);
  if (!values.email) {
    errors.email = "Your email is required";
  }
  if (values.email && !values.email.match(mailformat)) {
    errors.email = "your email is not valid!";
  }
  console.log(errors);
  return errors;
};
