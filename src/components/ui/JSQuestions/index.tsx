import { ReactNode, useEffect, useRef, useState } from "react";
import functionExpression from "../../../assets/function-expression.jpeg";
import hoisting from "../../../assets/hoisting.jpeg";
import IIFE from "../../../assets/IIFE.jpeg";
import thisExample from "../../../assets/this-example.jpeg";
import thisImage from "../../../assets/this.jpeg";

const BasicJSQuestions = () => {
  const [currentText, setCurrentText] = useState("");
  const [isScrollable, setIsScrollable] = useState(false);

  function BasicJSQuestions({
    section,
    title,
  }: {
    section: ReactNode;
    title?: string;
    imageSources?: { one?: ReactNode; two?: ReactNode };
  }) {
    const ref = useRef<HTMLDivElement | null>(null);

    (function user(name: string) {
      (function userWithGreeting(age: number) {
        return age + name;
      })(40);
    })("SeunPPP");

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
      if (!isScrollable)
        setCurrentText("Basic JavaScript questions and answers.");
    }, [isScrollable]);

    return (
      <div className="relative py-8 lg:py-10">
        <div ref={ref}>
          <h1 className="text-lg md:text-2xl font-extrabold w-full pb-5">
            {title}
          </h1>
          <div className="lg:pr-[350px] text-sm lg:text-base"> {section}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[1240px] mx-auto pt-10 px-10 md:px-20">
      <div className="absolute top-0 lef-0 w-3/4 h-[35px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0  w-3/4 h-[35px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-[450px] right-0  w-2/4 h-[150px] bg-white opacity-[8%] rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-[450px] right-0  w-2/4 h-[150px] bg-white opacity-[8%] rounded-full blur-3xl pointer-events-none" />
      <section className="max-w-[1240px] mx-auto pt-10 xl:px-20">
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
            <BasicJSQuestions
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

export default BasicJSQuestions;

const events = [
  {
    id: 1,
    title: "",
    section: (
      <div className="leading-8">
        <ul>
          <li>
            <div className="">
              <h2> 1. What is function expression ?.</h2>
              <p className="pt-4">
                This is when a function is assigned to a variable or passed as
                arguments to other functions.
              </p>
              <div className="pt-3">
                <h4 className="font-bold">Use cases</h4>
                <ul className="list-disc pl-10">
                  <li>In event listener as Callback functions.</li>
                  <li>In Immediately Invoked Function Expressions (IIFE)</li>
                </ul>
              </div>

              <div className="py-10">
                <img src={functionExpression} alt="func" />
              </div>
              <div>
                <p>
                  Functions in Javascript are first class citizens. This means
                  that functions can be used as a variable or an object. i.e.
                  assigned to variables, passed as arguments to other functions,
                  returned as values from other functions (closure).
                </p>
              </div>
            </div>
          </li>

          <li className="py-20">
            <div className="">
              <h2> 2. What is closure ?.</h2>
              <p className="pt-4">
                Closure is the ability of a function to access variables and
                functions that are lexically out of it's scope. Closures are
                created when a new function is created because it's always have
                a reference to its outer scope.
              </p>

              <div className="py-10">
                <img src={IIFE} alt="func" />
              </div>
            </div>
          </li>

          <li>
            <div>
              <h2> 3. What is hoisting ?.</h2>
              <p className="pt-4">
                Hoisting is moving variables and functions declarations to the
                top of their scope. Hoisting can be for both variables and
                functions.
              </p>
              <p className="py-4">
                In variable hoisting, variables declared with var are hoisted to
                the top of their scope, but their assignment is not.
              </p>
              <p>
                Variables declared with let and const are also hoisted, but they
                cannot be accessed until they are initialized. This means
                accessing them before declaration throws an error (Reference
                error).
              </p>

              <p className="pt-6">
                For Functions declared with "function" keyword are hoisted with
                their entire definition.{" "}
              </p>

              <div className="py-10">
                <img src={hoisting} alt="hoisting" />
              </div>
            </div>
          </li>

          <li className="py-20">
            <div>
              <h2> 4. What is "this" keyword in JavaScript ?.</h2>
              <p className="pt-4">
                It refers to the current execution context of a function. The
                value of "this" depends on how and where the function is called.
              </p>

              <div className="py-10">
                <img src={thisImage} alt="this" />
              </div>

              <div>
                <p>Other example with explicit binding</p>
                <div className="py-5">
                  <img src={thisExample} alt="this" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div>
              <h2> 5. What are pure functions in JavaScript ?.</h2>
              <p className="pt-4">
                The rules for pure functions are simple, given the same set of
                inputs, the function should always return the same output.
              </p>

              <p className="pt-4">
                And also function with no side effect. i.e not mutating of
                external state whether it's primitive data type like Strings or
                reference data type like Set.
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
];
