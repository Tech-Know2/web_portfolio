"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  return (
    <section className="pt-16 pb-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h1
          className="text-5xl font-bold text-black mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Main container for columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Language Skills */}
          <div className="bg-white p-6 rounded-xl space-y-3 shadow-md">
            <LanguageSkills />
          </div>
          {/* Education Section */}
          <div className="bg-white p-6 rounded-xl space-y-3 shadow-md">
            <EducationSection />
          </div>
          {/* Passions and Interests Section */}
          <div className="bg-white p-6 rounded-xl space-y-3 shadow-md">
            <PassionsInterests />
          </div>
          {/* Platforms and Tools */}
          <div className="bg-white p-6 rounded-xl space-y-3 shadow-md">
            <PlatformsTools />
          </div>
          {/* Projects - this takes up the last two grid spots */}
          <div className="bg-white p-6 rounded-xl space-y-3 shadow-md col-span-2 lg:col-span-2">
            <Projects />
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
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Language Skills</h2>
      {['C#', 'Java', 'TypeScript', 'Kotlin', 'Rust'].map((language, index) => (
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
          <h3 className="text-xl font-medium">{language}</h3>
          <div className="flex space-x-2 mt-2">
            {[...Array(5)].map((_, ratingIndex) => {
              const rating = (index === 0 && ratingIndex < 5) || 
                             (index === 1 && ratingIndex < 4) || 
                             (index === 2 && ratingIndex < 3) || 
                             (index === 3 && ratingIndex < 2) || 
                             (index === 4 && ratingIndex < 2);

              return (
                <div
                  key={ratingIndex}
                  className={`w-6 h-6 rounded-full border-2 ${rating ? 'bg-black' : 'bg-gray-300'}`}
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
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Education</h2>
      {[ 
        { degree: "Bachelors of Software Engineering", institution: "Arizona State University - Polytechnic", year: "2028" },
        { degree: "Silicon Vally Immersion Camp", institution: "Menlo College", year: "2023" },
        { degree: "Whitney High School", institution: "4.5 GPA", year: "2024" },
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
            <h3 className="text-xl font-medium">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
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
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Passions & Interests</h2>
      <motion.ul
        className="text-lg text-gray-700 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[
          "Centralized Finance",
          "Decentralized Finance",
          "Science Fiction",
          "Formula One and Motorsports",
          "Hard Rock",
          "Outdoors",
          "Entrepreneurship and Business",
          "Aerospace",
          "World History",
          "Video Game Development"
        ].map((interest, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiChevronRight className="mr-3 text-gray-700" /> {interest}
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
        className="text-lg text-gray-700 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {['Unity', 'Steamworks', 'Node.js', 'React & Next.js', 'Wordpress, Prestashop, Wix, Joomla, Woocommerce, Shopify', 'GitHub', 'SQL & NoSQL Databases (Supabase, MongoDB)', 'Visual Studio Code & JetBrains IDEs'].map((tool, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiChevronRight className="mr-3 text-gray-700" /> {tool}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <h2 className="text-3xl font-semibold text-black mb-4 text-center">Projects I've Built</h2>
      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {[ 
          {
            title: "Servotor - Cloud Compute Services",
            description:
              "Developed and launched a fully automated platform for deploying cloud compute services and products, streamlining the user experience from start to finish.",
          },
          {
            title: "Stater - Personal Finance App",
            description:
              "Building an inclusive personal finance application that offers free and accessible banking services to individuals worldwide, ensuring financial equality for all.",
          },
          {
            title: "Table Top Empires - Strategy Game",
            description:
              "A dynamic real-time multiplayer strategy game that allows players to construct and govern their empire within a procedurally generated world, using randomly drawn cards to shape their path to victory.",
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
        ].map((project, index) => (
          <motion.li
            key={index}
            className="text-lg text-gray-700 hover:text-black transition-colors duration-300 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
          >
            {/* Title */}
            <div className="flex flex-row">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiChevronRight className="mr-3 text-gray-700" /> {project.title}
              </motion.div>
            </div>

            {/* Description (Appears on hover, disappears on hover out) */}
            <motion.p
              className="text-gray-500 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                opacity: { duration: 0.3 },
                height: { duration: 0.3 },
              }}
              whileHover={{
                opacity: 1,
                height: "auto", // Set to auto so description can expand
                transition: { duration: 0.3 },
              }}
            >
              {project.description}
            </motion.p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AboutMe;