import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import resume from "../../resources/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h3 className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline cursor-pointer">
                  Fahim Shahriar
                </h3>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/projects"
                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Projects
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    About
                  </Link>

                  <Link
                    to="/contact"
                    className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Contact
                  </Link>

                  <a
                    className="px-4 py-2 mt-2 text-gray-700 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline border-2 border-indigo-900"
                    href={resume}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Resume
                  </a>

                  {/* <Link
                    to="/"
                    className="px-4 py-2 mt-2 text-gray-700 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline border-2 border-indigo-900"
                  >
                    Resume
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-600"
              >
                <Link
                  to="/"
                  className="text-white text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>

                <Link
                  to="/"
                  className=" text-white text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Link>

                <Link
                  to="/"
                  className="text-white text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>

                <Link
                  to="/"
                  className="text-white text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </Link>

                <Link
                  to="/"
                  className="text-white text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
