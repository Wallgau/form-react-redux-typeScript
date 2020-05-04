import {Action} from "redux";

export interface StepState {
    step: number;
}

export enum StepActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}

export interface IncrementAction extends Action {
    type: StepActionType.INCREMENT;
}

export interface DecrementAction extends Action {
    type: StepActionType.DECREMENT;
}

export type StepActions = IncrementAction | DecrementAction;
