import { StepActionType, StepState, StepActions } from "./types";
import { Action } from "redux";

export const initialState: StepState = {
  step: 0,
};

const step = (
  state: StepState = initialState,
  action: Action | StepActions
) => {
  switch (action.type) {
    case StepActionType.INCREMENT:
      return {
        ...state,
        step: state.step + 1,
      };
    case StepActionType.DECREMENT:
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return state;
  }
};

export default step;
