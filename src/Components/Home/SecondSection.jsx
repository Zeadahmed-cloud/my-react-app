import React from "react";
import logo from "../../assets/img/1-series-hp-banner.webp";
import logo2 from "../../assets/img/x3-hp-banner-teaser.webp";

export default function SecondSection() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 place-items-center">
    <div
      className="relative w-full max-w-[650px] h-80 md:w-[400px] md:h-[450px] lg:w-[650px] lg:h-[400px] 
                 rounded-xl shadow-lg bg-center bg-cover text-white overflow-hidden hover:scale-105 transition duration-300"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="absolute bottom-4 left-4">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
          TEST DRIVER
        </h1>
        <button className="bg-transparent text-white font-semibold text-lg md:text-xl p-2 border-2 border-white">
          Discover Now
        </button>
      </div>
    </div>
  
    <div
      className="relative w-full max-w-[650px] h-80 md:w-[400px] md:h-[450px] lg:w-[650px] lg:h-[400px] 
                 rounded-xl shadow-lg bg-center bg-cover text-white overflow-hidden hover:scale-105 transition duration-300"
      style={{ backgroundImage: `url(${logo2})` }}
    >
      <div className="absolute bottom-4 left-4">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
          PROFILE
        </h1>
        <button className="bg-transparent text-white font-semibold text-lg md:text-xl p-2 border-2 border-white">
          Discover Now
        </button>
      </div>
    </div>
  </div>
  
  

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-4 my-5 ">
      <div className="group border-gray-300 border-1 flex flex-col justify-center items-center 
      h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 p-2 hover:border-3
      hover:text-blue-600 hover:border-blue-600 transition-colors duration-300">
<i className="fas fa-car text-black text-3xl group-hover:text-blue-600 transition-colors duration-300"></i>
<h1 className="font-bold text-sm text-center">TEST DRIVER</h1>
</div>


<div className="group border-gray-300 border-1 flex flex-col justify-center items-center 
h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 p-2 hover:border-3
hover:text-blue-600 hover:border-blue-600 transition-colors duration-300">
          <i className="fas fa-user text-black text-3xl group-hover:text-blue-600 transition-colors duration-300"></i>
          <h1 className="font-bold text-sm text-center">PROFILE</h1>
        </div>

        <div className="group border-gray-300 border-1 flex flex-col justify-center items-center 
        h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 p-2 hover:border-3
        hover:text-blue-600 hover:border-blue-600 transition-colors duration-300">
          <i className="fas fa-tachometer-alt text-black text-3xl group-hover:text-blue-600 transition-colors duration-300"></i>
          <h1 className="font-bold text-sm text-center">SPEEDOMETER</h1>
        </div>

        <div className="group border-gray-300 border-1 flex flex-col justify-center items-center 
        h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 p-2 hover:border-3
        hover:text-blue-600 hover:border-blue-600 transition-colors duration-300">
          <i className="fas fa-envelope text-black text-3xl group-hover:text-blue-600 transition-colors duration-300"></i>
          <h1 className="font-bold text-sm text-center">MESSAGES</h1>
        </div>
      </div>
    </>
  );
}
