import React, { FC, ReactElement } from "react";

const FormInputContainer: FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default FormInputContainer;
