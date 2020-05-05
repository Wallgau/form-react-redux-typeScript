import React from "react";
import {Button, Back} from '../styled';


import {Dispatch} from "redux";
import {connect} from "react-redux";
import {decrementStep} from "../../../store/Steps/action";
import {StepState} from "../../../store/Steps/types";

interface StepProps {
    readonly decrement: () => void;
    readonly step: number;
}

const BackButton = ({decrement, step} : StepProps) => {
    return (<Back>
        <Button variant="contained" className="back"
            onClick={
                () => decrement()
        }>Back
        </Button>
    </Back>);;

};

const mapStateToProps = (state : StepState) => ({step: state.step});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    decrement: () => dispatch(decrementStep())
});
export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
