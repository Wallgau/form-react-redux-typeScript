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
      <div>
        <NextButton />
      </div>
    </Body>
  );
};

export default UserDetailsComponent;
