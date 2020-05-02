import React from "react";

interface Props {
  nextStep: () => void;
}

const NextButton: React.FC<Props> = ({ nextStep }) => {
  return (
    <>
      <button onClick={() => nextStep()}>Next</button>
    </>
  );
};

export default NextButton;
