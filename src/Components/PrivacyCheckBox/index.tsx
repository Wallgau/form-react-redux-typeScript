import React from "react";
import { Field, reduxForm } from "redux-form";
import { RdxFormControlCheckbox } from "../Reusable/ReduxForm/index";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { privacyOne, privacyTwo } from "../../store/Privacy/action";
import { PrivacyState } from "../../store/Privacy/types";

interface PrivacyCheckedProps {
  privacyOneChecked: () => void;
  privacyTwoChecked: () => void;
}

const PrivacyCheckBox = ({
  privacyOneChecked,
  privacyTwoChecked,
  privacyOne,
  privacyTwo,
}: PrivacyCheckedProps & PrivacyState) => {
  return (
    <form>
      <Field
        name='privacy_one'
        component={RdxFormControlCheckbox}
        type='checkbox'
        label='Receive updates about Tray.io product by email'
        checked={privacyOne}
        onChange={() => {
          privacyOneChecked();
        }}
      />
      <Field
        name='privacy_two'
        component={RdxFormControlCheckbox}
        type='checkbox'
        label='Receive communication by email for other products created by the Tray.io team'
        checked={privacyTwo}
        onChange={() => {
          privacyTwoChecked();
        }}
      />
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  privacyOne: state.privacyChecked.privacyOne,
  privacyTwo: state.privacyChecked.privacyTwo,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  privacyOneChecked: () => dispatch(privacyOne()),
  privacyTwoChecked: () => dispatch(privacyTwo()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(PrivacyCheckBox);

export const PrivacyChecked = reduxForm({ form: "privacyForm", destroyOnUnmount: false })(
  connectForm,
);
