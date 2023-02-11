import axios from "axios";
import { FormEventHandler, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const AddPowerForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (nameInputRef.current) {
      try {
        const name = nameInputRef.current.value;
        setIsLoading(true);
        await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/powers`,
          { name },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        nameInputRef.current.value = "";
        navigate("/powers");
      } catch (error) {
        alert(`Error: ${(error as Error).message}`);
      } finally {
        setIsLoading(false);
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
      <button
        disabled={isLoading}
        className="self-center px-2 py-1 rounded-md btn btn--gradient"
      >
        Add Power
      </button>
    </form>
  );
};

export default AddPowerForm;
