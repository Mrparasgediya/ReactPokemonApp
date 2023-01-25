import "./App.css";
import { useState, useEffect } from "react";
import PokemonCardsContainer from "./components/PokemonCardsContainer/PokemonCardsContainer";
import { fetchPokemons } from "./PokemonApi";
import Pokemon from "./types/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchPokemonsData = async () => {
    try {
      const response: Pokemon[] = await fetchPokemons();
      setPokemons(response);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  if (pokemons.length) {
    return <PokemonCardsContainer pokemons={pokemons} />;
  } else {
    if (error) {
      return <div className="text-danger fs-1 text-center">Error: {error}</div>;
    } else {
      return <div>Loading Pokemons</div>;
    }
  }
}

export default App;
