import {userDetailsActionType, formState, userActions} from "./types";
import {Action} from "redux";

const initialUser: formState = {
    name: "",
    role: "",
    email: "",
    password: ""
};

const formData = (state : formState = initialUser, action : Action | userActions, payload : formState) => {
    switch (action.type) {
        case userDetailsActionType.USERDETAILS:
            return {
                ...state,
                payload
            };

        default:
            return state;
    }
};

export default formData;
