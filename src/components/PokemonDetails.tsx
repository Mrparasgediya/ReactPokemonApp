import { Link, useParams } from "react-router-dom";
import usePokemonDetailsApi from "../hooks/usePokemonDetailsApi";
import ContentContainer from "./ContentContainer";

export const PokemonDetails = () => {
  const { nameOrId } = useParams();
  const { isLoading, error, pokemon } = usePokemonDetailsApi(nameOrId);

  return (
    <ContentContainer isLoading={isLoading} error={error}>
      {pokemon ? (
        <div
          className="glass p-4 rounded-md mx-auto"
          style={{ width: "18rem" }}
        >
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
                <button className="btn btn--animate btn--gradient">
                  Go Back
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>Pokemon not found</div>
      )}
    </ContentContainer>
  );
};
