"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { GoDash } from "react-icons/go";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Main container for columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Language Skills */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <LanguageSkills />
          </div>
          {/* Education Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <EducationSection />
          </div>
          {/* Passions and Interests Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <PassionsInterests />
          </div>
          {/* Platforms and Tools */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <PlatformsTools />
          </div>
          {/* Projects - this takes up the last two grid spots */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md col-span-1 sm:col-span-2 lg:col-span-2">
            <Projects />
          </div>
          {/* Test Scores Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md col-span-full">
            <TestScores />
          </div>
        </div>
      </div>
    </section>
  );
};

// Language Skills Section
const LanguageSkills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 text-center">Language Proficiency</h2>
      {['C#', 'Java', 'C', 'TypeScript', 'Kotlin', 'Rust', 'SQL'].map((language, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <h3 className="text-lg sm:text-xl font-medium">{language}</h3>
          <div className="flex space-x-2 mt-2">
            {[...Array(5)].map((_, ratingIndex) => {
              const rating = (index === 0 && ratingIndex < 5) || 
                             (index === 1 && ratingIndex < 4) || 
                             (index === 2 && ratingIndex < 3) || 
                             (index === 3 && ratingIndex < 2) || 
                             (index === 4 && ratingIndex < 2) || 
                             (index === 5 && ratingIndex < 2) || 
                             (index === 6 && ratingIndex < 2);

              return (
                <div
                  key={ratingIndex}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${rating ? 'bg-black' : 'bg-gray-300'}`}
                ></div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Education Section
const EducationSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 text-center">Education</h2>
      {[ 
        { degree: "BS of Software Engineering", institution: "Arizona State University - Polytechnic", year: "2028", gpa:"3.88 GPA" },
        { degree: "High School Diploma", institution: "Whitney High School", year: "2024", gpa:"4.5 GPA"  },
        { degree: "Silicon Vally Immersion Camp", institution: "Menlo College", year: "2023", gpa:"N/A"  },
      ].map((edu, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-medium">{edu.degree}</h3>
            <p className="text-black">{edu.institution}</p>
            <p className="text-black">{edu.gpa}</p>
            <p className="text-black">{edu.year}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Passions and Interests Section
const PassionsInterests = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 text-center">Passions & Interests</h2>
      <motion.ul
        className="text-lg text-black space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[
          "Finance and Economics",
          "CeFi & DeFi",
          "Aerospace and Defense",
          "Vertical Farming",
          "Science Fiction",
          "F1 and Motorsports",
          "Punk Rock",
          "Nature",
          "History"
        ].map((interest, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GoDash className="mr-3 text-black" /> {interest}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

// Platforms and Tools Section
const PlatformsTools = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Platforms & Tools</h2>
      <motion.ul
        className="text-lg text-black space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {['Unity, Steamworks', 'Node.js', 'React, Next.js, & Vercel', "Sanity, MedusaJS, PayloadCMS" , 'GitHub & SourceTree', 'SQL & NoSQL Databases (Supabase, MongoDB, PostgreSQL)', 'Redis & MinIO', 'VS Code & JetBrains IDEs', 'Coolify', ].map((tool, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GoDash className="mr-3 text-black" /> {tool}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const TestScores = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className=""
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">
        Test Scores & Academic Achievements
      </h2>
      {/* Grid Layout */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {/* Test Scores List */}
        {[
          { test: "Deans List", score: "2x", date: "ASU" },
          { test: "AP United States History", score: "5", date: "2023" },
          { test: "AP Computer Science Principles", score: "3", date: "2023" },
          { test: "AP Computer Science A", score: "3", date: "2024" },
          { test: "AP Microeconomics", score: "5", date: "2024" },
          { test: "AP Psychology", score: "3", date: "2024" },
          { test: "AP Calculus BC", score: "3", date: "2024" },
        ].map((test, index) => (
          <motion.div
              key={index}
              className="bg-gray-50 border-black border p-4 rounded-lg shadow-md flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                opacity: { duration: 0.7, delay: 0.3 * index },
                y: { duration: 0.7, delay: 0.3 * index },
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.05 }}
            >
            <div>
              <h3 className="font-medium text-lg">{test.test}</h3>
              <p className="text-sm text-gray-600">{test.date}</p>
            </div>
            <p className="font-semibold text-xl text-right">{test.score}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Projects Section
const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  // State to manage which project is expanded
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Toggle function for project description
  const toggleDescription = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Projects I&apos;ve Built</h2>
      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {[
          {
            title: "Eagle Project - Boy Scouts of America",
            description:
              "I spent 2 years working with the Chester California's Parks and Recreactions Department to build several benches for their community on a donated outdoor trail and walking area. I collaborated with local government, businesses, and volutneers to build benches for a community 3 hours away from my home.",
          },
          {
            title: "Ecommerce Website",
            description:
              "I built a website for a local business (Stiver Optics) using Coolify to manage my cloud platform, MedusaJS for the commerce engine, and NextJS with PayloadCMS for the frontend. I built email templates, connected PostgreSQL, Redis, and MinIO databases, deployed the frontend/server/worker instances with auto redeploys through GitHub and so much more.",
          },
          {
            title: "Servotor - Cloud Compute Services",
            description:
              "Developed and launched a fully automated platform for deploying cloud compute services and products, streamlining the user experience from start to finish. While being almost completely powered by opensource, community driven & developed tools.",
          },
          {
            title: "Stater - Personal Finance App",
            description:
              "I am currently developing a web and mobile based platform that will allow anyone anywhere to manage their own finances through Web3 technologies. I have integrated with Reown for account abstracted smart wallets, then using KyberSwap for swapping technologies, Circle for Stablecoins and bridging, and then Morpho for lending. Eventually I will integrate with a platform for wire and ACH transfers, and credit/debit/prepaid cards.",
          },
          {
            title: "Table Top Empires - Strategy Game",
            description:
              "A dynamic real-time multiplayer strategy game that allows players to construct and govern their empire within a procedurally generated world, using randomly drawn cards to shape their path to victory or downfall.",
          },
          {
            title: "Quibbit",
            description:
              "Created and launched a flash game streaming platform in middle school to provide students with accessible entertainment, bypassing restrictive school network blocks.",
          },
          {
            title: "Space Farm Tycoon - Simulation Game",
            description:
              "Developed my largest project on Scratch—a space simulation game where players can create and manage their own Mars settlement, simulating a small economy. Built for my middle school science midterm.",
          },
          {
            title: "WalletDock",
            description:
              "I made this using Thirdweb's account abstraction for crypto wallets across EVMs and then I also used Decent for swapping and bridging. This was a cool proof of concept that I made so that I could see how Web3 development occured.",
          },
        ].map((project, index) => (
          <motion.li
            key={index}
            className="text-lg text-black hover:text-black transition-colors duration-300 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
          >
            {/* Title with click functionality */}
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Change the icon depending on the expanded state */}
                <FiChevronRight
                  className={`mr-3 text-black transform ${
                    expandedProject === index ? "rotate-90" : "rotate-0"
                  } transition-transform duration-300`}
                />
                {project.title}
              </motion.div>
            </div>

            {/* Description (Visible if the project is expanded) */}
            {expandedProject === index && (
              <motion.p
                className="text-black mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto", // Set to auto so description expands
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  height: { duration: 0.3 },
                }}
              >
                {project.description}
              </motion.p>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AboutMe;
