import { useParams } from "react-router-dom";
import BasicJsConcepts from "../../components/details/basic-js-concepts";

const TopicsDetails = () => {
  const params = useParams();
  console.log(params);

  function renderDetailsComponent() {
    switch (params?.detail) {
      case "Things-to-know-for-javascript-developers":
        return <BasicJsConcepts />;

      default:
        return "details";
    }
  }
  return <div>{renderDetailsComponent()}</div>;
};

export default TopicsDetails;
