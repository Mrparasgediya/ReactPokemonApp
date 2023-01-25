import { FC } from "react";
import Pokemon from "../../types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonCardsContainer.css";

interface PokemonCardsContainerProps {
  pokemons: Pokemon[];
}

const PokemonCardsContainer: FC<PokemonCardsContainerProps> = ({
  pokemons,
}) => {
  return (
    <div className="container mx-auto">
      <div className="row row-cols-4 gap-4 justify-content-center">
        {pokemons.map((currPokemon, idx) => (
          <PokemonCard pokemon={currPokemon} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCardsContainer;
