import React from "react";
import Navbar from "../Navbar/Navbar";
import myProjects from "./projects.json";

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
                <img
                  src={require(`../../images/${project.img}.png`)}
                  alt=""
                  className="project-thumbnail"
                />
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
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                    Material UI
                  </span>
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                    React.js
                  </span>
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                    MongoDB
                  </span>
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                    Node.js
                  </span>
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                    Express.js
                  </span>
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                    Firebase Authentication
                  </span>
                  <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                    Heroku
                  </span>
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

          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img
                src="./images/sunglass-hut-2.png"
                alt=""
                className="project-thumbnail"
              />
            </div>
            <div className="p-5">
              <div className="h-56">
                <h3 className="text-2xl font-semibold my-4">Sunglass Hut</h3>
                <ul className="pl-5">
                  <li className="list-disc">
                    This is an e-commerce project - A full stack web application
                    based on MERN
                  </li>
                  <li className="list-disc">
                    Users can Register and login if they want to buy a product.
                    They can view their orders and navigate Dashboard.
                  </li>
                  <li className="list-disc">
                    It also has an admin dashboard. Admin can add or remove
                    products. And manage all orders.
                  </li>
                  <li className="list-disc">
                    Admin: admin@admin.com Pass: 123456
                  </li>
                </ul>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Material UI
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  React.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  MongoDB
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Node.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Express.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Firebase Authentication
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Heroku
                </span>
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
                  Live<i className="text-lg mx-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img
                src="./images/parcel-delivery-2.png"
                alt=""
                className="project-thumbnail"
              />
            </div>
            <div className="p-5">
              <div className="h-56">
                <h3 className="text-2xl font-semibold my-4">Parcel Delivery</h3>
                <ul className="pl-5">
                  <li className="list-disc">
                    A single page parcel delivery application where one can
                    login with their google account
                  </li>
                  <li className="list-disc">
                    Users can purchase the service that they want.
                  </li>
                  <li className="list-disc">
                    They are able to see their orders and remove their orders.
                  </li>
                </ul>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Bootstrap
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  React.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  MongoDB
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Node.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Express.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Firebase Authentication
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Heroku
                </span>
              </div>
              <div className="mt-6">
                <a href="./parcelDelivery.html">
                  <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">
                    See Details
                  </button>
                </a>
                <a
                  href="https://github.com/fem97/parcel-delivery-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client<i className="text-lg mx-2 fab fa-github"></i>
                </a>
                <a
                  href="https://github.com/fem97/parcel-delivery-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server<i className="text-lg mx-2 fab fa-github"></i>
                </a>
                <a
                  href="https://fir-projects-a5cd9.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live<i className="text-lg mx-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img
                src="./images/testedLab1.png"
                alt=""
                className="project-thumbnail"
              />
            </div>
            <div className="p-5">
              <div className="h-56">
                <h3 className="text-2xl font-semibold my-4">Tested Lab</h3>
                <ul className="pl-5">
                  <li className="list-disc">
                    A single Page React application named Tested Lab.
                  </li>
                  <li className="list-disc">
                    Provided service details for users.
                  </li>
                  <li className="list-disc">Users can create their profile.</li>
                </ul>
              </div>
              <div className="mt-4 mb-2">
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  HTML
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  CSS
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Bootstrap
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  React.js
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2 inline-block mb-2">
                  Firebase Authentication
                </span>
                <span className="bg-gray-500 text-white text-sm px-4 py-1 rounded-sm mr-2">
                  Heroku
                </span>
              </div>
              <div className="mt-6">
                <a href="./tested-lab.html">
                  <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">
                    See Details
                  </button>
                </a>
                <a
                  href="https://github.com/fem97/tested-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client<i className="text-lg mx-2 fab fa-github"></i>
                </a>
                <a
                  href="https://tested-lab.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live<i className="text-lg mx-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- project --> */}
          <div className="border border-gray-600 rounded">
            <div>
              <img
                src="./images/foodies.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
              <img
                src="./images/calculator.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
              <img
                src="./images/placenta-bank.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
              <img
                src="./images/penguin-fashion.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
              <img
                src="./images/panda-commerce.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
              <img
                src="./images/gmail-clone.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
              <img
                src="./images/dev-portfolio.png"
                alt=""
                className="project-thumbnail"
              />
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
                {/* <!-- <button className="mb-4 bg-green-600 hover:bg-green-500 px-4 py-1 rounded block">See
                            Details</button> --> */}
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
