import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col font-sans">
      {" "}
      {/* Font family */}
      {/* Navigation Bar */}
      <nav className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-xl font-bold">
          {" "}
          {/* Adjust as needed */}
          {/* Logo or Title */}
          <a href="/" className="text-black no-underline">
            {" "}
            {/* Remove underline */}
            pomb.us
          </a>
        </div>
        <div>
          <span className="text-gray-600 mr-4">☆ 0.62</span>{" "}
          {/* Star and number */}
        </div>
      </nav>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {" "}
        {/* Flex-grow for main content */}
        <div className="max-w-3xl mx-auto">
          {" "}
          {/* Center the content */}
          {/* Project Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              {" "}
              {/* Align items vertically */}
              <span className="text-gray-600 mr-2">+ PROJECT</span>
              <span className="text-gray-600">July 26, 2024</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Code Hike</h1>
            <p className="text-gray-800">
              Build rich content websites with Markdown and React
            </p>
          </section>
          {/* Blog Post Sections (repeated) */}
          <BlogPost
            date="November 21, 2024"
            title="The Curse of Markdown"
            description="And the content website wasteland"
          />
          <BlogPost
            date="September 4, 2024"
            title="Build-time Components"
            description="Why React Server Components are a leap forward for content-driven websites"
          />
          <BlogPost
            date="" /* Leave empty for "ANNOUNCING" */
            title="Announcing Code Hike 1.0"
            description="" /* Leave empty for "ANNOUNCING" */
            isAnnouncement={true} /* Indicate it's an announcement */
          />
        </div>
      </main>
      {/* Footer (optional) */}
      <footer className="bg-white p-4 text-center border-t border-gray-200">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

const BlogPost: React.FC<{
  date: string;
  title: string;
  description: string;
  isAnnouncement?: boolean; // Optional prop for announcements
}> = ({ date, title, description, isAnnouncement = false }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-2">
          BLOG POST {/* Or "ANNOUNCEMENT" if isAnnouncement is true */}
          {isAnnouncement && (
            <span className="uppercase text-red-500 ml-2">Announcement</span>
          )}
        </span>
        <span className="text-gray-600">{date}</span>
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-800">{description}</p>
    </section>
  );
};

export default HomePage;
