import { Action } from "redux";

export interface PrivacyState {
  privacyOne: boolean;
  privacyTwo: boolean;
}

export enum PrivacyActionType {
  PRIVACYONE = "PRIVACYONE",
  PRIVACYTWO = "PRIVACYTWO",
}

export interface PrivacyOneAction extends Action {
  type: PrivacyActionType.PRIVACYONE;
}

export interface PrivacyTwoAction extends Action {
  type: PrivacyActionType.PRIVACYTWO;
}

export type PrivacyActions = PrivacyOneAction | PrivacyTwoAction;
