import { userDetailsActionType, userDetailsAction, errorFormAction } from "./types";

export const userDetails = (): userDetailsAction => ({ type: userDetailsActionType.USERDETAILS });

export const errorFormValues = (): errorFormAction => ({
  type: userDetailsActionType.ERROR_FORM,
});
