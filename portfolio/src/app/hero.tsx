"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main>
            <div className="flex items-center justify-center pt-[10%]">
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6">
                    {/* Left side with text and buttons */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                            I'm
                            <br />
                            Cooper Harris
                        </h1>
                        <div className="flex space-x-4">
                        <h2 className="text-5xl md:text-3xl text-black leading-tight">I am working on a Software Engineering Bachelors and Masters at ASU</h2>
                        </div>
                    </div>
                    {/* Right side for image */}
                    <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center flex flex-col pl-[5%]">
                        <h1 className="text-5xl md:text-2xl text-black leading-tight mb-6">My Main Projects</h1>
                        <ul className="">
                            <li>Servotor</li>
                            <li>Stater</li>
                            <li>Table Top Empires</li>
                            <li>Space Farm Tycoon</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}