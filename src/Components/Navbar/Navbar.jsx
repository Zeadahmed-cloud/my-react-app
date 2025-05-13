import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/BMW-Logo-700x394.png"

export default function Navbar() {
const [isopen, setisopen] = useState(false);
  return (
    <nav className="bg-transparent text-black fixed top-0 w-full z-50 border-b border-gray-600">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-12 "
            alt="BMW Logo"
          />
          <span className="self-center font-bold font-serif  text-3xl  whitespace-nowrap text-black">
            BMW 
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="bg-blue-600 text-black font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>

          <button
  onClick={()=> setisopen(!isopen)}
  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black md:hidden"
>
  <span className="sr-only">Open main menu</span>
  <div className="space-y-2">
    <div className="w-6 h-1 bg-black"></div>
    <div className="w-6 h-1 bg-black"></div>
    <div className="w-6 h-1 bg-black"></div>
  </div>
</button>

        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isopen ? "block" : "hidden"}`}
          
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-0 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 md:p-0 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-0 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
