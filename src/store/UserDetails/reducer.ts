import { userDetailsActionType, formState, userDetailsAction } from "./types";
import { Action } from "redux";

const initialUser: formState = {
  name: "",
  role: "",
  email: "",
  password: "",
};

const formData = (
  state: formState = initialUser,
  action: Action | userDetailsAction
) => {
  switch (action.type) {
    case userDetailsActionType.USERDETAILS:
      return {
        ...state,
        name: state.name,
        role: state.role,
        email: state.email,
        password: state.email,
      };

    default:
      return state;
  }
};

export default formData;
