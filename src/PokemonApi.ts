import axios from "axios";
import Pokemon from "./types/Pokemon";

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const pokemons: Pokemon[] = data.results.map(
    (currPokemon: any, index: number): Pokemon => {
      return {
        height: 0,
        name: currPokemon.name,
        id: index + 1,
        types: [],
        weight: 0,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
      };
    }
  );
  return pokemons;
};

export const fetchPokemonByIdOrName = async (
  nameOrId: string
): Promise<Pokemon> => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
  );
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,

    types: data.types.map((currType: any) => currType.type.name),
  };
};
