import { useParams } from "react-router-dom";
import Closure from "../../components/ui/closure";
import EventLoop from "../../components/ui/eventLoop";
import JavascriptEngine from "../../components/ui/jsEngine";
import JavascriptPromise from "../../components/ui/promise";

const SubDetails = () => {
  const params = useParams();
  function renderDetailsComponent() {
    switch (params?.sub_details) {
      case "What-is-Promise":
        return <JavascriptPromise />;
      case "Let's-talk-about-Event-Loop-in-Javascript":
        return <EventLoop />;
      case "Js-Engine-😡":
        return <JavascriptEngine />;
      case "Hmmm-Closure":
        return <Closure />;
      default:
        return "details";
    }
  }
  return <div>{renderDetailsComponent()}</div>;
};

export default SubDetails;
