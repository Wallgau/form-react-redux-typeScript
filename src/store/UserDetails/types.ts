import { Action } from "redux";

export interface formState {
  name: string;
  role: string;
  email: string;
  password: string;
}

export enum userDetailsActionType {
  USERDETAILS = "USERDETAILS",
}

export interface userDetailsAction extends Action {
  type: userDetailsActionType.USERDETAILS;
}
export type userActions = userDetailsAction;
