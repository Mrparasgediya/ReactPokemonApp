import { FC } from "react";
import { Power } from "../types/Power";
import PowerListItem from "./PowerListItem";

const PowerList: FC<{
  powers: Power[];
  removePowerHandler: (powerId: number) => void;
}> = ({ powers, removePowerHandler }) => {
  return (
    <ul className="flex flex-col gap-3 items-center">
      {powers.map((currrPower, idx) => (
        <PowerListItem
          key={idx}
          power={currrPower}
          removePowerFromList={removePowerHandler.bind(this, currrPower.id)}
        />
      ))}
    </ul>
  );
};

export default PowerList;
