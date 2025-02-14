import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { urlEncoder } from "../../utils";
import { liVariant } from "../../utils/motion";

const BasicJsConcepts = () => {
  return (
    <div className="lg:flex Merriweather">
      <aside className="hidden lg:block lg:bg-gray-900 lg:basis-1/2 min-h-screen"></aside>
      <motion.ul className="px-8 md:px-20 lg:px-0 w-full lg:basis-1/2 bg-[#FAF9F5] relative py-20 lg:py-30 h-screen">
        {javascriptForDevs.map((tab) => (
          <motion.li
            key={tab.label}
            className="relative font-bold text-black lg:text-[#FAF9F5] pb-10 md:pb-14 text-sm"
            variants={liVariant}
          >
            <div className="text-xs lg:absolute lg:top-0 lg:right-[50vw] w-full lg:text-right lg:mr-20 flex items-center gap-2 lg:block">
              <p>{tab.title}</p>
              <p className="lg:pt-2">{tab.date}</p>
            </div>
            <Link to={`${urlEncoder(tab.label)}`}>
              <div className="lg:ml-20 text-black pt-1 lg:pt-0">
                <p className="font-extrabold text-lg">{tab.label}</p>
                <p className="pt-1 text-gray-500 pr-10">{tab?.description}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default BasicJsConcepts;

const javascriptForDevs = [
  {
    label: "Promises in Javascript",
    title: "THOUGHT",
    date: "2025-02-8",
    description: "How does promises work in javascript",
  },
  {
    label: "Javascript Event Loop",
    title: "PERSONAL NOTE",
    date: "2025-02-12",
    description: "A personal note on Event loop, callback queue, call stack",
  },
  {
    label: "JavaScript Engine",
    title: "PERSONAL NOTE",
    date: "2025-02-14",
    description: "Understanding JS Engine and the browser ",
  },
  {
    label: "Closure",
    title: "PERSONAL NOTE",
    date: "2025-02-13",
    description: "JavaScript Closure",
  },
  {
    label: "Currying in JavaScript",
    title: "PERSONAL NOTE",
    date: "2025-02-14",
    description: "JavaScript Closure",
  },
  {
    label: "Basic JS Questions and Answers",
    title: "PERSONAL NOTE",
    date: "2025-02-14",
    description: "Common JS Questions",
  },
];
