import { FC } from "react";
import Pokemon from "../types/Pokemon";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="h-80  md:h-72 px-5 py-3 glass flex flex-col  rounded-lg hover:scale-105 transition-transform">
      <img
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt="pokemon"
        className="h-full w-full object-contain"
      />
      <div className="flex item-center justify-between flex-wrap">
        <h4 className="text-2xl font-semibold first-letter:uppercase">
          {pokemon.name}
        </h4>
        <Link to={`/pokemons/${pokemon.id}`}>
          <button className=" btn btn--gradient btn--animate">View</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
