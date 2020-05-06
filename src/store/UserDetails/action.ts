import { userDetailsActionType, userDetailsAction } from "./types";

export const userDetails = (): userDetailsAction => ({
  type: userDetailsActionType.USERDETAILS,
});
