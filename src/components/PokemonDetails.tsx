import { useEffect, useState } from "react";
import Pokemon from "../types/Pokemon";
import { Link, useParams } from "react-router-dom";
import { fetchPokemonById } from "../PokemonApi";

export const PokemonDetails = () => {
  const { nameOrId } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  const fetchPokemonDetails = async () => {
    if (nameOrId) {
      try {
        const res = await fetchPokemonById(+nameOrId);
        setPokemon(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return pokemon ? (
    <div className="card mx-auto my-5 shadow " style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={
          pokemon.imageUrl ||
          "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png"
        }
        alt={`${pokemon.name}-poster`}
      />
      <ul className="card-body text-center list-unstyled">
        <li>Name:{pokemon.name}</li>
        <li>Weight:{pokemon.weight}</li>
        <li>Height:{pokemon.height}</li>

        <li className="my-2 mx-auto">
          {pokemon.types.map((currPokemonType, idx) => {
            return (
              <span key={idx} className="badge bg-secondary mx-1 bg-info">
                {currPokemonType}
              </span>
            );
          })}
        </li>
        <li>
          <Link to="/">
            <button className="btn btn-secondary mt-3">Go Back</button>
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <div>Loading Pokemon</div>
  );
};
