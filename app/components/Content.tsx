import React from "react";

const Content = () => {
  return (
    <div className="text-white w-full flex flex-col items-center p-16">
      <div className="flex flex-col items-center justify-center h-[40rem] gap-12">
        <h1 className="text-7xl font-bold w-2/3 text-center text-wrap">
          Ready to Begin Your Adventure ?
        </h1>
        <p className="text-3xl w-4/6 text-center">
          MemeCoins aren't just an investment - they're an adventure. Are you
          ready to dive in ?
        </p>
        <button className="px-4 py-2 bg-red-600 rounded-xl text-2xl">
          Buy Adeline Coins Now{" "}
        </button>
      </div>
    </div>
  );
};

export default Content;
