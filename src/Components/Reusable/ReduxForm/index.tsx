import React from "react";
import {
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

export interface ReduxFormProps {
  input?: any;
  meta?: any;
  name?: string;
  label?: string;
  required?: boolean;
  description?: string;
  defaultValue?: any;
  type?: string;
  title?: string;
  options?: string[];
  checked?: boolean;
  onBlur?: () => void;
}

export const RdxInput = ({ input, meta }: ReduxFormProps) => {
  const content = <Input {...input} />;
  return content;
};
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const asyncValidation = (e: MouseEvent, payload: any, values: formState) => {
//   return sleep(1000).then(() => {
//     // simulate server latency
//     if (!values.username) {
//       throw new SubmissionError({
//         username: "Your username is missing",
//         _error: "Your username is missing",
//       });
//     } else if (!values.password) {
//       throw new SubmissionError({
//         password: "Your password is missing",
//         _error: "Your password is missing",
//       });
//     } else if (!values.email) {
//       throw new SubmissionError({
//         email: "Your email is missing",
//         _error: "Your email is missing",
//       });
//     }
//   });
// };

export const RdxFormControlInput = ({
  input,
  meta,
  name,
  label,
  required,
  description,
  defaultValue,
  type,
}: ReduxFormProps) => {
  const content = (
    <FormControl margin='normal' required={required} error={meta.touched && !!meta.error}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {/**
       * Required has been set to false to ensure it doesn't trigger
       * browser's native required field validation
       */}
      <Input
        id={name}
        name={name}
        type={type}
        required={false}
        onChange={input.onChange}
        onBlur={input.onBlur}
      />
      {meta.touched && meta.error ? <p style={{ color: "red" }}>{meta.error}</p> : null}
      {description && (
        <FormHelperText id='component-description' error={false}>
          {description}
        </FormHelperText>
      )}
    </FormControl>
  );
  return content;
};
export const RdxFormControlCheckbox = ({ input, name, meta, label, checked }: ReduxFormProps) => {
  const content = (
    <FormControlLabel
      name={name}
      labelPlacement='end'
      control={<Checkbox onChange={input.onChange} checked={checked}></Checkbox>}
      label={label}
    />
  );
  return content;
};
