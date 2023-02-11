import PokemonCard from "./PokemonCard";
import usePokemonApi from "../hooks/usePokemonApi";
import ContentContainer from "./ContentContainer";
import { Link } from "react-router-dom";

const PokemonCardsContainer = () => {
  const { pokemons, isLoading, error } = usePokemonApi();
  return (
    <ContentContainer isLoading={isLoading} error={error}>
      <div className="flex flex-col gap-3">
        <div className="glass p-2 rounded-md flex items-center justify-between">
          <h2 className="font-semibold text-xl">All Pokemons</h2>
          <Link to={"/pokemons/new"}>
            <button className="btn btn--gradient rounde-md">Add Pokemon</button>
          </Link>
        </div>
        <div className="grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemons.map((currPokemon, idx) => (
            <PokemonCard pokemon={currPokemon} key={idx} />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default PokemonCardsContainer;
