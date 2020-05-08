import React from "react";
import BackButton from "../../Reusable/Buttons/BackButton/index";
import NextButton from "../../Reusable/Buttons/NextButton/index";
import {PrivacyChecked} from "../../PrivacyCheckBox/index";
import {Body} from "../styled";

const PrivacyComponent = () => {
    return (<Body>
        <PrivacyChecked/>
        <BackButton/>
        <NextButton/>
    </Body>);
};

export default PrivacyComponent;
