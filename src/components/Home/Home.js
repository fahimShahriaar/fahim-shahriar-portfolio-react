import React from "react";
import Navbar from "../Navbar/Navbar";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0a192f",
        color: "lightgrey",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <TopBanner />
    </div>
  );
};

export default Home;
