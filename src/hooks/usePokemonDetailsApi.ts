import axios from "axios";
import { useEffect, useState } from "react";
import { addResponseInterceptor } from "../reposeInterceptors";
import { addRequestInterceptor } from "../requestInterceptor";
import Pokemon from "../types/Pokemon";

addRequestInterceptor();
addResponseInterceptor();

const usePokemonDetailsApi = (pokemonIdOrName: string | undefined) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const resetState = () => {
    if (!isLoading) {
      setIsLoading(true);
    }
    if (error) {
      setError(null);
    }
    if (pokemon) {
      setPokemon(undefined);
    }
  };

  const fetchPokemonDetails = async (idOrName: string | undefined) => {
    try {
      if (!idOrName) {
        throw new Error("Enter valid pokemon id or name");
      }
      resetState();
      const data: any = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/pokemon/${idOrName.toLowerCase()}`
      );
      const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        imageUrl: data.imageUrl,
        power: {
          id: data.power.id,
          name: data.power.name
        }

      };
      setPokemon(pokemon);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonDetails(pokemonIdOrName);
  }, [pokemonIdOrName]);

  return { pokemon, isLoading, error };
};

export default usePokemonDetailsApi;
