import React, { FC } from "react";

const FormInputLabel: FC<{ inputId: string; labelText: string }> = ({
  inputId,
  labelText,
}) => {
  return (
    <label className="font-semibold text-md" htmlFor={inputId}>
      {labelText}:
    </label>
  );
};

export default FormInputLabel;
