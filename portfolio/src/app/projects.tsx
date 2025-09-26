"use client";

import { FiChevronRight } from "react-icons/fi";

const projectsData = [
  {
    title: "E-Commerce Website",
    description:
      "Interned at Stiver Optics, where I developed a fully functional e-commerce website. For cloud management, I utilized the open-source tool Coolify to automatically deploy and manage PostgreSQL, Redis, and MinIO databases, along with the frontend, server, and worker instances. Implemented features such as email templates, search functionality, and a review system, and am currently integrating with Odoo and QuickBooks.",
    link: "https://store.stiveroptics.com",
    startDate: "August 2025",
    endDate: "Present",
  },
  {
    title: "WalletDock",
    description:
      "Built a proof of concept using Thirdweb's account abstraction for crypto wallets across EVM chains, combined with Decent for swapping and bridging. This project served as an exploration of Web3 development workflows and practical applications.",
    link: "https://github.com/Tech-Know2/WalletFunder",
    startDate: "March 2025",
    endDate: "April 2025",
  },
  {
    title: "Servotor",
    description:
      "The successor to Rook Servers, built entirely on open-source and community-driven tools. Designed with a custom frontend and a broader long-term vision. Backend built with Paymenter, Cyberpanel, and Pterodactyl.",
    link: "https://github.com/Tech-Know2/Servotor",
    startDate: "August 2024",
    endDate: "March 2025",
  },
  {
    title: "Table Top Empires",
    description:
      "Worked on building a real-time, turn-based strategy game with Unity and Steam integration. Initially developed as part of my game studio, Table Top Games, I later continued solo development after the group disbanded post-high school.",
    link: "https://github.com/Tech-Know2/RTS-Unity-Game",
    startDate: "January 2023",
    endDate: "Terminated",
  },
  {
    title: "Stater",
    description:
      "Began the development of a web and mobile platform enabling users worldwide to manage personal finances through Web3 technologies. Integrated with Reown for account-abstracted smart wallets, KyberSwap for token swaps, Circle for stablecoins and bridging, and Morpho for lending. Future plans include integrations for wire and ACH transfers, as well as debit, credit, and prepaid card services.",
    link: "https://github.com/Tech-Know2/HarrisGroup",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    title: "Rook Servers",
    description:
      "First attempt at building a web and game server hosting platform. Utilized WiseCP, CyberPanel, and Pterodactyl, hosted on Vultr and Ionos. While the implementation had shortcomings, the project validated my hypothesis that more efficient solutions exist compared to existing traditional reseller hosting plans.",
    link: "https://youtu.be/VdD_rBO_SJU",
    startDate: "January 2023",
    endDate: "June 2023",
  },
  {
    title: "Girl Scout Troop 219 Website",
    description:
      "Designed and developed a prototype website in HTML, CSS, and JavaScript for one of the first all-girls Scout BSA troops in Northern California. Later rebuilt the site in Joomla to ensure maintainability. Also assisted the troop in establishing its structure and foundation, drawing from my experience as a several time patrol and scout leader.",
    link: "",
    startDate: "May 2019",
    endDate: "January 2020",
  },
  {
    title: "Quibbit",
    description:
      "Created an 'unblocked' flash game website with a catalog of over 200 games, designed to provide classmates access despite school network restrictions. Served as an early introduction to web development and user engagement.",
    link: "https://youtu.be/JRiIGwQAxcs",
    startDate: "September 2018",
    endDate: "June 2021",
  },
];


const Projects = () => {
  return (
    <section className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center pb-10">Personal Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold py-[1%]">{project.title}</h3>
              <p className="text-sm text-black py-[1%]">
                {project.startDate} - {project.endDate}
              </p>
              <p className="text-base text-black py-[1%]">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black flex items-center space-x-2 pt-[4%] group-hover:text-blue-500"
              >
                <span>Learn More</span>
                <FiChevronRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;