import React from "react";

import { connect } from "react-redux";
import { StepState } from "../store/Steps/types";

import { Top } from "./styled";

interface StepProps {
  readonly step: number;
}
const TopPage: any = Top;
const Header = ({ step }: StepProps) => {
  return (
    <TopPage>
      <p className="etapeOne">Profil</p>
      <p className="etapeTwo">Privacy</p>
      <p className="etapeThree">Complete</p>
    </TopPage>
  );
};
const mapStateToProps = (state: StepState) => ({
  step: state.step,
});

export default connect(mapStateToProps)(Header);
