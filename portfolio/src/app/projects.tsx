"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const projectsData = [
  {
    title: "Ecommerce Website",
    description: "I interned for Stiver Optics, building them a fully fledged ecommerce website. For the cloud management and cloud stack I used the open source tool Coolify. I used it to auto deploy and run my PostgreSQL, Redis, and MinIO DBs, along with my Frontend, Server, and Worker instances of the website. I built email templates, search functions, a reviews system, and I'm in the process of integrating with Odoo and QuickBooks.",
    hashtags: "#NextJS, #MedusaJS, #Coolify, #Hetzner, #Namecheap",
    github: "",
    startDate: "August 2025",
    endDate: "Current",
  },
  {
    title: "EconSim",
    description: "I am trying to combine my skills at game dev with my skills at web app development and make an economic simulator using CRUD actions and strong database design.",
    hashtags: "#NextJS, #Supabase",
    github: "https://github.com/Tech-Know2/econsim",
    startDate: "March 2025",
    endDate: "Current",
  },
  {
    title: "WalletDock",
    description: "I made this using Thirdweb's account abstraction for crypto wallets across EVMs and then I also used Decent for swapping and bridging. This was a cool proof of concept that I made so that I could see how Web3 development occured.",
    hashtags: "#NextJS, #Vercel, #Thirdweb, #Decent, #Web3",
    github: "https://github.com/Tech-Know2/WalletFunder",
    startDate: "March 2025",
    endDate: "April 2025",
  },
  {
    title: "Servotor",
    description: "The evolution of Rook Servers, built on open-source and community tools. Developed with a grander vision and a completely unique, self-built frontend. Visit the site at servotor.vercel.app to explore it for yourself.",
    hashtags: "#Paymenter, #CyberPanel, #Pterodactyl",
    github: "https://github.com/Tech-Know2/Servotor",
    startDate: "August 2024",
    endDate: "March 2025",
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
    description: "I am currently developing a web and mobile based platform that will allow anyone anywhere to manage their own finances through Web3 technologies. I have integrated with Reown for account abstracted smart wallets, then using KyberSwap for swapping technologies, Circle for Stablecoins and bridging, and then Morpho for lending. Eventually I will integrate with a platform for wire and ACH transfers, and credit/debit/prepaid cards.",
    hashtags: "#Supabase, #NextJS, #Reown, #Plaid, #Coinbase, #Circle",
    github: "https://github.com/Tech-Know2/HarrisGroup",
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
    <section className="pt-8 pb-16">
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