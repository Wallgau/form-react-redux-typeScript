import React, { useState } from "react";
import UserDetails from "./Pages/UserDetails";
import Privacy from "./Pages/Privacy";
import CompleteForm from "./Pages/CompleteForm";

const Stepper = () => {
  const [step, setStep] = useState(0);
  console.log(step);
  const prevStep = () => {
    return setStep(step - 1);
  };
  const nextStep = () => {
    return setStep(step + 1);
  };
  switch (step) {
    case 0:
      return <UserDetails nextStep={nextStep} />;
    case 1:
      return <Privacy nextStep={nextStep} prevStep={prevStep} />;
    case 2:
      return <CompleteForm prevStep={prevStep} />;
  }
};
export default Stepper;
