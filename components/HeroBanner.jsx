import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
  return (
    <div className="relative  text-[20px] w-full max-w-[1360px] mx-auto">
      <div className=" h-auto w-auto flex flex-col">
        <div className="   grid items-center justify-items-center ">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              Play With Electric Nike
            </h1>
            <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              Adapt 2.0 Sneakers
            </h1>
          </div>
          <div className="flex bg-transparent items-center">
            <img
              src="/hero.png"
              alt="hero"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh]  cursor-pointer object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
