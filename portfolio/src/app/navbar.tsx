"use client";

import Link from "next/link";
import { useState } from "react";
import { BsFillBookmarksFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-[1%] pt-[2%]">
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:flex sm:ml-6 flex-grow justify-center items-center gap-3">
              <Link
                href="/"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Home
              </Link>
              <Link
                href="/#about-me"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                About Me
              </Link>
              <Link
                href="/#timeline"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Timeline
              </Link>
              <Link
                href="/#projects"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Projects
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/College Resume.pdf"
                download
                className="hidden md:inline-block text-white bg-black hover:bg-neutral-800 py-2 px-4 text-md font-medium no-underline"
              >
                Download Resume
              </a>
              <Link
                href="/blog"
                className=""
                title="Blog"
              >
                  <BsFillBookmarksFill size={23}/>
              </Link>
            </div>

            <div className="sm:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;