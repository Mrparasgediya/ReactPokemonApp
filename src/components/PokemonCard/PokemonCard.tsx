import { FC } from "react";
import Pokemon from "../../types/Pokemon";
import "./PokemonCard.css";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="card col-xl-2 col-lg-3  col-md-3 col-sm-5 shadow ">
      <img
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt="pokemon"
        height="170"
      />
      <div className="card-body text-center">
        <h4 className="card-title">{pokemon.name}</h4>
        <Link to={`/details/${pokemon.id}`}>
          <button className="btn btn-info">show Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
