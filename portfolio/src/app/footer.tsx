"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaHandshake, FaGithub, FaBlogger } from "react-icons/fa";

export default function Footer() {
  const currentLinks = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "/#about-me" },
    { title: "Timeline", href: "/#timeline" },
    { title: "Projects", href: "/#projects" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    // Outer spacing wrapper that matches your navbar container's padding rhythm
    <div className="pt-[4%] pb-[2%]">
      
      {/* Centered 90% Width Island Wrapper */}
      <motion.footer 
        className="w-[90%] mx-auto bg-white text-black rounded-lg shadow-lg px-6 py-12 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left Side: Contact & Branding */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                Let&apos;s Connect
              </h2>
              <p className="text-base text-gray-600 max-w-md">
                Currently pursuing a B.S. in Software Engineering & minoring in Economics at ASU. Looking for opportunities to build something impactful.
              </p>
            </div>
            
            <div className="space-y-3 text-lg font-medium">
              <div>
                <span className="text-gray-400 text-xs block font-normal uppercase tracking-wider mb-0.5">Email</span>
                <a href="mailto:cooperharris727@gmail.com" className="hover:text-neutral-600 transition-colors duration-300">
                  cooperharris727@gmail.com
                </a>
              </div>
              <div className="pt-1">
                <span className="text-gray-400 text-xs block font-normal uppercase tracking-wider mb-0.5">Location</span>
                <span className="text-neutral-800 font-normal">Phoenix, AZ & Sacramento, CA</span>
              </div>
            </div>
          </div>

          {/* Right Side: Navigation Links & Social Icons */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between gap-12 md:gap-8 lg:gap-20">
            
            {/* Quick Links matching Navbar Hrefs */}
            <div className="min-w-[140px]">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {currentLinks.map((link, index) => (
                  <li key={index} className="relative group text-md font-normal w-fit">
                    <Link href={link.href} className="block pr-6 py-0.5 text-neutral-800 hover:text-black">
                      {link.title}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        &rarr;
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons Container */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Socials
              </h3>
              <div className="grid grid-cols-5 gap-0 w-fit">
                {[
                  { icon: <FaLinkedin size={32} />, url: "https://www.linkedin.com/in/james-cooper-harris/" },
                  { icon: <FaYoutube size={32} />, url: "https://www.youtube.com/@dumbmoney261" },
                  { icon: <FaHandshake size={32} />, url: "https://asu.joinhandshake.com/profiles/newura" },
                  { icon: <FaGithub size={32} />, url: "https://github.com/tech-know2" },
                  { icon: <FaBlogger size={32} />, url: "https://coopersdevblog.blogspot.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-black hover:text-gray-700 transition-all duration-300 flex items-center justify-center"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Cooper Harris. All rights reserved.</p>
          <p className="italic">Built with Next.js & Tailwind</p>
        </div>
      </motion.footer>

    </div>
  );
}