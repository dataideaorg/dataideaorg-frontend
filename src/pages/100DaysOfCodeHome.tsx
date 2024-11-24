import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const ChallengeIntro: React.FC = () => {
  return (
    <div className="challenge-intro font-default">
      <header className="font-default bg-[#7a7b81] py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Welcome to the 100 Days of Code Challenge!
            </h1>
            <p className="my-4 text-xl text-white">
              Your journey to mastering programming for data science begins here
              🚀
            </p>
          </div>
        </div>
      </header>

      <section className="bg-gray-100 px-6 py-12 font-sans rounded-lg">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-8 text-center">
            What Will You Learn?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
            Over the next 100 days, we will dive into the exciting world of data
            science through hands-on programming exercises, projects, and
            real-world applications.
          </p>
          <ul className="space-y-4">
            <li className="p-4 bg-white border-l-4 border-[#008374] rounded shadow">
              <strong>Python Programming:</strong> Build a solid foundation in
              Python, the most popular language for data science.
            </li>
            <li className="p-4 bg-white border-l-4 border-[#008374] rounded shadow">
              <strong>Data Analysis:</strong> Learn to clean, process, and
              analyze data effectively using libraries like Pandas.
            </li>
            <li className="p-4 bg-white border-l-4 border-[#008374] rounded shadow">
              <strong>Data Visualization:</strong> Master tools like Matplotlib
              and Seaborn to tell compelling stories with data.
            </li>
            <li className="p-4 bg-white border-l-4 border-[#008374] rounded shadow">
              <strong>Machine Learning:</strong> Explore the basics of machine
              learning, including algorithms, models, and real-world
              applications.
            </li>
          </ul>
        </div>
      </section>

      <section id="blog" className="m-auto max-w-lg my-10 px-6">
        <a
          href="/100-days-of-code-calendar"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          See Calendar
        </a>
      </section>

      <section className="bg-cyan-50 px-6 py-12 font-sans rounded-lg">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#008374] mb-6">
            Why Join This Challenge?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Whether you're starting your data science journey or sharpening your
            skills, this challenge offers a structured approach to growth. Each
            day comes with practical exercises and challenges to reinforce
            learning.
          </p>
          <button className="px-6 py-3 bg-[#008374] text-white text-lg font-medium rounded shadow-md hover:bg-[#005f57] transition duration-300">
            <Link to="/100-days-of-code-calendar">Start Your Journey</Link>
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-white text-lg font-medium">
          Ready to code? Let’s make the next 100 days count! 🚀
        </p>
      </footer>
    </div>
  );
};

export default ChallengeIntro;
