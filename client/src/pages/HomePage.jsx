import React from "react";
import HomeComponent from "../components/HomeComponent";
import BackgroundTemplate from "../layouts/BackgroundTemplate";

const HomePage = () => {
  return (
    <div>
      <BackgroundTemplate Component={HomeComponent}/>
    </div>
  );
};

export default HomePage;
