import axios from "axios";
import { FC, FormEventHandler, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Power } from "../types/Power";
import FormInput from "./FormInput";
import FormInputContainer from "./FormInputContainer";
import FormInputLabel from "./FormInputLabel";

const AddPokemonForm: FC<{ powers: Power[] }> = ({ powers }) => {
  const navigate = useNavigate();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageUrlInputRef = useRef<HTMLInputElement>(null);
  const [selectedPower, setSelectedPower] = useState<number>(-1);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (nameInputRef.current && imageUrlInputRef.current) {
      try {
        if (selectedPower < 0 || isNaN(selectedPower)) {
          throw new Error("Invalid power");
        }
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/pokemon`, {
          name: nameInputRef.current.value,
          powerId: selectedPower,
          imageUrl: imageUrlInputRef.current.value,
        });
        alert("pokemon added successfully");
        nameInputRef.current.value = "";
        imageUrlInputRef.current.value = "";
        setSelectedPower(-1);
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
      <button className="self-center px-2 py-1 rounded-md btn btn--gradient">
        Add Pokemon
      </button>
    </form>
  );
};

export default AddPokemonForm;
