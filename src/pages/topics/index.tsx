import { Link } from "react-router-dom";
import { blogContent } from "../../constants";
import { urlEncoder } from "../../utils";

const Home = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <article className="flex items-center justify-center min-h-screen w-[95%] mx-auto">
        <ul className="grid md:grid-cols-3 gap-4">
          {blogContent.map((blog) => {
            return (
              <li
                key={blog.id}
                className="md:border-2 border-gray-600 rounded-lg min-h-[400px] md:w-[420px] py-4 px-4 relative flex flex-col items-center justify-center"
              >
                <Link to={urlEncoder(blog.title)}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[200px] rounded-md object-fit"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-10" />
                  <div className="pt-5 relative z-10">
                    <h1 className="text-blue-500 underline">{blog.title}</h1>
                    <p className="pt-2 text-sm leading-[1.22rem]">
                      {blog.details}
                    </p>
                  </div>
                  <p className="text-right text-sm">{blog.date}</p>
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
