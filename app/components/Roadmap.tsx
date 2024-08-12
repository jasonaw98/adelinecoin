import React from "react";

const Roadmap = () => {
  return (
    <div className="flex flex-col py-12 px-24 text-white w-full gap-20">
      <div className="flex flex-col gap-12 items-center">
        <h1 className="text-7xl font-bold">Game Plan for the Future</h1>
        <div className="max-w-[50rem] text-xl">
          <p>
            Ever wondered where your MemeCoins would be in a few years? With our
            clear roadmap, we provide full transparency and confidence in your
            investment.
          </p>
          <br />
          <p>
            We pave the path, you reap the rewards. Long term goals transcend
            from being hazy dreams to assured realities.
          </p>
          <br />
          <p>
            Together we’ll create a unique and exciting future that will rock
            the foundations of traditional finance.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-20">
        <h1 className="text-7xl font-bold" id="roadmap">Roadmap</h1>
        <div className="flex flex-col w-full text-xl mt-16 px-16">
          <span className="w-full h-[1px] bg-neutral-200"></span>
          <div className="flex py-4 px-4">
            <p className="w-40">2024 Q4</p>
            <p>Queen of meme Adeline is born</p>
          </div>
          <span className="w-full h-[1px] bg-neutral-200"></span>
          <div className="flex py-4 px-4">
            <p className="w-40">2025 Q1</p>
            <p>Discover $ADLN on Coinmarketcap and Coingecko</p>
          </div>
          <span className="w-full h-[1px] bg-neutral-200"></span>
          <div className="flex py-4 px-4">
            <p className="w-40">2025 Q2</p>
            <p>Grow community and listedn on CEX</p>
          </div>
          <span className="w-full h-[1px] bg-neutral-200"></span>
          <div className="flex py-4 px-4">
            <p className="w-40">2025 Q3</p>
            <p>HODL $ADLN</p>
          </div>
          <span className="w-full h-[1px] bg-neutral-200"></span>
          <div className="flex py-4 px-4">
            <p className="w-40">2025 Q4</p>
            <p>FLY $ADLN to the MOON! 🚀</p>
          </div>
          <span className="w-full h-[1px] bg-neutral-200"></span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
