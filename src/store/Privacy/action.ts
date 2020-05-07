import { PrivacyActionType, PrivacyOneAction, PrivacyTwoAction } from "./types";

export const privacyOne = (): PrivacyOneAction => ({ type: PrivacyActionType.PRIVACYONE });

export const privacyTwo = (): PrivacyTwoAction => ({ type: PrivacyActionType.PRIVACYTWO });
