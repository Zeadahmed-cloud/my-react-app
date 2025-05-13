import React from "react";
// import logo from "../../assets/img/m5-banner-t.webp"
import banner from "../../assets/img/m5-banner-t.webp";

export default function FirstHomePage() {
  return (
    <>
    <section
    className="w-full min-h-screen bg-cover bg-center bg-no-repeat 
               flex flex-col justify-center items-start px-8 relative overflow-hidden"
    style={{ backgroundImage: `url(${banner})` }}
  >
    <div className="absolute inset-0 bg-gray-500/40 z-0"></div>
  
    <div className="relative z-10">
      <h1 className="text-white text-4xl font-light mb-4">THE ALL-NEW M5</h1>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Find Out More
      </button>
    </div>
  </section>
  
  
    </>
  );
}
