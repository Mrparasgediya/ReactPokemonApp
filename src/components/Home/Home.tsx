import { Outlet, useNavigate } from "react-router";
import SearchIcon from "../SearchIcon/SearchIcon";
import { FormEventHandler, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const searchPokemonFormSubmitHandler: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    if (searchInputRef.current) {
      navigate(`/pokemons/${searchInputRef.current.value}`);
    }
  };
  return (
    <>
      <h1 style={{ textDecoration: "none" }}>
        <Link to="/">PokeApi</Link>
      </h1>
      <form onSubmit={searchPokemonFormSubmitHandler}>
        <input
          type="text"
          placeholder="Enter id or name"
          ref={searchInputRef}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
