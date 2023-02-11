import axios from "axios";
import { FC, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pokemon from "../types/Pokemon";

export const PokemonDetails: FC<{ pokemon: Pokemon | undefined }> = ({
  pokemon,
}) => {
  const { nameOrId } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const handleDeleteClick = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/pokemon/${nameOrId}`
      );
      alert("Pokemon deleted successfully!");
      navigate("/");
    } catch (error) {
      alert(`Error: ${(error as any).message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="glass p-4 rounded-md mx-auto" style={{ width: "18rem" }}>
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

        <li className="my-2 mx-auto">
          <span className="badge bg-secondary mx-1 bg-info">
            {pokemon.power.name}
          </span>
        </li>
        <li className="flex items-center justify-center gap-2">
          <Link to="/">
            <button
              disabled={isDeleting}
              className="btn btn--animate btn--gradient"
            >
              Go Back
            </button>
          </Link>
          <button
            disabled={isDeleting}
            className="btn bg-red-500"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};
