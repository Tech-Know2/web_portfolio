"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/Servotor Full.png';

const Navbar = () => {
    return (
        <div className='pb-[1%] pt-[2%]'>
            {/* Main navigation bar */}
            <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="relative flex items-center justify-between h-16">                        
                        {/* Navigation links */}
                        <div className="hidden sm:flex sm:ml-6 flex-grow justify-center items-center gap-3">
                            <Link href="/game-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                About Me
                            </Link>
                            <Link href="/web-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Projects
                            </Link>
                            <Link href="/vps" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Timeline
                            </Link>
                            <Link href="/storage" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                My Goals
                            </Link>
                            <Link href="/ai" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;