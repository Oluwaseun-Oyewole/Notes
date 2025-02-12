import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import geolocation from "../../../assets/geoLocation.jpeg";
import SyncPromise from "../../../assets/sycn-promise.jpeg";

const EventLoopsInJavascript = () => {
  const [currentText, setCurrentText] = useState("");
  const [isScrollable, setIsScrollable] = useState(false);
  function EventLoop({
    section,
    title,
  }: {
    section: ReactNode;
    title?: string;
    imageSources?: { one?: ReactNode; two?: ReactNode };
  }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      function handleScroll() {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          if (top <= 70) {
            setCurrentText(title!);
          }
        }
        if (window.scrollY > 200) setIsScrollable(true);
        else setIsScrollable(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (!isScrollable)
        setCurrentText("Javascript-event-loop, Call-stack, Callback-queue.");
    }, [isScrollable]);

    return (
      <div className="relative py-8 lg:py-16">
        <motion.div
          ref={ref}
          // style={{
          //   opacity: isInView ? "1" : "0",
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-lg md:text-2xl font-extrabold w-full pb-5">
            {title}
          </h1>
          <div className="lg:pr-[350px] text-sm lg:text-base"> {section}</div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="Merriweather relative">
      <div className="absolute top-0 lef-0 w-3/4 h-[35px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0  w-3/4 h-[35px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-[450px] right-0  w-2/4 h-[150px] bg-white opacity-[8%] rounded-full blur-3xl pointer-events-none" />
      <section className="max-w-[1240px] mx-auto pt-10 px-10 md:px-20">
        <div
          className={`${
            isScrollable && "py-10 sticky top-0 left-0 bg-gray-900 z-10"
          }`}
        >
          <h1 className="text-xl md:text-[30px] font-extrabold leading-10 lg:leading-14">
            {currentText}
          </h1>
        </div>
        <div className="relative w-full">
          {events.map((event) => (
            <EventLoop
              key={event.id}
              section={event.section}
              title={event.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventLoopsInJavascript;

const events = [
  {
    id: 1,
    title: "",
    section: (
      <div className="leading-8">
        <p className="font-bold">
          Note: Javascript by design is single threaded (single call stack).
        </p>
        <div className="py-4">
          <p className="py-2">
            This simply means it can only execute one task at a time, and while
            doing that, it blocks other tasks from running.
          </p>
          <p className="leading-8">
            JS on the client runs on the browser main thread and while executing
            and because it's single threaded it freezes up the UI until
            execution completes 🥶.
          </p>
          <p className="py-2">
            For example, running a time consuming computation (like the one
            below) will block the main thread until execution completes.
          </p>
        </div>
        <div className="py-4">
          <img
            src={SyncPromise}
            alt="sync image"
            className="w-[350px] object-contain rounded-lg"
          />
        </div>

        <div className="py-6">
          <p className="">
            So the question is, If Javascript is single threaded, how does it
            handle asynchronous operations ?
          </p>
          <p>A simple answer is the Event Loop.</p>
        </div>

        <div className="leading-8">
          <p>
            Note Whenever any Javascript program is run, a global execution
            context is created which get pushed to the call stack.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Call Stack",
    section: (
      <div className="leading-8">
        <p>
          It manages the execution of our javascript programs. When we invoke a
          function, an execution context is created and pushed into the call
          stack. Because Stack is LIFO(Last In First Out) structure, it's
          execute the topmost function and after execution it's execution
          context is popped off the stack.
        </p>
        <p className="py-10">
          So in simple terms,when a function is invoked, it's gets pushed into
          the call stack, inside the stack, the function is executed line by
          line and after execution, it's gets popped out of the stack.
        </p>
        <p>
          Because JS is single threaded, once a function is pushed into the call
          stack, no other function can be pushed into the stack unless the
          current function has finished execution and it's popped off the stack.
        </p>
      </div>
    ),
  },

  {
    id: 3,
    title: "Web API",
    section: (
      <div>
        <div className=" leading-8">
          <div>
            <p>
              So outside the call stack, we have our beautiful world of the
              BROWSER.I personally feel that the browser is one of the greatest
              piece of technological inventions. Whether you are running on
              chrome, or safari, edge, firebox, you can't dispute the super
              power of the BROWSER.
            </p>
            <p className="py-8">
              The browser contains the JavaScript engine and Web APIs. Different
              browser uses different engines,from chrome and edge using v8, to
              firefox using SpiderMonkey and safari using Nitro.
            </p>
            <p>
              Enough of the browser glaze, what are web API?. Web API are
              browser-provided APIs that handle asynchronous operations like
              network requests, timers, and DOM events and so on.
            </p>
            <p className="py-8">
              Web APIs essentially act as a bridge between the JavaScript
              runtime and the browser features, allowing us to access
              information and use features beyond JavaScript's own capabilities
            </p>
          </div>
          <div>
            <p className="italic">"Web API and async tasks"</p>
            <p className="pt-4">
              Some web APIs (fetch, setTimeout,etc) can allow us to handle async
              operations by offloading the longer running task to the browser
              environment without waiting for it completion, and also set up
              handlers to handle the eventual completion of this task.
            </p>
            <p className="pt-3">
              After the async task has been initiaited, it's execution context
              is popped off the call stack. Web APIs that performs async tasks
              either use a callback-based or promise-based approach.
            </p>
            <div>
              <img
                src={geolocation}
                alt=""
                className=" py-8 w-[500px] object-contain rounded-lg"
              />
              <div>
                <p>
                  Take a look at the example we have above. We are using the
                  geolocation API which is a web API provided by the browser.
                </p>
                <p className="py-8">
                  when this function is invoked, a new execution context is
                  created and pushed into the call stack. The call stack now
                  delegates this operation to the browser's geolocation API. The
                  function of the call stack is just to "register" its callbacks
                  to the Web API, which then offloads the operation to the
                  browser. The function is then popped off the Call Stack; it's
                  now the browser's responsibility and now our call stack can
                  handle other tasks.
                </p>
                <p>
                  the browser prompts the user to give the website access to
                  their location. Once the user accepts, our website can now get
                  access to their location. The API now receives the data from
                  the browser, and uses the successCallback to handle the
                  result.
                </p>
                <p className="py-8">
                  However, the successCallback can't simply get pushed onto the
                  Call Stack, as doing so could potentially disrupt an already
                  running task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    title: "Task Queue (Callback Queue)",
    section: (
      <div>
        <div className=" leading-8">
          <div>
            <p>
              Holds callbacks from completed asynchronous operations. For
              instance this successCallback is been pushed into the task queue.
              The Callback Queue is a FIFO data structure that holds the
              callbacks and event handlers of Web API. To simply put, when an
              async task finish executing, the callback is pushed into the task
              queue which will be picked up by the Event Loop and pushed into
              the Call Stack for execution.
            </p>
            <p className="pt-6">
              Let's take a look a setTimeout. The setTimeout execution context
              is created and added to the call stack. The JS engines pushes this
              execution to the web API and it's popped off the Call Stack. The
              Web API process this action and returns a callback function. The
              callback is sent to the Callback Queue. When the Call Stack is
              empty the Event Loop push the callback to the Call Stack for
              execution.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 5,
    title: "MicroTask Queue",
    section: (
      <div>
        <div className="leading-8">
          <div>
            <p>
              JavaScript runtime gives higher priority to tasks in the micro
              queue than the callback queue. Web APIs like fetch,
              mutationObserver, queueMicrotask return a promise object which
              contain [[promiseState]], [[promiseResult]] and other records. The
              [[promiseResult]] which contains the data are sent to the micro
              task queue to be handled by promise handler (.then, .catch, async
              await).
            </p>

            <p className="py-6">
              To simply put, when the Call Stack is empty, the Event Loop pushes
              all the Micro Tasks [[promiseResults]] to the Call Stack for
              execution before attending to the tasks in the Callback Queue.
            </p>

            <p className="py-6">
              Note:Microtasks can also schedule other microtasks! This could
              lead to infinite microtask loop, causing a starvation and delay of
              the Callback Queue indefinitely and freezing the rest of the
              program. So be careful!.
            </p>

            <p>
              Such a scenario cannot (!) happen on the Task Queue. The Event
              Loop processes tasks on the Task Queue one by one, then it "starts
              over" by checking the Microtask Queue.
            </p>
            <p className="py-6">
              Let's take a look at a popular promise-based API called fetch.
              When we invoke fetch, its execution context is created and added
              to the Call Stack. Calling fetch creates a Promise Object in
              memory which include [[promiseState]] "pending" and
              [[promiseResult]] "undefined" by default.
            </p>
            <p>
              {" "}
              After initiating the network request, the fetch function call is
              popped off the Call Stack. The JS engine now encounters the
              chained then/catch handler. When the server finally returns the
              data, the [[PromiseState]] is set to "fulfilled" , the
              [[PromiseResult]] is set to the Response object.
            </p>
            <p className="py-6">
              As the promise resolves, the PromiseReaction is pushed onto the
              Microtask Queue. When the Call Stack is empty, the Event Loop
              moves the handler callback from the Microtask Queue onto the the
              Call Stack, where it's executed, and eventually popped off the
              call stack.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 6,
    title: "Event Loop",
    section: (
      <div>
        <div className="leading-8">
          <div>
            <p>
              If you recall, Js is a synchronous single threaded language. So if
              JS is synchronous,then how does it handle async or non-blocking
              task. The answer is Event Loop.The event loop is a mechanism that
              allows JavaScript to handle multiple tasks concurrently, without
              blocking or waiting for each task to complete.
            </p>
            <p className="py-6">
              We can say Event Loop is a task manager that constantly checks if
              the Call Stack is empty and when it's empty, its add task either
              from the Callback Queue or Microtask Queue to the Call Stack where
              the callback is executed.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
