import { Link } from "react-router-dom";
import SearchPokemon from "./SearchPokemon";

const Navbar = () => {
  return (
    <nav className="h-16 fixed z-50 top-0 left-0 right-0 glass ">
      <div className="p-0 flex items-center justify-between h-full app-container">
        <Link
          className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500  to-violet-500 font-extrabold text-2xl"
          to="/"
        >
          PokeApi
        </Link>
        <SearchPokemon />
      </div>
    </nav>
  );
};

export default Navbar;
