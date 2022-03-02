import React from "react";
import { Link } from "react-router-dom";
import shahriar from "../../images/shahriar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { fas } from "fontawesome.macro";

const TopBanner = () => {
  return (
    <main className="flex w-full">
      {/* <!-- left nav --> */}
      <nav
        className="w-16 flex flex-col items-center justify-center"
        style={{ height: "90vh" }}
      >
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        {/* <FontAwesomeIcon icon={solid("user-secret")} />
        <FontAwesomeIcon icon={regular("coffee")} />
        <FontAwesomeIcon icon={brands("twitter")} /> */}

        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
        <Link to="https://www.linkedin.com/in/fahim-nwu/" target="_blank">
          <i className="fab fa-linkedin text-2xl mb-4"></i>
        </Link>
        <Link to="https://github.com/fem97" target="_blank">
          <i className="fab fa-github text-2xl"></i>
        </Link>
      </nav>
      {/* <!-- main section --> */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <img src={shahriar} className="w-2/5 md:my-0 my-4" alt="" />
        </div>
        <div className="flex items-center">
          <div className="px-6">
            <p className="text-green-300">Hello, I'm</p>
            <h1 className="text-4xl my-4">Fahim Shahriar</h1>
            <p>
              A self motivated MERN Stack developer. I love to explore new
              technology and have a deep interest in Javascript and it's modern
              frameworks.
            </p>
            <div className="mt-8">
              <Link to="/about">
                <button className="bg-emerald-600 px-3 py-2 rounded text-gray-50 hover:bg-emerald-400 hover:text-gray-900">
                  About Me
                </button>
              </Link>
              <Link to="/projects">
                <button className="bg-emerald-600 px-3 py-2 rounded text-gray-50 mx-2 hover:bg-emerald-400 hover:text-gray-900">
                  Projects
                </button>
              </Link>
              <Link to="/resume">
                <button className="border border-emerald-500 px-3 py-2 rounded text-gray-50 hover:bg-emerald-400 hover:text-gray-900">
                  Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopBanner;
