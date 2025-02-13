import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import closureExample from "../../../assets/closure-example.jpeg";
import closure from "../../../assets/closure.jpeg";
import lexical from "../../../assets/lexical.jpeg";

const Closure = () => {
  const [currentText, setCurrentText] = useState("");
  const [isScrollable, setIsScrollable] = useState(false);
  function Closure({
    section,
    title,
  }: {
    section: ReactNode;
    title?: string;
    imageSources?: { one?: ReactNode; two?: ReactNode };
  }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      function handleScroll() {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          if (top <= 70) setCurrentText(title!);
        }
        if (window.scrollY > 200) setIsScrollable(true);
        else setIsScrollable(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (!isScrollable) setCurrentText("Javascript Closure.");
    }, [isScrollable]);

    return (
      <div className="relative py-8 lg:py-16">
        <motion.div
          ref={ref}
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
    <div className="max-w-[1240px] mx-auto pt-10 px-10 md:px-20">
      <div className="absolute top-0 lef-0 w-3/4 h-[35px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0  w-3/4 h-[35px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-[450px] right-0  w-2/4 h-[150px] bg-white opacity-[8%] rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-[450px] right-0  w-2/4 h-[150px] bg-white opacity-[8%] rounded-full blur-3xl pointer-events-none" />
      <section className="max-w-[1240px] mx-auto pt-10 px-10 md:px-20">
        <div
          className={`${
            isScrollable && "py-6 md:py-10 sticky top-0 left-0 bg-gray-900 z-10"
          }`}
        >
          <h1 className="text-lg md:text-[30px] font-extrabold leading-10">
            {currentText}
          </h1>
        </div>
        <div className="relative w-full">
          {events.map((event) => (
            <Closure
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

export default Closure;

const events = [
  {
    id: 1,
    title: "",
    section: (
      <div className="leading-8">
        <div>
          <div className="">
            <p>
              Closure allow sibling function(s) to have access to the parent's
              function <span className="text-green-400">lexical scope</span>{" "}
              even after it's execution.
            </p>
            <p className="pt-2">
              It simply means, the inner function (sibling) will remembers the
              outer function's (parent) variable even after it has returned.
            </p>
          </div>

          <div className="py-16" id="lexical">
            <p>What is lexical Scope ?</p>
            <p>
              Lexical Scope in JavaScript is a concept that determines how
              variables and functions are accessed based on their position
              within the code structure.
            </p>
            <p className="pt-6">
              It is also known as static scoping, meaning the scope of a
              variable or function is determined by where it was defined, not
              where it was called(invoked). This is why inner functions can
              access variables from outer functions, but not the other way
              around.
            </p>
            <div>
              <img
                src={lexical}
                alt="lexical"
                className="w-[400px] object-contain rounded-lg py-10"
              />
              <p>
                When the above function is invoked, a Global Execution Context
                (GEC) is created and pushed into the Call Stack. Inside the GEC,
                "a" is assigned to the function reference in memory and its
                invoked.
              </p>
              <p className="py-4">
                When "a" is invoked, the execution context is also created.
                Inside the execution context, "b" is assigned to "10" and "c" is
                assigned to a function reference in memory.
              </p>

              <p>
                The next line invokes a function for "c". The execution context
                and executed. All of this is know as scope chaining because
                whenever an execution context is greater a scope environment is
                also created.
              </p>
              <p className="py-6">
                So if we analyze the lexical context of the above code, we can
                therefore say that the lexical environment of "c" is "a", the
                lexical environment for a is the global scope.{" "}
              </p>
              <p>
                It is safe to assume that the above example also pass for
                closure.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "Some common examples of Closure",
    section: (
      <div className="leading-8">
        <div>
          <img
            src={closure}
            alt="closure"
            className="w-[3000px] rounded-lg py-10"
          />

          <img
            src={closureExample}
            alt="closure"
            className="w-[3000px] rounded-lg py-10"
          />
        </div>
      </div>
    ),
  },
];
