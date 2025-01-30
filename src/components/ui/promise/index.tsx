import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import jsImage from "../../../assets/javascript.jpg";
import { liVariant, ulVariant, variant } from "../../../utils/motion";

const styles = {
  bold: "font-extrabold",
  font: "py-20 leading-8 text-sm font-medium",
  outerPT: "pt-10",
  innerPT: "pt-3",
  spacingY: "pt-32",
};

// https://i.sstatic.net/zb7nd.png promise image from stackoverflow
const JavascriptPromise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [position, setPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.3) setPosition(1);
    else if (latest > 0.3 && latest < 0.5) {
      return setPosition(2);
    } else if (latest > 0.5 && latest < 0.8) {
      return setPosition(3);
    } else setPosition(4);
  });
  const li1Opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  // const li2Opacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  const isInView = useInView(ref, { once: true }); // Animate only once

  const imageVariants = {
    hidden: { x: -100, opacity: 0 }, // Start off-screen to the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const contentIsInView = useInView(contentRef, {
    amount: "some",
    once: false,
  });

  const [scrollPast, setScrollPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200 && window.scrollY < 1000) setScrollPast(true);
      else setScrollPast(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="min-h-screen">
      {promiseArray.map((promise) => {
        return (
          <div className="flex flex-col lg:flex-row Merriweather relative">
            <div className="sticky top-0 left-0 z-10 lg:relative md:basis-1/2 min-h-[400px] md:min-h-[450px] lg:min-h-screen overflow-y-scroll bg-gray-800 text-black flex items-center justify-center">
              <div className={`${scrollPast && "fixed top-[200px] left-0 "}`}>
                <motion.img
                  src={promise.promise_left_tree.imageURL}
                  alt="promise image"
                  className="w-1/2"
                  variants={imageVariants}
                  animate={contentIsInView ? "visible" : "hidden"}
                />
              </div>
            </div>
            <AnimatePresence>
              <motion.div
                className="relative md:basis-1/2 min-h-screen overflow-y-scroll bg-gray-200 text-black"
                variants={variant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <div className="md:max-w-[90%] xl:max-w-[80%] md:mx-auto px-5 md:px-0 py-10 md:py-20 lg:py-40 md:pr-14 xl:pr-32">
                  <h1 className="text-3xl md:text-4xl font-extrabold">
                    {promise.title}
                  </h1>
                  <motion.ul
                    variants={ulVariant}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.li
                      variants={liVariant}
                      initial="hidden"
                      animate="show"
                      className={styles.font}
                    >
                      {promise.promise_tree.definition}
                      <motion.div>
                        {promise.promise_tree.description.overview}
                        <div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                              opacity: [0.3, 0.5, 0.8, 1],
                              transition: { duration: 1 },
                            }}
                            viewport={{
                              amount: "some",
                              once: false,
                            }}
                            className={styles.spacingY}
                          >
                            {
                              promise.promise_tree.description.synchronous
                                .description
                            }

                            {promise.promise_tree.description.synchronous.code}
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: "-20%" }}
                            whileInView={{
                              opacity: [0.8, 1],
                              x: 0,
                              transition: { duration: 1 },
                            }}
                            viewport={{
                              amount: "some",
                              once: false,
                            }}
                            ref={contentRef}
                            className={styles.spacingY}
                          >
                            {
                              promise.promise_tree.description.asynchronous
                                .content
                            }
                            {promise.promise_tree.description.asynchronous.code}
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default JavascriptPromise;

const promiseArray = [
  {
    title: "Javascript Promises",
    id: "1",
    promise_left_tree: {
      imageURL: jsImage,
    },
    promise_tree: {
      definition: (
        <p>
          A Promise is a <span className={styles.bold}>RESULT OBJECT</span> that
          handles asynchronous actions. The terms
          <span className={styles.bold}> RESULT OBJECT</span> represent the
          eventual completion or failure of asynchronous tasks and it's
          resulting values.
        </p>
      ),
      description: {
        overview: (
          <div className={styles.spacingY}>
            <p>
              First, let's understand the concept of
              <span className={styles.bold}> synchronous</span> and
              <span className={styles.bold}> asynchronous</span> Javascript.
            </p>
            <p>
              <span className={`${styles.bold} pr-1`}>
                Javascript by design is single threaded.
              </span>
              (Always keep this in mind)
            </p>
          </div>
        ),
        introduction: (
          <p>
            First, let's understand the concept of synchronous and asynchronous
            Javascript. Javascript by design is single threaded.(Always keep
            this in mind)
          </p>
        ),
        note: (
          <p>
            <span className={styles.bold}>
              Javascript by design is single threaded.
            </span>
            (Always keep this in mind)
          </p>
        ),
        synchronous: {
          description: (
            <p className={""}>
              "<span className={styles.bold}>Synchronous</span> JS, Each line of
              code must finish executing before the next line begins. This can
              lead to blocking behavior, where the application becomes
              unresponsive if a particular operation takes time to complete."
            </p>
          ),
          code: (
            <div className={`bg-gray-100 p-5 rounded-lg mt-14`}>
              <pre>
                {`console.log("Start");
for (let i = 0; i < 1000000000000; i++) {
  // Simulating a time-consuming task
};
console.log("End");`}
              </pre>
              ),
            </div>
          ),
        },
        asynchronous: {
          slideInImage: jsImage,
          content: (
            <p className={""}>
              "<span className={styles.bold}>Asynchronous</span> JS, run code in
              parallel. This means that while one operation is waiting (e.g.,
              for data from a server), other operations can continue executing.
              This is non-blocking behavior".
            </p>
          ),
          code: (
            <div className={`bg-gray-100 p-5 rounded-lg mt-14`}>
              <pre>
                {`console.log('Task 1');
setTimeout(() => {
  console.log('Task 2');
}, 1000); // Simulate a 1-second delay
console.log('Task 3');`}
              </pre>
            </div>
          ),
        },
      },
    },
  },
];
