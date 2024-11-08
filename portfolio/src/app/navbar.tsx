"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='pb-[1%] pt-[2%]'>
            {/* Main navigation bar */}
            <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        {/* Desktop Navigation links */}
                        <div className="hidden sm:flex sm:ml-6 flex-grow justify-center items-center gap-3">
                            <Link href="#about-me" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                About Me
                            </Link>
                            <Link href="#my-goals" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                My Goals
                            </Link>
                            <Link href="#timeline" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Timeline
                            </Link>
                            <Link href="#projects" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Projects
                            </Link>
                            <Link href="#contact" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Contact Me
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="sm:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-black hover:text-white focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="sm:hidden flex flex-col items-center mt-4">
                            <Link href="#about-me" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                About Me
                            </Link>
                            <Link href="#my-goals" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                My Goals
                            </Link>
                            <Link href="#timeline" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Timeline
                            </Link>
                            <Link href="#projects" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Projects
                            </Link>
                            <Link href="#contact" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Contact Me
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;