import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import step from "./Stepper/reducer";
import privacyChecked from "./Privacy/reducer";
import { PrivacyState } from "./Privacy";
import { StepState } from "./Stepper";
import { reducer as formReducer } from "redux-form";

export interface State {
  step: StepState;
  formReducer: any;
  privacyChecked: PrivacyState;
}

const reducer = combineReducers({ step, formReducer, privacyChecked });

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState?: State) =>
  createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore();

export default store;
