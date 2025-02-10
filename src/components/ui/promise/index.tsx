import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import asyncCode from "../../../assets/async.jpeg";
import promiseResponse from "../../../assets/promise-response.jpeg";
import promise from "../../../assets/promise.jpeg";
import promiseReject from "../../../assets/promiseReject.jpeg";
import promiseImage from "../../../assets/resolve.jpeg";
import syncCode from "../../../assets/sync.jpeg";

const styles = {
  bold: "font-extrabold",
  font: "leading-8 text-sm font-medium min-h-[280px] lg:min-h-[250px] my-10 flex items-center flex-col justify-center lg:pt-10",
  outerPT: "pt-10",
  innerPT: "pt-3",
  spacingY: "",
};

const rgbaColors: string[] = [
  "rgba(255, 99, 132, 0.8)", // Light Red
  "rgba(54, 162, 235, 0.7)", // Light Blue
  "rgba(255, 206, 86, 0.9)", // Yellow
  "rgba(75, 192, 192, 0.6)", // Teal
  "rgba(153, 102, 255, 0.8)", // Purple
  "rgba(255, 159, 64, 0.7)", // Orange
  "rgba(99, 255, 132, 0.5)", // Light Green
  "rgba(201, 203, 207, 0.9)", // Gray
];

const JavascriptPromise = () => {
  const [currentImage, setCurrentImage] = useState<{
    one: ReactNode;
    two: ReactNode;
  } | null>(null);

  function PromiseContent({
    section,
    title,
    imageSources,
  }: {
    section: ReactNode;
    title?: string;
    imageSources?: { one?: ReactNode; two?: ReactNode };
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "center start"],
    });
    const [scrollValue, setScrollValue] = useState(0);
    // const height = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest < 0.5) setScrollValue(1);
      else if (latest > 0.5 && latest < 0.8) setScrollValue(2);
      else setScrollValue(3);
    });

    useEffect(() => {
      if (scrollValue)
        setCurrentImage({ one: imageSources?.one, two: imageSources?.two });
    }, [scrollValue]);

    return (
      <motion.div ref={ref}>
        <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[75%] mx-auto">
          <div
            className={`${styles.font} relative `}
            // style={{ background: rgbaColors[index!] }}
          >
            {/* {scrollValue >= 1 && scrollValue < 4 && (
              <motion.div
                className={`absolute top-0 -left-10 bg-gray-300 w-1.5 rounded-lg flex items-center justify-center`}
                style={{ height }}
              />
            )} */}
            <h1 className="text-2xl font-extrabold w-full pb-5">{title}</h1>
            {section}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row Merriweather relative">
      <aside className="w-full basis-1/2 fixed z-10 lg:sticky top-0 h-[350px] lg:h-screen overflow-y-scroll bg-gray-800 flex justify-center">
        <div className="flex flex-col">
          {currentImage?.one && (
            <img
              src={`${currentImage?.one}`}
              alt="code image"
              className="w-[500px] h-[400px] object-contain"
            />
          )}
          {currentImage?.two && (
            <img
              src={`${currentImage.two}`}
              alt="code image"
              className="w-[500px] h-[400px] object-contain"
            />
          )}
        </div>

        <div className="absolute top-3/4 left-1/3 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
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
              imageSources={{
                one: promise?.imageSources?.one,
                two: promise?.imageSources?.two,
              }}
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
    title: "",
    code: "Promises and Promises execution context in Javascript",
    section: (
      <div>
        <p>
          A Promise is a <span className={styles.bold}>RESULT OBJECT</span> that
          handles asynchronous actions. The terms
          <span className={styles.bold}> RESULT OBJECT</span> represent the
          eventual completion or failure of asynchronous tasks and it's
          resulting values.
        </p>
      </div>
    ),
  },

  {
    id: 1,
    title: "Promise States",
    imageSources: {
      one: promise,
      two: promiseImage,
    },
    section: (
      <div className="w-full">
        <div>
          <p>There are 3 states of promises</p>
          <p>
            1. <span className="font-extrabold">Pending</span> - Initial state
          </p>
          <p>
            2. <span className="font-extrabold">Fulfilled</span> - operation
            resolves successfully. It holds the response value
          </p>
          <p>
            3. <span className="font-extrabold">Rejected</span> - operation
            failed. It holds the error value
          </p>
        </div>

        <div className="pt-10">
          <h2 className="text-xl font-extrabold w-full pb-2">
            Promise Invocation processes
          </h2>
          <p className="font-extrabold">
            Note: When a promise constructor is invoked, the promise state is
            pending.
          </p>
          <div className="py-6">
            <p>
              Behind the scene, a promise object is created and this include
              several internal slots which are:
            </p>
            <ul className="font-bold pt-2" id="promiseObject">
              <li> [[PromiseState]],</li>
              <li> [[PromiseResult]],</li>
              <li> [[PromiseIsHandled]],</li>
              <li>[[PromiseFulfillReactions]],</li>
              <li>[[PromiseRejectReactions]]</li>
            </ul>
          </div>

          <div className="py-6">
            <p>
              a promise record is also created with added functionality that
              allows promises to be accepted or rejected.
            </p>
            <p>
              It keeps track of the
              <span className="font-bold pl-1">[[PromiseState]]</span>,
              <span className="font-bold pl-1">[[PromiseResult]] </span>
              and starts your async operation.
            </p>
          </div>

          <div className="py-6">
            <h1 className="text-xl font-extrabold w-full pb-2">
              Promise Resolution
            </h1>
            <p>
              We can simply resolve or reject a promise by calling the promise
              executor functions of{" "}
              <span className="font-bold pl-1">reject</span> or{" "}
              <span className="font-bold pl-1">resolve</span>.
            </p>
            <p className="pt-5">
              On <span className="font-bold pl-1">resolve</span> the
              <span className="font-bold px-1">[[PromiseState]]</span>
              is set from "pending" to "fulfilled" and{" "}
              <span className="font-bold pl-1">[[PromiseResult]] </span> is set
              to the value in our resolve function. Same process for "reject".
            </p>
          </div>
          <div className="py-6">
            <h2 className="text-lg font-extrabold w-full pb-2">Quick Note:</h2>
            <div>
              <p>
                For <span className="font-bold pl-1">Pending</span>,
                <span> [[PromiseState]] is pending,</span>
                <span> [[PromiseResult]] is undefined.</span>
              </p>

              <p className="py-2">
                For <span className="font-bold pl-1">Resolve</span>,
                <span> [[PromiseState]] is fulfilled,</span>
                <span> [[PromiseResult]] is resolve or fulfilled value.</span>
              </p>

              <p>
                For <span className="font-bold pl-1">Reject</span>,
                <span> [[PromiseState]] is rejected,</span>
                <span> [[PromiseResult]] is reject value.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 2,
    title: "Getting Promise Response",
    imageSources: {
      one: promiseResponse,
      two: promiseReject,
    },
    section: (
      <div className="w-full">
        <div>
          <p>
            After a promise has been invoked, to get the return value of the
            resolve and reject executor functions, we need to chain a{" "}
            <span className="font-bold">.then or .catch</span> method to the
            promise.s
          </p>
        </div>
        <div className="py-6">
          <p>But what really happens behind the screen.</p>
          <p>
            Remember when a promise invoked, some objects were created, which
            includes:{" "}
            <span className="font-bold pt-2">
              <span>[[PromiseFulfillReactions]]</span> and
              <span> [[PromiseRejectReactions]]</span>
            </span>
          </p>
          <p className="py-4">
            <span className="font-bold pt-2">
              [[PromiseFulfillReactions]] stores the functions (callbacks) that
              should be executed when the Promise is fulfilled. When resolve()
              is called on a Promise, the callback handler is executed.
            </span>
          </p>
          <p className="py-4">
            <span className="font-bold pt-2">
              [[PromiseRejectReactions]] stores the functions (callbacks) that
              should be executed when the Promise is rejected. When rejected()
              is called on a Promise, the callback handler is executed.
            </span>
          </p>
        </div>
        <div className="pt-2 text-sm leading-8 flex flex-col gap-2">
          <h2 className="text-xl font-extrabold w-full pb-1"> Overview</h2>
          <p>
            1. The executor function passed to the promise constructor is
            invoked immediately.
          </p>
          <p>
            2. The executor function executes the async operation and a promise
            object is created.
          </p>
          <p>
            3. Once the The async operation is completed, the promise is either
            resolved or rejected
          </p>
          <p>
            4.The state of the promise moved from
            <span className="font-bold pl-1">pending</span> to either
            <span className="font-bold pl-1">fulfilled or rejected.</span>
          </p>
          <p>
            5. Once the promise state has moved to either fulfilled or rejected,
            the callback functions stored in the promise object are invoked. If
            the promise was resolved, the{" "}
            <span className="font-extrabold">then</span> callbacks are invoked.
            If the promise was rejected, the{" "}
            <span className="font-extrabold">catch</span> callbacks are invoked.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: "Promise, Async and the microtask queue",
    imageSources: {
      one: promiseResponse,
      two: promiseReject,
    },
    section: (
      <div className="w-full">
        <div>
          <p>
            After a promise has been invoked, to get the return value of the
            resolve and reject executor functions, we need to chain a{" "}
            <span className="font-bold">.then or .catch</span> method to the
            promise.s
          </p>
        </div>
        <div className="py-6">
          <p>But what really happens behind the screen.</p>
          <p>
            Remember when a promise invoked, some objects were created, which
            includes:{" "}
            <span className="font-bold pt-2">
              <span>[[PromiseFulfillReactions]]</span> and
              <span> [[PromiseRejectReactions]]</span>
            </span>
          </p>
          <p className="py-4">
            <span className="font-bold pt-2">
              [[PromiseFulfillReactions]] stores the functions (callbacks) that
              should be executed when the Promise is fulfilled. When resolve()
              is called on a Promise, the callback handler is executed.
            </span>
          </p>
          <p className="py-4">
            <span className="font-bold pt-2">
              [[PromiseRejectReactions]] stores the functions (callbacks) that
              should be executed when the Promise is rejected. When rejected()
              is called on a Promise, the callback handler is executed.
            </span>
          </p>
        </div>
        <div className="pt-2 text-base leading-8 flex flex-col gap-3">
          <h2 className="text-lg font-extrabold w-full pb-2"> Overview</h2>
          <p>
            1. The executor function passed to the promise constructor is
            invoked immediately.
          </p>
          <p>
            2. The executor function executes the async operation and a promise
            object is created.
          </p>
          <p>
            3. Once the The async operation is completed, the promise is either
            resolved or rejected
          </p>
          <p>
            4.The state of the promise moved from
            <span className="font-bold pl-1">pending</span> to either
            <span className="font-bold pl-1">fulfilled or rejected.</span>
          </p>
          <p>
            5. Once the promise state has moved to either fulfilled or rejected,
            the callback functions stored in the promise object are invoked. If
            the promise was resolved, the{" "}
            <span className="font-extrabold">then</span> callbacks are invoked.
            If the promise was rejected, the{" "}
            <span className="font-extrabold">catch</span> callbacks are invoked.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "",
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
    id: 4,
    imageSources: {
      one: syncCode,
    },
    section: (
      <p className={""}>
        "<span className={styles.bold}>Synchronous</span> JS, Each line of code
        must finish executing before the next line begins. This can lead to
        blocking behavior, where the application becomes unresponsive if a
        particular operation takes time to complete."
      </p>
    ),
  },

  {
    id: 5,
    title: "",
    imageSources: {
      one: asyncCode,
    },
    section: (
      <p className={""}>
        "<span className={styles.bold}>Asynchronous</span> JS, run code in
        parallel. This means that while one operation is waiting (e.g., for data
        from a server), other operations can continue executing. This is
        non-blocking behavior".
      </p>
    ),
  },

  {
    id: 6,
    title: "Promises States",
    imageSources: {
      one: asyncCode,
    },
    section: (
      <p className={""}>
        "<span className={styles.bold}>Asynchronous</span> JS, run code in
        parallel. This means that while one operation is waiting (e.g., for data
        from a server), other operations can continue executing. This is
        non-blocking behavior".
      </p>
    ),
  },
];
