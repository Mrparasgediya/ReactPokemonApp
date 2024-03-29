import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import PowerList from "../components/PowerList";
import { Power } from "../types/Power";

const PowersPage = () => {
  const [isPowersLoading, setIsPowersLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [powers, setPowers] = useState<Power[]>([]);
  const fetchPowers = async () => {
    try {
      const fetchedPowers: any[] = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/powers`
      );
      setPowers(
        fetchedPowers.map(
          (currPower): Power => ({
            id: currPower.id,
            name: currPower.name,
          })
        )
      );
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsPowersLoading(false);
    }
  };

  const removePower = (id: number) => {
    setPowers(powers.filter((currPower) => currPower.id !== id));
  };

  useEffect(() => {
    fetchPowers();
  }, []);

  return (
    <ContentContainer
      isLoading={isPowersLoading}
      loadingText="Loading Powers..."
      error={error}
    >
      <div className="space-y-10 max-sm:w-11/12 w-96 mx-auto">
        <div className="glass rounded-md shadow-md px-2 py-1 flex items-center justify-between">
          <span className="font-bold text-lg">Powers</span>
          <Link to="/powers/new">
            <button className="btn--gradient btn">Add Power</button>
          </Link>
        </div>
        <PowerList powers={powers} removePowerHandler={removePower} />
      </div>
    </ContentContainer>
  );
};

export default PowersPage;
