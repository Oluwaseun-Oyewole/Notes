import { useParams } from "react-router-dom";
import BasicJsConcepts from "../../components/details/basic-js-concepts";

const Details = () => {
  const params = useParams();

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

export default Details;
