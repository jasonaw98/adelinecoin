import React from "react";

const Howtobuy = () => {
  return (
    <div className="text-white w-full flex flex-col items-center p-8 px-16" id="howtobuy">
      <div className="flex flex-col items-center justify-center gap-12">
        <h1 className="text-7xl font-bold w-2/3 text-center text-wrap">
          How to Buy $ADLN
        </h1>
        <div className="flex flex-col mt-8 gap-8">
          <div className="flex items-start gap-4 px-40">
            <p className="text-3xl py-2">1.</p>
            <span className="flex flex-col">
              <p className="text-3xl px-2 py-2 bg-red-600 rounded-2xl w-fit">
                Create a wallet using Phantom
              </p>
              <p className="text-xl mt-4 text-wrap">
                Go to{" "}
                <a href="https://phantom.app" className="underline">
                  phantom.app
                </a>{" "}
                and follow the instructions to set up a new account using the
                Phantom app or browser extension.
              </p>
            </span>
          </div>

          <div className="flex items-start gap-4 px-40">
            <p className="text-3xl py-2">2.</p>
            <span className="flex flex-col">
              <p className="text-3xl px-2 py-2 bg-red-600 rounded-2xl w-fit">
                Buy some SOL and send it to your wallet
              </p>
              <p className="text-xl mt-4 text-wrap">
                Press the BUY button in the app to acquire Solana, or transfer
                $SOL to your Phantom wallet from your preferred crypto exchange.
              </p>
            </span>
          </div>

          <div className="flex items-start gap-4 px-40">
            <p className="text-3xl py-2">3.</p>
            <span className="flex flex-col">
              <p className="text-3xl px-2 py-2 bg-red-600 rounded-2xl w-fit">
                Swap your $SOL into $ADLN
              </p>
              <p className="text-xl mt-4 text-wrap">
                Select the SWAP icon in your Phantom wallet and enter the $ADLN
                token address. Then swap your $SOL into $ADLN.
              </p>
            </span>
          </div>

          <div className="flex items-start gap-4 px-40">
            <p className="text-3xl py-2">4.</p>
            <span className="flex flex-col">
              <p className="text-3xl px-2 py-2 bg-red-600 rounded-2xl w-fit">
                CONGRATULATIONS !!!!
              </p>
              <p className="text-xl mt-4 text-wrap">
                Congratulations, you're now an official member of the Adeline
                community! Just hold on tight and let Adeline take you to the
                moon.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtobuy;
