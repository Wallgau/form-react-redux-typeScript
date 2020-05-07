import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import step from "./Stepper/reducers";
import formData from "./UserDetails/reducer";
import {formState} from "./UserDetails";
import {StepState} from "./Stepper";
import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers({step, formReducer});

export interface State {
    step: StepState;
    formReducer: any;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState? : State) => createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore();

export default store;
