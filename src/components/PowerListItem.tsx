import { FC } from "react";
import { Power } from "../types/Power";

const PowerListItem: FC<{
  power: Power;
}> = ({ power }) => {
  return (
    <li className="glass w-full px-4 py-1 rounded-md shadow-sm flex items-center justify-between">
      <span className="font-semibold text-md capitalize">{power.name}</span>
    </li>
  );
};

export default PowerListItem;
