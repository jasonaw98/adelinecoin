import React from "react";

const About = () => {
  return (
    <div className="text-white w-full flex flex-col items-center p-8 px-16" id="about">
      <div className="flex flex-col items-center justify-center h-[40rem] gap-12">
        <h1 className="text-7xl font-bold w-2/3 text-center text-wrap">
          About Us
        </h1>
        <p className="text-3xl w-4/6 text-center">
          $ADLN is a memecoin inspired by ADELINE, a girl from Malaysia, who’s
          taking the meme world by storm.
        </p>
        <p className="text-3xl w-4/6 text-center">
          Adeline is here to innovate the meme culture in Malaysia, bringing her
          unique characters and sense of no humour
        </p>
      </div>
    </div>
  );
};

export default About;
