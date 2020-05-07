import { PrivacyActionType, PrivacyState, PrivacyActions } from "./types";
import { Action } from "redux";

export const initialState: PrivacyState = {
  privacyOne: false,
  privacyTwo: false,
};

const privacyChecked = (state: PrivacyState = initialState, action: Action | PrivacyActions) => {
  switch (action.type) {
    case PrivacyActionType.PRIVACYONE:
      return {
        ...state,
        privacyOne: true,
      };
    case PrivacyActionType.PRIVACYTWO:
      return {
        ...state,
        privacyTwo: true,
      };
    default:
      return state;
  }
};

export default privacyChecked;
