import React from "react";
import { connect } from "react-redux";
import { Paragraph, Complete } from "./styled";
import BackButton from "../../Reusable/Buttons/BackButton/index";
import CheckIcon from "@material-ui/icons/Check";
import { formState } from "../../../store/UserDetails/types";
import { PrivacyState } from "../../../store/Privacy/types";

const Completed = ({
  username,
  role,
  email,
  password,
  privacyOne,
  privacyTwo,
}: formState & PrivacyState) => {
  const privacy_One = privacyOne
    ? `${username} choose to receive updates about Tray.io product by email`
    : `${username} doesn't want to receive updates about Tray.io product by email`;

  const privacy_Two = privacyTwo
    ? `${username} choose to receive communication by email for other products created by the Tray.io team`
    : `${username} doesn't want to receive communication by email for other products created by the Tray.io team`;

  console.log(
    `${username} is working as a ${role}, his/her email is ${email} with password: ${password}, ${privacy_One}, ${privacy_Two}`,
  );
  return (
    <Complete>
      <div className='complete'>
        <CheckIcon />
      </div>
      <Paragraph>
        <p>Please verify your email, you should have received an email from us already</p>
      </Paragraph>
      <BackButton />
    </Complete>
  );
};

const mapStateToProps = (state: any) => ({
  username: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.username,
  role: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.role,
  email: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.email,
  password: state.formReducer.UserDetails.values && state.formReducer.UserDetails.values.password,
  privacyOne: state.privacyChecked.privacyOne,
  privacyTwo: state.privacyChecked.privacyTwo,
});

export default connect(mapStateToProps)(Completed);
