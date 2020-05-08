import React from "react";
import {Button, Next} from "../styled";

import {Dispatch} from "redux";
import {connect} from "react-redux";
import {incrementStep} from "../../../../store/Stepper/action";
import {StepState} from "../../../../store/Stepper/types";
import {formState} from "../../../../store/UserDetails/types";
import {userDetails} from "../../../../store/UserDetails";

interface ButtonProps {
    readonly increment: () => void;
}

interface IFormProps {
    name: string;
    role: string;
    email: string;
    password: string;
}
interface DataProps {
    userData: (payload : IFormProps) => void;
}

const NextButton = ({increment, userData} : ButtonProps & DataProps & IFormProps) => {
    return (<Next>
        <Button type='submit' variant='contained' className='next'
            onClick={
                (payload : any) => {
                    increment();
                    userData(payload);
                }
        }>
            Next
        </Button>
    </Next>);
};

const mapStateToProps = (state : StepState & formState) => ({
    step: state.step,
    name: state.name,
    role: state.role,
    email: state.email,
    password: state.password
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    increment: () => dispatch(incrementStep()),
    userData: () => dispatch(userDetails())
});
export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
