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
  value?: any;
}

export const RdxInput = ({ input, meta }: ReduxFormProps) => {
  const content = <Input {...input} />;
  return content;
};

export const RdxFormControlInput = ({
  input,
  meta,
  name,
  label,
  required,
  description,
  defaultValue,
  type,
  value,
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
        value={value}
      />
      {meta.touched && !!meta.error ? (
        <span style={{ border: "1px solid red" }}>{meta.error}</span>
      ) : null}
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
