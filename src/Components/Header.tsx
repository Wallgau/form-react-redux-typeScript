import React, {useEffect} from "react";

import {connect} from "react-redux";

import {Top} from "./styled";

interface StepProps {
    readonly step: number;
}
const Header = ({step} : StepProps) => {


    return (<Top step={step}>
        <p className="etapeOne">Profil</p>
        <p className="etapeTwo">Privacy</p>
        <p className="etapeThree">Complete</p>
    </Top>);
};
const mapStateToProps = (state : any) => ({step: state.step.step});

export default connect(mapStateToProps)(Header);
