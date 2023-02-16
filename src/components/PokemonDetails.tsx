import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pokemon from "../types/Pokemon";
import { Power } from "../types/Power";
import PokemonPowerInput from "./PokemonPowerInput";
import PowerBadge from "./PowerBadge";

export const PokemonDetails: FC<{ pokemon: Pokemon | undefined }> = ({
  pokemon,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonPowers, setPokemonPowers] = useState<Power[]>(
    pokemon?.powers || []
  );
  const [fetchedPowers, setFetchedPowers] = useState<Power[]>([]);
  const [selectedFetchedPowers, setSelectedFetchedPowers] = useState<number[]>(
    []
  );
  const [isPowerFormOpen, setIsPowerFormOpen] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/pokemon/${pokemon?.id}`
      );
      alert("Pokemon deleted successfully!");
      navigate("/");
    } catch (error) {
      alert(`Error: ${(error as any).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      const data: Power[] = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/powers`
      );
      const pokemonPowersId = pokemonPowers.map(
        (currPokemon) => currPokemon.id
      );
      setFetchedPowers(
        data.filter((currPower) => !pokemonPowersId.includes(currPower.id))
      );
      setIsPowerFormOpen(true);
    } catch (error) {
      alert(`Error: ${(error as any).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  const handleSavePokemonPowerBtnClick = async () => {
    try {
      if (!selectedFetchedPowers.length) {
        throw new Error("Please select one power to add");
      }
      setIsLoading(true);
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/pokemon/${pokemon.id}/powers`,
        {
          powers: selectedFetchedPowers,
        }
      );
      const selectedPokemons = fetchedPowers.filter((currPower) =>
        selectedFetchedPowers.includes(currPower.id)
      );
      setPokemonPowers((prevPokemonPowers) => {
        return [...prevPokemonPowers, ...selectedPokemons];
      });
    } catch (error) {
      alert(`Error: ${(error as any).message}`);
    } finally {
      setIsLoading(false);
      setIsPowerFormOpen(false);
    }
  };

  const handleRemovePowerClick = async (powerId: number) => {
    const foundPower = pokemon.powers.find(
      (currPower) => currPower.id === powerId
    );
    if (!foundPower) {
      alert("Power not found");
      return;
    }

    const deletePower = window.confirm(
      `Are you sure you want to rmove power ${foundPower.name}`
    );

    if (deletePower) {
      try {
        setIsLoading(true);
        await axios.delete(
          `${process.env.REACT_APP_API_BASE_URL}/pokemon/${pokemon.id}/powers/${foundPower.id}`
        );
        setPokemonPowers((prevPowers) => {
          return prevPowers.filter(
            (currPower) => currPower.id !== foundPower.id
          );
        });
        alert(`Power ${foundPower.name} is deleted successfully`);
      } catch (error) {
        alert(`Error ${(error as any).message}`);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div
      className="space-y-2 glass p-4 rounded-md mx-auto"
      style={{ width: "18rem" }}
    >
      <img
        className="card-img-top"
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt={`${pokemon.name}-poster`}
      />
      <ul className="card-body text-center list-unstyled">
        <li>Name:{pokemon.name}</li>
        <li className="my-2 mx-auto flex items-center gap-1 flex-wrap justify-center">
          {pokemonPowers.map((currPower, idx) => (
            <PowerBadge
              disabled={isLoading}
              name={currPower.name}
              key={idx}
              onRemove={handleRemovePowerClick.bind(this, currPower.id)}
            />
          ))}
        </li>
        <li className="flex items-center justify-center gap-2">
          <Link to="/">
            <button
              disabled={isLoading}
              className="btn btn--animate btn--gradient"
            >
              Go Back
            </button>
          </Link>
          <button
            disabled={isLoading}
            className="btn bg-red-500"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </li>
      </ul>
      <div className="">
        <button
          disabled={isLoading}
          className="px-2 py-1 rounded-md btn btn--gradient"
          onClick={fetchPokemons}
        >
          Add More Powers
        </button>
        {isPowerFormOpen && (
          <div className="w-full border-black flex items-center justify-center flex-col gap-2">
            <PokemonPowerInput
              containerClasses="w-full"
              powers={fetchedPowers}
              selectedPowers={selectedFetchedPowers}
              setSelectedPowers={setSelectedFetchedPowers}
            />
            <button
              className="px-2 py-1 rounded-md btn btn--gradient"
              onClick={handleSavePokemonPowerBtnClick}
            >
              Save Powers
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
