import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { RdxFormControlCheckbox, ReduxFormProps } from "../ReduxForm/index";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { userDetails } from "../../store/UserDetails/action";

interface IFormProps {
  index: number;
}
interface DataProps {
  userData: (payload: IFormProps) => void;
}

const PrivacyCheckBox = () => {
  const [isCheckedA, setCheckedA] = useState(false);
  const [isCheckedB, setCheckedB] = useState(false);

  return (
    <form>
      <Field
        name='name'
        component={RdxFormControlCheckbox}
        type='checkbox'
        label='Receive updates about Tray.io product by email'
        checked={isCheckedA}
        onChange={() => setCheckedA(!isCheckedA)}
      />
      <Field
        name='role'
        component={RdxFormControlCheckbox}
        type='text'
        label='Receive communication by email for other products created by the Tray.io team'
        checked={isCheckedB}
        onChange={() => setCheckedB(!isCheckedB)}
      />
    </form>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchProps = (dispatch: Dispatch) => ({
  userData: () => dispatch(userDetails()),
});

const connectForm = connect(mapStateToProps, mapDispatchProps)(PrivacyCheckBox);

export const PrivacyChecked = reduxForm({
  form: "UserDetails",
  destroyOnUnmount: false,
})(connectForm);
