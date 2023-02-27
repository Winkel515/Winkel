import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/feelsbadman.png" alt="Logo" width={50} height={50} />
          <div className="w-5"></div>
          <span className="text-white self-center text-xl font-semibold whitespace-nowrap">
            Winkel Yin
          </span>
        </Link>
        <button
          onClick={() => setNavbar(!navbar)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div className="block w-full md:block md:w-auto" id="navbar-default">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-end justify-center space-y-8 flex md:flex md:space-x-6 md:space-y-0 flex-col md:flex-row">
              <li className={`text-white inline-block mr-6 md:mr-0`}>
                <div className="inline-block w-2"></div>
                <Link href="/">Home</Link>
              </li>
              <li className={`text-white inline-block mr-6 md:mr-0`}>
                <div className="inline-block w-2"></div>
                <Link href="/files/resume.pdf" target="_blank">
                  Resume
                </Link>
              </li>
              <li className={`text-white inline-block mr-6 md:mr-0`}>
                <div className="inline-block w-2"></div>
                <Link href="/experience">Experience</Link>
              </li>
              <li className={`text-white inline-block mr-6 md:mr-0`}>
                <div className="inline-block w-2"></div>
                <Link href="https://leetcode.com/Winkel515/" target="_blank">
                  Leetcode
                </Link>
              </li>
              <li className={`text-white inline-block mr-6 md:mr-0`}>
                <div className="inline-block w-2"></div>
                <Link href="https://www.youtube.com/@winkypoop" target="_blank">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
