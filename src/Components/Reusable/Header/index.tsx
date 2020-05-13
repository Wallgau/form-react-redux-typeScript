import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { Top, Box } from "./styled";

interface StepProps {
  readonly step: number;
}

const Header = ({ step }: StepProps) => {
  const boxs = [
    {
      page: "Profile",
      id: "page1",
    },
    {
      page: "Privacy",
      id: "page2",
    },
    {
      page: "Complete",
      id: "page3",
    },
  ];

  const content = (
    <Top>
      {boxs.map((box) => (
        <Box key={box.id} isactive={step === boxs.indexOf(box) ? true : false}>
          {box.page}
        </Box>
      ))}
    </Top>
  );
  return content;
};
const mapStateToProps = (state: any) => ({ step: state.step.step });

export default connect(mapStateToProps)(Header);
