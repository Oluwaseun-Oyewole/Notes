import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { urlEncoder } from "../../utils";

const BasicJsConcepts = () => {
  const ulVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0.5, 0.8, 1],
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const liVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="flex h-screen">
      <div className="basis-1/2 bg-gray-800 flex items-center justify-center">
        Image
      </div>

      <div className="basis-1/2 bg-gray-100 text-black relative">
        <motion.ul
          className="absolute left-1/2 top-1/2 -translate-x-1/2 text-xl"
          variants={ulVariant}
          initial="hidden"
          animate="show"
        >
          {tabs.map((tab) => (
            <motion.li
              key={tab.label}
              className="cursor-pointer text-blue-700 underline py-1"
              variants={liVariant}
            >
              <Link to={`${urlEncoder(tab.label)}`}>{tab.label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default BasicJsConcepts;

const tabs = [
  { label: "What is Promise?" },
  {
    label: "Let's talk about Event Loop in Javascript",
  },
  { label: "Hmmm, Closure?" },
  { label: "Js-Engine 😡" },
];
