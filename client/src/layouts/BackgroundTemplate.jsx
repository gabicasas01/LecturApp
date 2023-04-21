import React from "react";
import backgroundImage from "../assets/Books_Background.png";

const BackgroundTemplate = ({Component}) => {
  return (
    <div>
      <div className="min-h-screen w-full bg-cover bg-center relative bg-gradient-to-tr from-green-500 to-sky-600">
        <img src={backgroundImage} className="h-full w-full object-cover absolute mix-blend-overlay opacity-30"></img>
        <div className="h-full relative flex flex-col items-center justify-center text-white text-center px-10 py-14 md:py-28">
          <Component />
        </div>
      </div>
    </div>
  );
};

export default BackgroundTemplate;
