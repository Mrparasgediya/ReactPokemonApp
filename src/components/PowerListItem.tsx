import axios from "axios";
import { FC } from "react";
import { Power } from "../types/Power";
import XMarkIcon from "./XMarkIcon";

const PowerListItem: FC<{
  power: Power;
  removePowerFromList: (powerId: number) => void;
}> = ({ power, removePowerFromList }) => {
  const handleDeletePowerClick = async () => {
    const isToDeletePower = window.confirm(
      `Are you sure you want to delete power ${power.name}`
    );
    if (isToDeletePower) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_API_BASE_URL}/powers/${power.id}`
        );
        removePowerFromList(power.id);
      } catch (error) {
        alert(`Error: ${(error as Error).message}`);
      }
    }
  };

  return (
    <li className="glass w-full px-4 py-1 rounded-md shadow-sm flex items-center justify-between">
      <span className="font-semibold text-md capitalize">{power.name}</span>
      <button
        onClick={handleDeletePowerClick}
        className="glass--red text-gray-50 rounded-full p-1"
      >
        <XMarkIcon />
      </button>
    </li>
  );
};

export default PowerListItem;
