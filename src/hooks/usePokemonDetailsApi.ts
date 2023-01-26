import { useEffect, useState } from "react";
import Pokemon from "../types/Pokemon";
import axios from "axios";

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
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idOrName}`
      );
      const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        types: data.types.map((currType: any) => currType.type.name),
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
