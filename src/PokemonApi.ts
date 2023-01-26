import axios from "axios";
import Pokemon from "./types/Pokemon";

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
