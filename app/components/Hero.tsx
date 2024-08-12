const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white w-full p-8 xl:p-24" id="home">
      <div className="w-2/3 flex flex-col bg-[#E01E37] h-full items-center justify-center rounded-3xl font-serif gap-24 border-[10px] border-red-700 shadow-2xl">
        <h1 className="text-xl lg:text-7xl font-bold">Astounding</h1>
        <h1 className="text-2xl lg:text-9xl font-bold font-serif tracking-wider">Adeline</h1>
        <h1 className="textmd lg:text-2xl font-bold">Welcome to the world of MemeCoins</h1>
      </div>
    </div>
  );
};

export default Hero;
