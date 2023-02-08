import PokemonCard from "./PokemonCard";
import usePokemonApi from "../hooks/usePokemonApi";
import ContentContainer from "./ContentContainer";

const PokemonCardsContainer = () => {
  const { pokemons, isLoading, error } = usePokemonApi();
  return (
    <ContentContainer isLoading={isLoading} error={error}>
      <div className="grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemons.map((currPokemon, idx) => (
          <PokemonCard pokemon={currPokemon} key={idx} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default PokemonCardsContainer;
