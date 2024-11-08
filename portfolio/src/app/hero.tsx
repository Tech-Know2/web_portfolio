"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <main>
      <div className="flex items-center justify-center pt-[10%]">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6" ref={ref}>
          
          {/* Left side with text and introduction */}
          <div className="w-full md:w-1/2">
            <motion.h1
              className="text-6xl md:text-6xl font-bold text-black leading-tight mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              Hey,
              <br />
              Im Cooper Harris
            </motion.h1>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="text-5xl md:text-3xl text-black leading-tight">
                I am pursuing both a Bachelors degree in Software Engineering at ASU Polytechnic.
              </h2>
            </motion.div>
          </div>

          {/* Right side for image and project list */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center flex-col pl-[5%]">
            <motion.h1
              className="text-5xl md:text-2xl text-black leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Key Projects
            </motion.h1>
            <motion.ul
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.li
                className="relative group text-xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                />
                Servotor
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </motion.li>
              <motion.li
                className="relative group text-xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                />
                Stater
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </motion.li>
              <motion.li
                className="relative group text-xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                />
                Tabletop Empires
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </main>
  );
}