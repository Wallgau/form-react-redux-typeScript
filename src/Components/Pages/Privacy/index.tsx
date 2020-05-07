import React from "react";
import BackButton from "../../Buttons/BackButton/index";
import NextButton from "../../Buttons/NextButton/index";
import { PrivacyChecked } from "../../PrivacyCheckBox/index";
import { Body } from "../styled";

const PrivacyComponent = () => {
  return (
    <Body>
      <PrivacyChecked />
      <BackButton />
      <NextButton />
    </Body>
  );
};

export default PrivacyComponent;
