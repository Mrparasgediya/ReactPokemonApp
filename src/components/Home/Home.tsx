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
      <nav className="border mb-5 p-4">
        <div
          style={{ height: "100% !important" }}
          className="p-0 container d-flex items-center justify-content-between "
        >
          <Link to="/">PokeApi</Link>
          <form onSubmit={searchPokemonFormSubmitHandler}>
            <input
              type="text"
              placeholder="Enter id or name"
              ref={searchInputRef}
            />
            <button type="submit" className="">
              <SearchIcon />
            </button>
          </form>
        </div>
      </nav>

      <Outlet></Outlet>
    </>
  );
};

export default Home;
