import { Link } from "react-router-dom";
import { topics } from "../../constants";
import { urlEncoder } from "../../utils";

const Home = () => {
  return (
    <section className="max-w-[1400px] mx-auto">
      <article className="flex items-center justify-center min-h-screen w-[95%] mx-auto py-10 md:py-20">
        <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {topics.map((topic) => {
            return (
              <li
                key={topic.id}
                className=" shadow-xl rounded-lg min-h-[400px] md:w-[400px] py-4 px-4 relative flex flex-col items-center justify-center"
              >
                <Link to={urlEncoder(topic.title)}>
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-[200px] rounded-md object-fit"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-10" />
                  <div className="pt-5 relative z-10">
                    <h1 className="text-blue-500 underline">{topic.title}</h1>
                    <p className="pt-2 text-sm leading-7 lg:leading-[1.22rem]">
                      {topic.details}
                    </p>
                  </div>
                  <p className="text-right text-sm pr-2">{topic.date}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default Home;
