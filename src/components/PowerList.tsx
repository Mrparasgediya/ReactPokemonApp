import { FC } from "react";
import { Power } from "../types/Power";
import PowerListItem from "./PowerListItem";

const PowerList: FC<{
  powers: Power[];
}> = ({ powers }) => {
  return (
    <ul className="flex flex-col gap-3 items-center">
      {powers.map((currrPower, idx) => (
        <PowerListItem key={idx} power={currrPower} />
      ))}
    </ul>
  );
};

export default PowerList;
