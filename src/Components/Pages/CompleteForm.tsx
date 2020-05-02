import React from "react";
import BackButton from "./Buttons/BackButton";

interface Props {
  prevStep: () => void;
}

const CompleteForm = ({ prevStep }: Props) => {
  return (
    <>
      <div>Page3</div>
      <BackButton prevStep={prevStep} />
    </>
  );
};

export default CompleteForm;
