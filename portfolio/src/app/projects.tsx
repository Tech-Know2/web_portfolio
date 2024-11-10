"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const projectsData = [
  {
    title: "Servotor",
    description: "The evolution of Rook Servers, built on open-source and community tools. Developed with a grander vision and a completely unique, self-built frontend. Visit the site at servotor.vercel.app to explore it for yourself.",
    hashtags: "#Paymenter, #CyberPanel, #Pterodactyl",
    github: "https://github.com/Tech-Know2/Servotor",
    startDate: "August 2024",
    endDate: "Present",
  },
  {
    title: "Table Top Empires",
    description: "Developed a real-time, turn-based strategy game with Unity and Steam. It began as a project with my game studio, Table Top Games, but I continued as a solo developer after the group split following high school.",
    hashtags: "#Unity, #Steam, #C#",
    github: "https://github.com/Tech-Know2/RTS-Unity-Game",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    title: "Stater",
    description: "Currently developing a web and mobile app that integrates MoneyGram, Stellar, and Plaid to provide an alternative to traditional banking.",
    hashtags: "#MongoDB, #Typescript, #Stellar",
    github: "https://github.com/Tech-Know2/stater-outdated",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    title: "Rook Servers",
    description: "My first attempt at developing a web hosting and game server hosting platform. Built with WiseCP, CyberPanel, and Pterodactyl, and hosted on Vultr and Ionos, the setup was functional but poorly executed. Despite its shortcomings, it allowed me to validate my hypothesis that there are more efficient ways to run this business than relying on reseller hosting.",
    hashtags: "#WiseCp, #CyberPanel, #Pterodactyl",
    github: "https://github.com/Tech-Know2",
    startDate: "January 2023",
    endDate: "June 2023",
  },
  {
    title: "Girls Scout Troop 219 Website",
    description: "Designed and developed a prototype website in HTML, CSS, and JS for one of the first all-girls Scout BSA troops. I then rebuilt it in Joomla so they could maintain it themselves. Additionally, I helped them establish the structure and foundation for their troop, as I was a leader in my own troop.",
    hashtags: "#coFounder, #Internship",
    github: "https://github.com/Tech-Know2",
    startDate: "May 2019",
    endDate: "January 2020",
  },
  
  {
    title: "Quibbit",
    description: "An 'Unblocked' flash game website with over 200 games in the content catalog, created so my friends and other students could bypass our middle school's game-blocking system.",
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
              className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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