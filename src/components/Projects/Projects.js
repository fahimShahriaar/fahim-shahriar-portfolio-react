import React from "react";
import Navbar from "../Navbar/Navbar";
import myProjects from "./myProjects.js";
import foodies from "../../images/foodies.png";
import calculator from "../../images/calculator.png";
import placentaBank from "../../images/placenta-bank.png";
import penguineFashion from "../../images/penguin-fashion.png";
import pandaCommerce from "../../images/panda-commerce.png";
import gmailClone from "../../images/gmail-clone.png";
import devPortfolio from "../../images/dev-portfolio.png";

const Projects = () => {
  console.log(myProjects);
  return (
    <div
      style={{
        backgroundColor: "#0a192f",
        color: "lightgrey",
      }}
    >
      <Navbar />
      <section className="p-12">
        {/* <!-- section header --> */}
        <div className="my-8">
          <h3 className="text-4xl text-center font-semibold">
            <span className="text-green-400">All </span>Projects
          </h3>
          <hr className="border-2 border-green-300 w-10 mx-auto mt-3" />
        </div>

        {/* <!-- projects --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* rendering single project from array of projects */}
          {myProjects.map((project, i) => (
            <div className="border border-gray-600 rounded" key={i}>
              <div>
                <img src={project.img} alt="" className="project-thumbnail" />
              </div>
              <div className="p-5">
                <div className="h-56">
                  <h3 className="text-2xl font-semibold my-4">
                    {project.title}
                  </h3>
                  <ul className="pl-5">
                    {project.description.initial.map((listItems, i) => (
                      <li className="list-disc" key={i}>
                        {listItems}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 mb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="./sunglassHut.html">
                    <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">
                      See Details
                    </button>
                  </a>
                  <a
                    href="https://github.com/fem97/sunglass-hut-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client<i className="text-lg mx-2 fab fa-github"></i>
                  </a>
                  <a
                    href="https://github.com/fem97/sunglass-hut-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server<i className="text-lg mx-2 fab fa-github"></i>
                  </a>
                  <a
                    href="https://sunglass-hut-4529c.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <i className="text-lg mx-2 fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Static projects will render here */}

          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={foodies} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">Foodies</h3>
                <p>A simple meal searching Web Application using mealdb API</p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/foodies-mealDb-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fem97.github.io/foodies-mealDb-api/mealDb.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={calculator} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">JS calculator</h3>
                <p>
                  A simple JS calculator with an attractive UI for arithmetic
                  operations
                </p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/js-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fem97.github.io/js-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={placentaBank} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">Placenta Bank</h3>
                <p>
                  simple banking system - playing with JS DOM ( feature
                  available: withdraw, deposit and total account balance e.g
                  mail: abc@gmail.com & pass: abc123)
                </p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/simple-banking-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fem97.github.io/simple-banking-system/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={penguineFashion} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">
                  Penguin Fashion Tailwind
                </h3>
                <p>
                  Simple e-commerce landing page. Fully Responsive with Tailwind
                  CSS.
                </p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/penguin-fashion-tailwind"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://penguin-fashion-with-tailwind.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={pandaCommerce} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">
                  Panda Commerce Bootstrap
                </h3>
                <p>
                  A e-commerce site layout design with HTML5, CSS3 and
                  Bootstrap5.
                </p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Bootstrap5
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/panda-commerce-bootstrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fem97.github.io/panda-commerce-bootstrap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={gmailClone} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">Gmail Clone</h3>
                <p>
                  Gmail clone using pure HTML5 and CSS. No framework or library
                  is used.
                </p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/gmail-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fem97.github.io/gmail-clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img src={devPortfolio} alt="" className="project-thumbnail" />
            </div>
            <div className="p-5">
              <div className="h-36">
                <h3 className="text-2xl font-semibold my-4">
                  My Personal Website
                </h3>
                <p>
                  A simplest portfolio website using HTML and CSS only. No
                  framework or library is used here.
                </p>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  HTML5
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  CSS3
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/fem97/developer-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fem97.github.io/developer-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-lg mr-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
