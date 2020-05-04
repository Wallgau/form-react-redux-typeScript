import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { Box } from "../styled";

interface StepProps {
  readonly step: number;
}
const Header = ({ step }: StepProps) => {
  const boxs = [
    {
      page: "Page1",
      id: "page1",
    },
    {
      page: "Page2",
      id: "page2",
    },
    {
      page: "Page3",
      id: "page3",
    },
  ];

  console.log();
  const content = (
    <>
      {boxs.map((box) => (
        <Box key={box.id} isActive={step === boxs.indexOf(box)}>
          {box.page}
        </Box>
      ))}
    </>
  );
  return content;
};
const mapStateToProps = (state: any) => ({ step: state.step.step });

export default connect(mapStateToProps)(Header);
