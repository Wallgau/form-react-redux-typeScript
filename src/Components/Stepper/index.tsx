import React from "react";

import {Dispatch} from "redux";
import {connect} from "react-redux";
import {incrementStep, decrementStep} from "../../store/Steps/action";


import Header from "../Header";
import UserDetails from "../Pages/UserDetails";
import Privacy from "../Pages/Privacy";
import CompleteForm from "../Pages/CompleteForm";

interface StepProps {
    readonly increment: () => void;
    readonly decrement: () => void;
    readonly step: number;
}

const Stepper = ({step} : StepProps) => {

    let content: any;
    switch (step) {
        case 0:
            return content = (<>
                <Header/>
                <UserDetails/>
            </>);
        case 1:
            return content = (<>
                <Header/>
                <Privacy/>
            </>);
        case 2:
            return content = (<>
                <Header/>
                <CompleteForm/>
            </>);
        default:
            return content;
    }
    return content;
};

const mapStateToProps = (state : any) => ({step: state.step.step});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    increment: () => dispatch(incrementStep()),
    decrement: () => dispatch(decrementStep())
});
export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
