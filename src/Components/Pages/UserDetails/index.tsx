import React from "react";
import { Body } from "../styled";
import NextButton from "../../Reusable/Buttons/NextButton/index";
import { UserDetailsForm } from "../../ContactForm/index";

const UserDetailsComponent = () => {
  // const submit = (values: string) => {
  // console.log(values);
  // };
  return (
    <Body>
      <UserDetailsForm />
    </Body>
  );
};

export default UserDetailsComponent;
