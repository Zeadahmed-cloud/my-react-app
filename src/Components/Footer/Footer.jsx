import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/BMW-Logo-700x394.png"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
  <div className="max-w-screen-xl mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
      <div className="flex items-center justify-center md:justify-start">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="text-3xl font-bold font-serif">Bmw</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left w-full md:w-auto">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Resources</h2>
          <ul className="text-gray-400 font-medium space-y-2">
            <li>
              <Link to="/flowbite" className="hover:underline">Flowbite</Link>
            </li>
            <li>
              <Link to="/tailwind" className="hover:underline">Tailwind CSS</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Follow us</h2>
          <ul className="text-gray-400 font-medium space-y-2">
            <li>
              <Link to="/github" className="hover:underline">Github</Link>
            </li>
            <li>
              <Link to="/discord" className="hover:underline">Discord</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
          <ul className="text-gray-400 font-medium space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="my-6 border-gray-700" />

    <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-4">
      <span className="text-sm text-gray-400">
        © 2023 <Link to="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
      </span>
      <div className="flex gap-5">
        <Link to="/facebook" className="text-gray-400 hover:text-white">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
            <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</footer>

  );
}
