const Home: React.FC = () => {
  return (
    <>
      <section className="font-default bg-[#008374] py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Programming for Data Science
            </h1>
            <p className="my-4 text-xl text-white">
              We teach people to Programming for Data Science and Web
              Development. We also Develop Software solutions for individuals
              and organizations
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 font-default">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Data Science</h2>
              <p className="mt-2 mb-4">
                A comprehensive and dynamic course designed to equip you with
                the skills to thrive in data science.
              </p>
              <a
                href="https://science.dataidea.org"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Get Started
              </a>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Web Development</h2>
              <p className="mt-2 mb-4">
                A comprehensive subject designed to cover the various
                programming components essential for web development.
              </p>
              <a
                href="https://webdev.dataidea.org"
                className="inline-block bg-[#008374] text-white rounded-lg px-4 py-2 hover:bg-[#019b89]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Browse Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Online</div>
                  <h3 className="text-xl font-bold">Python3 Programming</h3>
                </div>

                <div className="mb-5">
                  Start with the basics of Python, a versatile and powerful
                  programming language. This course lays the foundation for your
                  data science journey
                </div>

                <h3 className="text-[#008374] mb-2">
                  Free Learning Materials*
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://science.dataidea.org/Python/00_python_programming_outline.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Online</div>
                  <h3 className="text-xl font-bold">
                    Data Analysis with Python
                  </h3>
                </div>

                <div className="mb-5">
                  Explore data analysis using libraries like Pandas, NumPy, and
                  Matplotlib. Learn to transform raw data into actionable
                  insights
                </div>

                <h3 className="text-[#008374] mb-2">
                  Free Learning Materials*
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://science.dataidea.org/Python-Data-Analysis/python_data_analysis_outline.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Online</div>
                  <h3 className="text-xl font-bold">Machine Learning</h3>
                </div>

                <div className="mb-5">
                  Discover the principles of machine learning and gain hands-on
                  experience in building and optimizing models
                </div>

                <h3 className="text-[#008374] mb-2">
                  Free Learning Materials*
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafafa
                  </div>
                  <a
                    href="https://science.dataidea.org/Python-Data-Analysis/Week4-ML-Intro/41_overview_of_machine_learning.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://science.dataidea.org"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Courses
        </a>
      </section>

      {/* Blog */}
      <section className="bg-gray-100 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Latest on the Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Online</div>
                  <h3 className="text-xl font-bold">
                    React + TypeScript - Navigation
                  </h3>
                </div>

                <div className="mb-5">
                  In this guide, we’ll create a new React project with Vite,
                  TypeScript, Tailwind CSS, and add a basic navigation bar using
                  React components.
                </div>

                <h3 className="text-[#008374] mb-2">Nov 7, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafafa
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/react-naviagaion/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Online</div>
                  <h3 className="text-xl font-bold">
                    Using Dotenv for Secure Environment Variable Management
                  </h3>
                </div>

                <div className="mb-5">
                  Environment variables are crucial in programming for storing
                  sensitive information
                </div>

                <h3 className="text-[#008374] mb-2">Oct 31, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/setting-up-dotenv/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Online</div>
                  <h3 className="text-xl font-bold">
                    Why Learning Programming Can Be Hard and How to Make It
                    Easier
                  </h3>
                </div>

                <div className="mb-5">
                  Why is programming so difficult to learn, and how can you make
                  the process smoother? Let’s dive in.
                </div>

                <h3 className="text-[#008374] mb-2">Aug 12, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/why-coding-is-hard/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://blog.dataidea.org"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Blogs
        </a>
      </section>
    </>
  );
};

export default Home;
