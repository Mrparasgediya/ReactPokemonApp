import { useRef, FormEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";

const Navbar = () => {
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
    <nav className="border mb-5 p-3 glass">
      <div
        style={{ height: "100% !important" }}
        className="p-0 container d-flex items-center justify-content-between "
      >
        <Link className="fs-5" to="/">
          PokeApi
        </Link>
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
  );
};

export default Navbar;
