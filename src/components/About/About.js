import React from "react";
import Navbar from "../Navbar/Navbar";
import shahriar from "../../images/shahriar.png";

const About = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0a192f",
        color: "lightgrey",
      }}
    >
      <Navbar />
      <main>
        <section className="mt-20">
          <img src={shahriar} className="h-36 mx-auto" alt="" />
          <div className="text-gray-50 w-1/2 mx-auto text-center ">
            <h1 className="text-4xl mt-12 mb-8 text-white font-semibold">
              Fahim Shahriar
            </h1>
            <p className="text-xl">
              A passionate frontend web developer | Javascript Developer | React
              Developer
            </p>
          </div>

          <div className="my-8 w-9/12 text-center mx-auto">
            <p className="text-gray-500 text-lg font-semibold">
              I have been working with JavaScript for around 1 year. For my
              personal project, I had to make a website with WordPress. After
              that, my curiosity was raised about how all these work behind the
              scene! Then I decided to explore web technologies and discovered
              JavaScript as my most favourite language. Day by day I'm getting
              fascinated by JavaScript and it's frameworks or libraries such as
              React.js, Node.js. Now I am exploring the MERN stack. I love to
              keep myself updated with all the latest technologies and tools.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
