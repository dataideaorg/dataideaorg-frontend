// src/components/Navbar.tsx
import React from 'react';
// import Logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#008374] border-b border-[#66fdee] font-default">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                className="flex flex-shrink-0 items-center mr-4"
                href="/"
              >
                {/* <img
                  className="h-10 w-auto"
                  src={Logo}
                  alt="DATAIDEA"
                /> */}
                <span className="font-heading hidden md:block text-white text-3xl font-bold ml-2">
                  DATAIDEA
                </span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="/index.html"
                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="https://blog.dataidea.org"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Blog
                  </a>
                  {/* <a
                    href="/add-job.html"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Add Job
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
