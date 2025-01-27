import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlEncoder } from "../../utils";
import Closure from "../ui/closure";
import EventLoop from "../ui/eventLoop";
import JavascriptEngine from "../ui/jsEngine";
import JavascriptPromise from "../ui/promise";

const BasicJsConcepts = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [show, setShow] = useState(false);
  const params = useParams();

  const variants = {
    hidden: { opacity: 0, x: "20%" },
    show: {
      x: 0,
      opacity: [0, 0.2, 0.6, 0.8, 1],
      transition: {
        duration: 0.5,
      },
    },
    exit: { opacity: 0, x: "-50%" },
  };

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
              onClick={() => setSelectedTab(tab)}
              className="cursor-pointer text-blue-700 underline py-1"
              variants={liVariant}
            >
              <Link to={`${urlEncoder(tab.label)}`}>{tab.label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            exit="exit"
            key={selectedTab.label}
          >
            {selectedTab.component}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicJsConcepts;

const tabs = [
  { label: "What is Promise?", component: <JavascriptPromise /> },
  {
    label: "Let's talk about Event Loop in Javascript",
    component: <EventLoop />,
  },
  { label: "Hmmm, Closure?", component: <Closure /> },
  { label: "Js-Engine 😡", component: <JavascriptEngine /> },
];
