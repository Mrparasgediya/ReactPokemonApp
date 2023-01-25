import { FC } from "react";
import Pokemon from "../../types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonCardsContainer.css";

interface PokemonCardsContainerProps {
  pokemon: Pokemon[];
}

const PokemonCardsContainer: FC<PokemonCardsContainerProps> = ({ pokemon }) => {
  return (
    <div className="container grid gap-3 row mx-auto my-5">
      {pokemon.map((currPokemon, idx) => (
        <PokemonCard pokemon={currPokemon} key={idx} />
      ))}
    </div>
  );
};

export default PokemonCardsContainer;
