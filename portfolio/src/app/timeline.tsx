"use client";

import React, { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion, AnimatePresence } from "framer-motion";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const events = [
  { title: "Started Programming", description: "Began programming by creating small whack-a-mole games in Scratch.", date: "January 2016", hashtags:"#Scratch, #Block", badge:"Personal" },
  { title: "Elementary School Graduation", description: "Graduated elementary school.", date: "June 2018", hashtags:"", badge:"Personal" },
  { title: "Web Development", description: "Learned HTML, CSS, and JS as part of my cStem pathway in 7th grade.", date: "August 2018", hashtags:"#HTML, #CSS, #JS", badge:"Personal" },
  { title: "Quibbit", description: "An “Unblocked” flash game website with over 200 games in the content catalog so that my friends and other students could get around our middle school's game blocking system.", date: "September 2018", hashtags:"#GoogleSites, #Flash, #Adsense, #Entrepreneur", badge:"Project" },
  { title: "Upgraded to Unity", description: "Transitioned from Scratch to Unity with C# in 7th grade.", date: "January 2019", hashtags:"#C#, #Unity", badge:"Personal" },
  { title: "Red Block the Game", description: "Built my first game using a Brackeys tutorial on Unity.", date: "February 2019", hashtags:"#C#, #Unity, #Tutorial", badge:"Project" },
  { title: "Space Farm Tycoon", description: "A city builder for Mars colonization, built in Scratch for a science project.", date: "February 2019", hashtags:"#Scratch, #Blocks", badge:"Project" },
  { title: "Admob Fundamentals", description: "Added monetization to my endless runner game.", date: "March 2019", hashtags:"#Monetization, #Unity, #Ads", badge:"Project" },
  { title: "QuiCase", description: "Launched a Shopify dropshipping site for phone cases.", date: "April 2019", hashtags:"#Shopify, #Entrepreneur", badge:"Project" },
  { title: "Troop 219", description: "Helped establish one of the first all-girls BSA scout troops globally and created a custom website to manage their online presence, including features like RSVPs, events, calendars, inventory, and communication. The site was developed using Joomla, WordPress, Replit, HTML, CSS, and JavaScript.", date: "May 2019", hashtags:"#HTML, #CSS, #JS, #Joomla", badge:"Internship" },
  { title: "Cloud Mining", description: "Rented Azure servers for mining Litecoin and Bitcoin.", date: "July 2019", hashtags:"#Crypto, #BTC, #LTC", badge:"Project" },
  { title: "CryptoByte", description: "I launched a small altcoin after following an EatTheBlocks tutorial on the Matic test chain called CryptoByte. I minted a several million of them and then added the and some testnet Polygon to a uniswap pool for trading and liquidity.", date: "July 2019", hashtags:"#Polygon, #CryptoByte, #Crypto", badge:"Project" },
  { title: "Furry Prints", description: "Launched a print-on-demand store for pet products using Shopify.", date: "August 2019", hashtags:"#Shopify, #Entrepreneur", badge:"Project" },
  { title: "Michelangelo's - Internship", description: "Developed and launched an eCommerce website that generated $50k in sales within two months, helping a local business adapt to pandemic challenges. Streamlined operations by integrating legacy systems into an online portal and unifying POS and digital sales through tools like Shopify and Square, improving employee satisfaction and efficiency.", date: "March 2020", hashtags:"#Shopify, #Internship", badge:"Internship" },
  { title: "Middle School Graduation", description: "Graduated with a 4.0 in my CSteam pathway.", date: "June 2020", hashtags:"#HTML, #CSS, #JS, #C#", badge:"Personal" },
  { title: "Eagle Scout Project", description: "Earned the rank of Eagle after 2 years of work on my project.", date: "July 2022", hashtags:"#BSA, #Eagle", badge:"Project" },
  { title: "Rook Servers", description: "Launched my first business offering web hosting, development, and game services.", date: "January 2023", hashtags:"#Entrepreneur, #CyberPanel, #Pterodactyl", badge:"Project" },
  { title: "Table Top Games", description: "Launched an indie game studio with classmates.", date: "January 2023", hashtags:"#Unity, #Entrepreneur", badge:"Project" },
  { title: "Table Top Empires", description: "Developed a real-time, turn-based strategy game with Unity and Steam.", date: "January 2023", hashtags:"#Unity, #Steam, #C#", badge:"Project" },
  { title: "Stater", description: "Developing an app integrating Reown, Circle, Coinbase, KyberSwap, and Morpho for an alternative to traditional banking.", date: "January 2023", hashtags:"#Supabase, #Circle, #Coinbase, #Morpho, #Reown", badge:"Project" },
  { title: "High School Graduation", description: "Graduated with a 4.5 GPA from Whitney High School.", date: "June 2024", hashtags:"#Java, #SQL, #React", badge:"Personal" },
  { title: "ASU Polytechnic", description: "Started my Software Engineering degree at ASU Poly.", date: "June 2020", hashtags:"", badge:"Project" },
  { title: "Servotor", description: "The evolution of Rook Servers, built on open-source and community tools.", date: "August 2024", hashtags:"#CyberPanel, #Pterodactyl", badge:"Project" },
  { title: "WalletDock", description: "A platform that allows for wallet swaps and wallet top-ups for free.", date: "March 2025", hashtags:"#Web3, #Thirdweb, #NextJS", badge:"Project" },
];

export default function TimelineComponent() {
  const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);

  const toggleEvent = (index: number) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  return (
    <div className="pb-8">
      <div className="text-center">
        <h1 className="text-5xl pb-[5%] font-semibold">My Journey So Far</h1>
      </div>
      <Timeline position="alternate" sx={{ marginBottom: -1 }}>
        {events.map((event, index) => (
          <TimelineItem key={index} sx={{ marginBottom: -4 }}>
            <TimelineSeparator sx={{ display: "flex", alignItems: "center", position: "relative" }}>
              <TimelineDot sx={{ bgcolor: "black" }} />
              {index < events.length - 1 && <TimelineConnector sx={{ bgcolor: "black" }} />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ padding: 0 }}
              >
                <div
                  className="p-2 bg-white border rounded-lg shadow-lg text-left hover:scale-105 hover:shadow-2xl transition-all px-[2%] py-[2%] mb-1 cursor-pointer"
                  style={{
                    width: "60%",
                    height: "auto",
                    margin: "0 auto",
                    position: "relative", // Ensure positioning context for badge
                  }}
                  onClick={() => toggleEvent(index)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-sm text-black-600 mb-2">{event.date}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div
                        className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 px-3 py-1 text-xs font-semibold uppercase text-black bg-white border border-black rounded-lg"
                        style={{
                          zIndex: 1,
                          backgroundColor:
                            event.badge === "Internship"
                              ? "#7f7f7f"
                              : event.badge === "Project"
                              ? "#a5a5a5"
                              : event.badge === "Personal"
                              ? "#cccccc"
                              : "#f2f2f2",
                        }}
                      >
                        {event.badge}
                      </div>
                      <div className="text-2xl text-black">
                        {openEventIndex === index ? <MdExpandLess /> : <MdExpandMore />}
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {openEventIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base mb-4">{event.description}</p>
                        <p className="text-sm text-black-600">{event.hashtags}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}