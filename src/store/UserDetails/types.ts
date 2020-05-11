import { Action } from "redux";

export interface formState {
  username: string;
  role: string;
  email: string;
  password: string;
}

export enum userDetailsActionType {
  USERDETAILS = "USERDETAILS",
  ERROR_FORM = "ERROR_FORM",
}

export interface userDetailsAction extends Action {
  type: userDetailsActionType.USERDETAILS;
}

export interface errorFormAction extends Action {
  type: userDetailsActionType.ERROR_FORM;
}

export type userActions = userDetailsAction | errorFormAction;
