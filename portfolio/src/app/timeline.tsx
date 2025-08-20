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
  { title: "Started Programming", description: "Began programming by creating small games in Scratch.", date: "January 2016", hashtags:"#Scratch, #Block", badge:"Personal" },
  { title: "Web Development", description: "Learned HTML, CSS, and JavaScript in 7th grade.", date: "August 2018", hashtags:"#HTML, #CSS, #JS", badge:"Personal" },
  { title: "Quibbit", description: "Created an unblocked games website with 200+ titles.", date: "September 2018", hashtags:"#GoogleSites, #Flash, #Entrepreneur", badge:"Project" },
  { title: "Unity Games", description: "Transitioned to Unity with C# and built first games.", date: "February 2019", hashtags:"#C#, #Unity", badge:"Project" },
  { title: "Shopify Ventures", description: "Launched dropshipping stores QuiCase and Furry Prints.", date: "April 2019", hashtags:"#Shopify, #Entrepreneur", badge:"Project" },
  { title: "Troop 219 Website", description: "Developed custom site for one of the first all-girls BSA troops.", date: "May 2019", hashtags:"#HTML, #CSS, #JS, #Joomla", badge:"Internship" },
  { title: "Crypto Experiments", description: "Mined LTC/BTC and launched CryptoByte altcoin.", date: "July 2019", hashtags:"#Crypto, #BTC, #LTC, #Polygon", badge:"Project" },
  { title: "Michelangelo's - Internship", description: "Built eCommerce site generating $50k in 2 months.", date: "March 2020", hashtags:"#Shopify, #Internship", badge:"Internship" },
  { title: "Eagle Scout Project", description: "Earned the rank of Eagle Scout after 2 years of work.", date: "July 2022", hashtags:"#BSA, #Eagle", badge:"Project" },
  { title: "Rook Servers", description: "Launched first business offering hosting and game services.", date: "January 2023", hashtags:"#Entrepreneur, #CyberPanel, #Pterodactyl", badge:"Project" },
  { title: "Table Top Games", description: "Founded indie game studio; released Table Top Empires on Steam.", date: "January 2023", hashtags:"#Unity, #Steam, #C#", badge:"Project" },
  { title: "Stater", description: "Developing Web3 banking alternative app.", date: "January 2023", hashtags:"#Supabase, #Circle, #Coinbase, #Morpho, #Reown", badge:"Project" },
  { title: "High School Graduation", description: "Graduated with 4.5 GPA from Whitney High School.", date: "June 2024", hashtags:"#Java, #SQL, #React", badge:"Personal" },
  { title: "ASU Polytechnic", description: "Started Software Engineering degree at ASU Poly.", date: "June 2024", hashtags:"", badge:"Personal" },
  { title: "Servotor", description: "Evolved Rook Servers using open-source tools.", date: "August 2024", hashtags:"#CyberPanel, #Pterodactyl", badge:"Project" },
  { title: "WalletDock", description: "Built a platform for free wallet swaps and top-ups.", date: "March 2025", hashtags:"#Web3, #Thirdweb, #NextJS", badge:"Project" },
  { title: "Stiver Optics", description: "Built a custom ecommerce website with NextJS and MedusaJS", date: "August 2025", hashtags:"#NextJS, #Coolify, #MedusaJS, #Internship", badge:"Internship" }
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