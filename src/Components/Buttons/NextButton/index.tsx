import React from "react";

import {Dispatch} from "redux";
import {connect} from "react-redux";
import {incrementStep} from "../../../store/Steps/action";
import {StepState} from "../../../store/Steps/types";

interface StepProps {
    readonly increment: () => void;
    readonly step: number;
}

const NextButton = ({increment, step} : StepProps) => {
    return (<button onClick={
        () => increment()
    }>Next</button>);
};

const mapStateToProps = (state : StepState) => ({step: state.step});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    increment: () => dispatch(incrementStep())
});
export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
