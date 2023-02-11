import AddPowerForm from "../components/AddPowerForm";
import ContentContainer from "../components/ContentContainer";

const AddPowerPage = () => {
  return (
    <ContentContainer>
      <div className="w-80 mx-auto space-y-3 glass rounded-md p-2">
        <h2 className="font-semibold text-xl text-center">Add Power</h2>
        <AddPowerForm />
      </div>
    </ContentContainer>
  );
};

export default AddPowerPage;
