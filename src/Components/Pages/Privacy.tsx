import React from "react";
import BackButton from "./Buttons/BackButton";
import NextButton from "./Buttons/NextButton";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const PrivacyComponent = ({ nextStep, prevStep }: Props) => {
  return (
    <>
      <div>Page2</div>
      <BackButton prevStep={prevStep} />
      <NextButton nextStep={nextStep} />
    </>
  );
};

export default PrivacyComponent;
