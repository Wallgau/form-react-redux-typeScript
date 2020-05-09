import { userDetailsActionType, formState, userActions } from "./types";
import { Action } from "redux";

const initialUser: formState = {
  name: "",
  role: "",
  email: "",
  password: "",
  errorName: "",
  errorEmail: "",
  errorFormatEmail: "",
  errorPassword: "",
  errorFormatPassword: "",
};

const formData = (
  state: formState = initialUser,
  action: Action | userActions,
  payload: formState,
) => {
  switch (action.type) {
    case userDetailsActionType.USERDETAILS:
      return {
        ...state,
        payload,
      };
    case userDetailsActionType.ERROR_FORM:
      return {
        ...state,
        errorName: "Your name is required",
        errorEmail: "Your email is missing",
        errorFormatEmail: "Your email is invalid",
        errorPassword: "Your password error is missing",
        errorFormatPassword:
          "Your password has to include minimum 9 characters, at least one uppercase and one lowercase",
      };

    default:
      return state;
  }
};

export default formData;
