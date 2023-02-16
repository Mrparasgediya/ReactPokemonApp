import axios from "axios";
import { FC, FormEventHandler, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Power } from "../types/Power";
import FormInput from "./FormInput";
import PokemonPowerInput from "./PokemonPowerInput";

const AddPokemonForm: FC<{ powers: Power[] }> = ({ powers }) => {
  const navigate = useNavigate();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageUrlInputRef = useRef<HTMLInputElement>(null);
  const [selectedPowers, setSelectedPowers] = useState<number[]>([]);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (nameInputRef.current && imageUrlInputRef.current) {
      try {
        if (!selectedPowers.length) {
          throw new Error("Invalid power");
        }
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/pokemon`, {
          name: nameInputRef.current.value,
          powers: selectedPowers,
          imageUrl: imageUrlInputRef.current.value,
        });
        alert("pokemon added successfully");
        nameInputRef.current.value = "";
        imageUrlInputRef.current.value = "";
        navigate("/");
      } catch (error) {
        alert((error as any).message);
      }
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="px-4 h-full flex flex-col gap-2"
    >
      <FormInput
        ref={nameInputRef}
        labelText="Name"
        inputProps={{
          id: "name",
          type: "text",
          required: true,
          tabIndex: 1,
        }}
      />
      <FormInput
        ref={imageUrlInputRef}
        labelText="Image Url"
        inputProps={{
          id: "imageUrl",
          type: "text",
          required: true,
          tabIndex: 2,
        }}
      />
      <PokemonPowerInput
        powers={powers}
        selectedPowers={selectedPowers}
        setSelectedPowers={setSelectedPowers}
      />
      <button className="self-center px-2 py-1 rounded-md btn btn--gradient">
        Add Pokemon
      </button>
    </form>
  );
};

export default AddPokemonForm;
