import React, { useEffect, FC, useState, useMemo } from "react";
import { Power } from "../types/Power";
import FormInputContainer from "./FormInputContainer";
import FormInputLabel from "./FormInputLabel";
import PowerBadge from "./PowerBadge";

const PokemonPowerInput: FC<{
  selectedPowers: number[];
  setSelectedPowers: React.Dispatch<React.SetStateAction<number[]>>;
  powers: Power[];
  containerClasses?: string;
}> = ({ selectedPowers, containerClasses, powers, setSelectedPowers }) => {
  const [selectedPower, setSelectedPower] = useState<number>(-1);
  const powersToDisplay = useMemo(() => {
    return selectedPowers.reduce((powersToDispaly: Power[], currPowerId) => {
      const foundPower = powers.find(
        (currPower) => currPower.id === currPowerId
      );
      if (foundPower) {
        powersToDispaly.push(foundPower);
      }
      return Array.from(powersToDispaly);
    }, []);
  }, [selectedPowers]);

  useEffect(() => {
    if (selectedPower !== -1) {
      if (!selectedPowers.includes(selectedPower)) {
        setSelectedPowers((prevPowers) => prevPowers.concat([selectedPower]));
        setSelectedPower(-1);
      }
    }
  }, [selectedPower]);

  const handlePowerRemoveClick = (powerId: number) => {
    const foundPokemonId = selectedPowers.find(
      (currPowerId) => currPowerId === powerId
    );
    if (foundPokemonId) {
      setSelectedPowers((prevSelectedPowers: number[]) =>
        prevSelectedPowers.filter((currPowerId) => currPowerId !== powerId)
      );
    }
  };

  return (
    <div className={`space-y-3 ${containerClasses}`}>
      <FormInputContainer>
        <FormInputLabel inputId="power" labelText="Power" />
        <select
          value={selectedPower}
          tabIndex={3}
          name="power"
          className="px-2 py-1 roudned-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded-sm"
          id="power"
          onChange={(e) => {
            setSelectedPower(+e.target.value);
          }}
        >
          <option value="-1">None</option>
          {powers.map((currPower, idx) => {
            return (
              <option value={currPower.id} key={idx}>
                {currPower.name}
              </option>
            );
          })}
        </select>
      </FormInputContainer>
      <div className="flex items-center gap-2 justify-center flex-wrap w-full">
        {powersToDisplay.length
          ? powersToDisplay.map((currPower) => (
              <PowerBadge
                key={currPower.id}
                name={currPower.name}
                onRemove={handlePowerRemoveClick.bind(this, currPower.id)}
              />
            ))
          : "Please select pokemon power"}
      </div>
    </div>
  );
};

export default PokemonPowerInput;
