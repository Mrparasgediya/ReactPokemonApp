import axios from "axios";
import { useEffect, useState } from "react";
import AddPokemonForm from "../components/AddPokemonForm";
import ContentContainer from "../components/ContentContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import { Power } from "../types/Power";

const AddPokemonPage = () => {
  const [powers, setPowers] = useState<Power[]>([]);

  const [isPowersLoading, setIsPowersLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchedPowers: any[] = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/powers`
        );
        setPowers(
          fetchedPowers.map((currPower: any): Power => {
            return {
              id: currPower.id,
              name: currPower.name,
            };
          })
        );
      } catch (error) {
        alert((error as Error).message);
      } finally {
        setIsPowersLoading(false);
      }
    })();
  }, []);

  return (
    <ContentContainer>
      <div className="w-80 mx-auto space-y-3 glass rounded-md p-2">
        <h2 className="font-semibold text-xl text-center">Add Pokemon</h2>
        <div
          className={`h-[260px] ${
            isPowersLoading ? "flex items-center justify-center" : ""
          }`}
        >
          {isPowersLoading ? (
            <LoadingSpinner color="purple" />
          ) : (
            <AddPokemonForm powers={powers} />
          )}
        </div>
      </div>
    </ContentContainer>
  );
};

export default AddPokemonPage;
