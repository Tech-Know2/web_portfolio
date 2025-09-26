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
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center">About Me</h1>

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
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black inline-block pb-2">
        Language Proficiency
      </h2>

      {/* Proficient */}
      <div>
        <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide">
          Proficient
        </h3>
        <ul className="space-y-1 text-black">
          <li className="flex items-center"><GoDash className="mr-2" /> C#</li>
          <li className="flex items-center"><GoDash className="mr-2" /> Java</li>
        </ul>
      </div>

      {/* Experienced / Familiar */}
      <div>
        <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide">
          Experienced / Familiar
        </h3>
        <ul className="space-y-1 text-black">
          <li className="flex items-center"><GoDash className="mr-2" /> C</li>
          <li className="flex items-center"><GoDash className="mr-2" /> C++</li>
          <li className="flex items-center"><GoDash className="mr-2" /> TypeScript</li>
          <li className="flex items-center"><GoDash className="mr-2" /> SQL</li>
        </ul>
      </div>

      {/* Learning */}
      <div>
        <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide">
          Learning
        </h3>
        <ul className="space-y-1 text-black">
          <li className="flex items-center"><GoDash className="mr-2" /> Kotlin</li>
          <li className="flex items-center"><GoDash className="mr-2" /> Rust</li>
        </ul>
      </div>
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
        { degree: "High School Diploma", institution: "Whitney High School", year: "2024", gpa:"4.25 GPA"  },
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

  const interests = [
    "Economics",
    "Decentralized Finance",
    "Aerospace",
    "Motorsports Engineering",
  ];

  return (
    <motion.div
      ref={ref}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black inline-block pb-2">
        Passions & Interests
      </h2>

      <ul className="space-y-2 text-black text-lg">
        {interests.map((interest, index) => (
          <li key={index} className="flex items-center">
            <GoDash className="mr-2 text-black" /> {interest}
          </li>
        ))}
      </ul>
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
      <ul className="text-lg text-black space-y-2">
        {['Unity, Steamworks', 'React, Next.js, & Vercel', "Sanity, MedusaJS, PayloadCMS" , 'GitHub & SourceTree', 'Supabase, MongoDB, PostgreSQL', 'Redis & MinIO', 'VS Code & JetBrains IDEs', 'Coolify & Dokploy', 'Docker'].map((tool, index) => (
          <li
            key={index}
            className="flex items-center"
          >
            <GoDash className="mr-3 text-black" /> {tool}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Test Scores & Academic Achievements Section
const TestScores = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const tests = [
    { test: "Dean’s List", score: "2x", date: "ASU" },
    { test: "AP Calculus BC", score: "3", date: "2024" },
    { test: "AP Computer Science A", score: "3", date: "2024" },
    { test: "AP Microeconomics", score: "5", date: "2024" },
    { test: "AP Psychology", score: "3", date: "2024" },
    { test: "AP United States History", score: "5", date: "2023" },
    { test: "AP Computer Science Principles", score: "3", date: "2023" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Test Scores & Academic Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test, index) => (
          <div
            key={index}
            className="bg-white border border-black p-4 rounded-md shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg text-black">{test.test}</h3>
              <p className="text-sm text-gray-600">{test.date}</p>
            </div>
            <p className="font-bold text-xl text-right text-black">{test.score}</p>
          </div>
        ))}
      </div>
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
      <ul className="space-y-4" >
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
          <li
            key={index}
            className="text-lg text-black hover:text-black transition-colors duration-300 relative"
          >
            {/* Title with click functionality */}
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              <div className="flex items-center">
                {/* Change the icon depending on the expanded state */}
                <FiChevronRight
                  className={`mr-3 text-black transform ${
                    expandedProject === index ? "rotate-90" : "rotate-0"
                  } transition-transform duration-300`}
                />
                {project.title}
              </div>
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
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AboutMe;
