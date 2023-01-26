import "./App.css";
import PokemonCardsContainer from "./components/PokemonCardsContainer";
import usePokemonApi from "./hooks/usePokemonApi";

function App() {
  const { error, pokemons, isLoading } = usePokemonApi();

  if (isLoading) {
    return <div>Loading Pokemons</div>;
  }

  if (error) {
    return <div className="text-danger fs-1 text-center">Error: {error}</div>;
  }

  if (pokemons && pokemons.length) {
    return <PokemonCardsContainer pokemons={pokemons} />;
  }

  return null;
}

export default App;
