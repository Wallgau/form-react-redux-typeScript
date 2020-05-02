import React from "react";

interface Props {
  prevStep: () => void;
}

const BackButton: React.FC<Props> = ({ prevStep }) => {
  return (
    <>
      <button onClick={() => prevStep()}>Back</button>
    </>
  );
};

export default BackButton;
