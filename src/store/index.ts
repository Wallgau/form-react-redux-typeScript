import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import step from "./Steps/reducers";
import { StepState } from "./Steps";

const reducer = combineReducers({ step });

export interface State {
  step: StepState;
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState?: State) =>
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore();

export default store;
