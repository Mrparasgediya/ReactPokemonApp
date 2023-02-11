import { useParams } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { PokemonDetails } from "../components/PokemonDetails";
import usePokemonDetailsApi from "../hooks/usePokemonDetailsApi";

const PokemonDetailsPage = () => {
  const { nameOrId } = useParams();
  const { isLoading, error, pokemon } = usePokemonDetailsApi(nameOrId);

  return (
    <ContentContainer isLoading={isLoading} error={error}>
      <PokemonDetails pokemon={pokemon} />
    </ContentContainer>
  );
};

export default PokemonDetailsPage;
