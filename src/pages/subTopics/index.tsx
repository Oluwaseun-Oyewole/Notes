import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Closure from "../../components/ui/closure";
import Currying from "../../components/ui/currying";
import EventLoopsInJavascript from "../../components/ui/eventLoop";
import JavascriptEngine from "../../components/ui/jsEngine";
import BasicJsQuestions from "../../components/ui/JSQuestions";
import JavascriptPromise from "../../components/ui/promise";

const SubDetails = () => {
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollable(window.scrollY > 800);
    }
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const params = useParams();
  function renderDetailsComponent() {
    switch (params?.sub_details) {
      case "Promises-in-Javascript":
        return <JavascriptPromise />;
      case "Js-Engine-😡":
        return <JavascriptEngine />;
      case "Closure":
        return <Closure />;
      case "Currying":
        return <Currying />;
      case "Javascript-Event-Loop":
        return <EventLoopsInJavascript />;
      case "Basic-JS-Questions-and-Answers":
        return <BasicJsQuestions />;
      default:
        return "details";
    }
  }
  return (
    <div className="relative">
      {renderDetailsComponent()}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 px-2 py-1 w-[28px] text-sm rounded-full text-gray-800 bg-gray-200 shadow-lg flex items-center justify-center transition-opacity duration-300 ${
          scrollable ? "opacity-100" : "opacity-0"
        }`}
      >
        ⬆
      </button>
    </div>
  );
};

export default SubDetails;
