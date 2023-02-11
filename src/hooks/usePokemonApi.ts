import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../types/Pokemon";

const usePokemonApi = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchPokemons = async () => {
    try {
      const data: any = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/pokemon`
      );
      const pokemons: Pokemon[] = data.map((data: any): Pokemon => {
        return {
          id: data.id,
          name: data.name,
          power: {
            id: data.power.id,
            name: data.power.name
          },
          imageUrl: data.imageUrl
        }
      })
      setPokemons(pokemons);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      setPokemons([]);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, error, isLoading };
};

export default usePokemonApi;
