import React, { FormEventHandler, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";

const SearchPokemon = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const searchPokemonFormSubmitHandler: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    if (searchInputRef.current) {
      const pokemonName: string = searchInputRef.current.value.toLowerCase();
      navigate(`/pokemons/${pokemonName}`);
      searchInputRef.current.value = "";
    }
  };
  return (
    <form
      className="flex items-center gap-2 relative"
      onSubmit={searchPokemonFormSubmitHandler}
    >
      <input
        tabIndex={1}
        className="shadow-md py-1 px-3 pr-10 h-9 rounded-full focus:outline-none"
        type="text"
        placeholder="Search Pokemon"
        ref={searchInputRef}
      />
      <button
        role="search"
        aria-label="Search Pokemon"
        type="submit"
        className="btn btn--gradient p-0 flex items-center justify-center rounded-full absolute top-0 bottom-0 right-0 h-9 w-9"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchPokemon;
