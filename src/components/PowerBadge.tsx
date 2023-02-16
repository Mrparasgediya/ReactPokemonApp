import React, { FC, MouseEventHandler } from "react";
import XMarkIcon from "./XMarkIcon";

const PowerBadge: FC<{
  disabled?: boolean;
  name: string;
  onRemove: MouseEventHandler<HTMLButtonElement>;
}> = ({ disabled, name, onRemove }) => {
  return (
    <span className="flex items-center justify-center gap-1 bg-gradient-to-tl from-sky-400 to-blue-500 px-3 text-white rounded-md py-1 align-middle ">
      <span className="capitalize">{name}</span>
      <button type="button" disabled={disabled} onClick={onRemove}>
        <XMarkIcon />
      </button>
    </span>
  );
};

export default PowerBadge;
