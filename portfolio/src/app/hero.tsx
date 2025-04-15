"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaYoutube, FaHandshake, FaGithub, FaBlogger } from "react-icons/fa";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main>
      <div className="flex items-center justify-center pt-[10%] px-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left side with text and introduction */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              ref={ref}
            >
              Hey,
              <br />
              I&apos;m Cooper Harris
            </motion.h1>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.3 }}
              ref={ref}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-black leading-tight">
                I&apos;m pursuing a B.S. in Software Engineering and minoring in Economics at ASU Polytech
              </h2>
            </motion.div>
          </div>

          {/* Right side for image and project list */}
          <div className="w-full md:w-1/2 flex justify-center flex-col pl-0 md:pl-[5%]">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl text-black leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={ref} 
            >
              Projects in Development
            </motion.h1>
            <motion.ul
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              ref={ref} 
            >
              <motion.li
                className="relative group text-xl sm:text-2xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                ref={ref} 
              >
                <a href="#projects">
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                  />
                  Servotor
                  <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    &rarr;
                  </span>
                </a>
              </motion.li>
              <motion.li
                className="relative group text-xl sm:text-2xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                ref={ref} 
              >
                <a href="#projects">
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                  />
                  Stater
                  <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    &rarr;
                  </span>
                </a>
              </motion.li>
              <motion.li
                className="relative group text-xl sm:text-2xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                ref={ref} 
              >
                <a href="#projects">
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                  />
                  Econ Sim
                  <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    &rarr;
                  </span>
                </a>
              </motion.li>
              <motion.li
                className="relative group text-xl sm:text-2xl font-normal cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                ref={ref} 
              >
                <a href="#projects">
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"
                  />
                  Tabletop Empires
                  <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    &rarr;
                  </span>
                </a>
              </motion.li>
            </motion.ul>

            {/* Social media icons */}
            <motion.div
              className="flex space-x-8 mt-8 justify-center mt-[10%]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              ref={ref}
            >
              <a
                href="https://www.linkedin.com/in/james-cooper-harris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.youtube.com/@dumbmoney261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="https://asu.joinhandshake.com/profiles/56784401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                <FaHandshake size={32} />
              </a>
              <a
                href="https://github.com/tech-know2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://coopersdevblog.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                <FaBlogger size={32} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}