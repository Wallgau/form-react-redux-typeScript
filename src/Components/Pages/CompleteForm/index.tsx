import React from "react";
import { Paragraph, Complete } from "./styled";
import BackButton from "../../Buttons/BackButton/index";
import CheckIcon from "@material-ui/icons/Check";

const CompleteForm = () => {
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

export default CompleteForm;
