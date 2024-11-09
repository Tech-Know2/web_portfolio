"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const projectsData = [
  {
    title: "Servotor",
    description: "The evolution of Rook Servers, built on open-source and community tools.",
    hashtags: "#CyberPanel, #Pterodactyl",
    github: "https://github.com/Tech-Know2/Servotor",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    title: "Table Top Empires",
    description: "Developed a real-time, turn-based strategy game with Unity and Steam.",
    hashtags: "#Unity, #Steam, #C#",
    github: "https://github.com/Tech-Know2/RTS-Unity-Game",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    title: "Stater",
    description: "Developing an app integrating MoneyGram, Stellar, and Plaid for an alternative to traditional banking.",
    hashtags: "#MongoDB, #Typescript, #Stellar",
    github: "https://github.com/Tech-Know2/stater-outdated",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    title: "Quibbit",
    description: "An “Unblocked” flash game website with over 200 games in the content catalog so that my friends and other students could get around our middle school's game blocking system.",
    hashtags: "#GoogleSites, #Flash, #Adsense",
    github: "https://github.com/tech-know2",
    startDate: "September 2018",
    endDate: "June 2021",
  },
];

const Projects = () => {
  return (
    <section className="pt-2 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center pb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Personal Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl space-y-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold py-[1%]">{project.title}</h3>
              <p className="text-sm text-black py-[1%]">
                {project.startDate} - {project.endDate}
              </p>
              <p className="text-base text-black py-[1%]">{project.description}</p>
              <p className="text-sm text-black py-[1%]">{project.hashtags}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black flex items-center space-x-2 pt-[4%] group-hover:text-blue-500"
              >
                <span>View on GitHub</span>
                <FiChevronRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;