import React from "react";
import NextButton from "./Buttons/NextButton";

interface Props {
  nextStep: () => void;
}

const UserDetailsComponent = ({ nextStep }: Props) => {
  return (
    <>
      <NextButton nextStep={nextStep} />
    </>
  );
};

export default UserDetailsComponent;
