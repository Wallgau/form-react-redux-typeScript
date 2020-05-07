import { StepActionType, IncrementAction, DecrementAction } from "./types";

export const incrementStep = (): IncrementAction => ({ type: StepActionType.INCREMENT });

export const decrementStep = (): DecrementAction => ({ type: StepActionType.DECREMENT });
