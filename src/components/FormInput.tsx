import React, { HTMLInputTypeAttribute, forwardRef, ForwardedRef } from "react";
import FormInputContainer from "./FormInputContainer";
import FormInputLabel from "./FormInputLabel";

interface IFormInput {
  labelText: string;
  inputProps: {
    id: string;
    type: HTMLInputTypeAttribute;
    required?: boolean;
    tabIndex?: number;
  };
}

const FormInput = (
  { labelText, inputProps }: IFormInput,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <FormInputContainer>
      <FormInputLabel inputId={inputProps.id} labelText={labelText} />
      <input
        ref={ref}
        className="px-2 py-1 roudned-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded-sm"
        {...inputProps}
      />
    </FormInputContainer>
  );
};

export default forwardRef(FormInput);
