import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { RdxFormControlCheckbox, ReduxFormProps } from "../Reusable/ReduxForm/index";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { privacyOne, privacyTwo } from "../../store/Privacy/action";

interface PrivacyProps {
  privacyOne: boolean;
  privacyTwo: boolean;
}
interface PrivacyCheckedProps {
  privacyOneChecked: () => void;
  privacyTwoChecked: () => void;
}

const PrivacyCheckBox = ({ privacyOneChecked, privacyTwoChecked }: PrivacyCheckedProps) => {
  const [isCheckedA, setCheckedA] = useState(false);
  const [isCheckedB, setCheckedB] = useState(false);

  return (
    <form>
      <Field
        name='privacy_one'
        component={RdxFormControlCheckbox}
        type='checkbox'
        label='Receive updates about Tray.io product by email'
        checked={isCheckedA}
        onChange={() => {
          setCheckedA(!isCheckedA);
          privacyOneChecked();
        }}
      />
      <Field
        name='privacy_two'
        component={RdxFormControlCheckbox}
        type='text'
        label='Receive communication by email for other products created by the Tray.io team'
        checked={isCheckedB}
        onChange={() => {
          setCheckedB(!isCheckedB);
          privacyTwoChecked();
        }}
      />
    </form>
  );
};

const mapStateToProps = (state: PrivacyProps) => ({
  privacyOne: state.privacyOne,
  privacyTwo: state.privacyTwo,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  privacyOneChecked: () => dispatch(privacyOne()),
  privacyTwoChecked: () => dispatch(privacyTwo()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(PrivacyCheckBox);

export const PrivacyChecked = reduxForm({ form: "privacyForm", destroyOnUnmount: false })(
  connectForm,
);
