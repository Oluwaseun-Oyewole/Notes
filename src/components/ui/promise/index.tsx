import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const styles = {
  bold: "font-extrabold",
  font: "leading-8 text-sm font-medium min-h-[280px] lg:min-h-[350px] my-10 flex items-center flex-col justify-center lg:pt-10",
  outerPT: "pt-10",
  innerPT: "pt-3",
  spacingY: "",
};

// const rgbaColors: string[] = [
//   "rgba(255, 99, 132, 0.8)", // Light Red
//   "rgba(54, 162, 235, 0.7)", // Light Blue
//   "rgba(255, 206, 86, 0.9)", // Yellow
//   "rgba(75, 192, 192, 0.6)", // Teal
//   "rgba(153, 102, 255, 0.8)", // Purple
//   "rgba(255, 159, 64, 0.7)", // Orange
//   "rgba(99, 255, 132, 0.5)", // Light Green
//   "rgba(201, 203, 207, 0.9)", // Gray
// ];

// https://i.sstatic.net/zb7nd.png promise image from stackoverflow
const JavascriptPromise = () => {
  const [currentCode, setCurrentCode] = useState<ReactNode>(
    <div>Promises in Javascript</div>
  );

  function PromiseContent({
    section,
    code,
    title,
  }: {
    section: ReactNode;
    code: ReactNode;
    title?: string;
    index?: number;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "center start"],
    });
    const [scrollValue, setScrollValue] = useState(0);
    // const height = useTransform(scrollYProgress, [0, 0.5], ["100%", "100%"]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest < 0.3) setScrollValue(0);
      else if (latest > 0.3 && latest < 0.5) setScrollValue(1);
      else if (latest > 0.5 && latest < 0.8) setScrollValue(2);
      else setScrollValue(3);
    });

    useEffect(() => {
      if (scrollValue === 1) {
        setCurrentCode(code);
      }
    }, [scrollValue]);

    return (
      <motion.div ref={ref}>
        <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[75%] mx-auto">
          <div
            className={`${styles.font} relative`}
            // style={{ background: rgbaColors[index] }
          >
            {section}
            {title}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row Merriweather relative">
      <aside className="w-full basis-1/2 fixed z-10 lg:sticky top-0 h-[350px] lg:h-screen overflow-y-scroll bg-gray-800 flex items-center justify-center">
        <div className="">{currentCode}</div>
      </aside>
      <div className="top-[400px] lg:top-0 relative basis-1/2 w-full overflow-y-scroll bg-[#FAF9F5] text-black lg:pr-40 lg:py-50">
        <h1 className="max-w-[90%] md:max-w-[70%] lg:max-w-[75%] mx-auto text-3xl md:text-4xl font-extrabold">
          Javascript Promises
        </h1>

        <div className="relative">
          {promises.map((promise) => (
            <PromiseContent
              key={promise.id}
              section={promise.section}
              title={promise.title}
              code={promise.code}
              index={promise.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavascriptPromise;

const promises = [
  {
    id: 0,
    code: "Promises in Javascript",
    title: "",
    section: (
      <p>
        A Promise is a <span className={styles.bold}>RESULT OBJECT</span> that
        handles asynchronous actions. The terms
        <span className={styles.bold}> RESULT OBJECT</span> represent the
        eventual completion or failure of asynchronous tasks and it's resulting
        values.
      </p>
    ),
  },
  {
    id: 1,
    title: "",
    code: "Promises in Javascript",
    section: (
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
  },

  {
    id: 2,
    section: (
      <p className={""}>
        "<span className={styles.bold}>Synchronous</span> JS, Each line of code
        must finish executing before the next line begins. This can lead to
        blocking behavior, where the application becomes unresponsive if a
        particular operation takes time to complete."
      </p>
    ),
    code: (
      <div className="text-sm">
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

  {
    id: 3,
    title: "",
    section: (
      <p className={""}>
        "<span className={styles.bold}>Asynchronous</span> JS, run code in
        parallel. This means that while one operation is waiting (e.g., for data
        from a server), other operations can continue executing. This is
        non-blocking behavior".
      </p>
    ),
    code: (
      <div className="text-sm">
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
];

// const ref = useRef(null);
// const isInView = useInView(ref, { amount: 1 });

// useEffect(() => {
//   if (isInView) {
//     setCurrentCode(code);
//   }
// }, [isInView, code, setCurrentCode]);

// const li1Opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0]);

// const imageVariants = {
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };
