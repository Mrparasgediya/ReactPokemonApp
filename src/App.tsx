import "./App.css";
import { useState, useEffect } from "react";
import PokemonCardsContainer from "./components/PokemonCardsContainer/PokemonCardsContainer";
import { fetchPokemon } from "./PokemonApi";
import Pokemon from "./types/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const fetchPokemonData = async () => {
    try {
      const response: Pokemon[] = await fetchPokemon();
      setPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <>
      {pokemon.length ? (
        <PokemonCardsContainer pokemon={pokemon}></PokemonCardsContainer>
      ) : (
        <div>Loading Pokemon</div>
      )}
    </>
  );
}

export default App;
