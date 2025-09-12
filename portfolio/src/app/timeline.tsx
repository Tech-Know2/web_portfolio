"use client";

import React, { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const events = [
  { 
    title: "Stiver Optics", 
    description: "Designed, developed, and deployed a custom ecommerce platform for Stiver Optics using MedusaJS, NextJS, and Payload CMS. Integrated Stripe, Algolia, Redis, PostgreSQL, and MinIO to deliver advanced functionality. Built custom order flows, automated marketing, and email systems, while managing full-stack infrastructure via Docker and Coolify. Collaborated closely with the client through frequent iterations and provided post-launch support to ensure long-term success.", 
    date: "August 2025", 
    hashtags:"#NextJS, #Coolify, #MedusaJS, #PayloadCMS, #Internship", 
    badge:"Internship",
    importance: "1"
  },
  { 
    title: "WalletDock", 
    description: "Built a platform for free wallet swaps and top-ups utilizing NextJS, and ThirdWeb.", 
    date: "March 2025", 
    hashtags:"#Web3, #Thirdweb, #NextJS", 
    badge:"Project",
    importance: "2"
  },
  { 
    title: "Servotor", 
    description: "Evolved Rook Servers using open-source tools such as Cyberpanel, Paymenter, Pterodactyl, and a wide variety of other tools.", 
    date: "August 2024", 
    hashtags:"#CyberPanel, #Pterodactyl", 
    badge:"Project" ,
    importance: "2"
  },
  { 
    title: "ASU Polytechnic", 
    description: "Started my major in Software Engineering anf my minor in Economics at ASU Polytechnic.", 
    date: "June 2024", 
    hashtags:"#SoftwareEngineering, #University, #ASU, #College, #Economics", 
    badge:"Personal" ,
    importance: "3"
  },
  { 
    title: "High School Graduation", 
    description: "Graduated with 4.5 GPA from Whitney High School. Within the top 5% of all students in California", 
    date: "June 2024", 
    hashtags:"#Java, #SQL, #React", 
    badge:"Personal" ,
    importance: "3"
  },
  { 
    title: "Stater", 
    description: "Developing Web3 banking alternative app.", 
    date: "January 2023", 
    hashtags:"#Supabase, #Circle, #Coinbase, #Morpho, #Reown", 
    badge:"Project" ,
    importance: "2"
  },
  { 
    title: "Table Top Games", 
    description: "Founded indie game studio; released Table Top Empires on Steam.", 
    date: "January 2023", 
    hashtags:"#Unity, #Steam, #C#", 
    badge:"Project" ,
    importance: "2"
  },
  { 
    title: "Rook Servers", 
    description: "Launched first business offering hosting and game services.", 
    date: "January 2023", 
    hashtags:"#Entrepreneur, #CyberPanel, #Pterodactyl", 
    badge:"Project" ,
    importance: "2"
  },
  { 
    title: "Michelangelo's - Internship", 
    description: "Built eCommerce site generating $50k in 2 months for a local business allowing them to survive and grow during the pandemic.", 
    date: "March 2020", 
    hashtags:"#Shopify, #Internship", 
    badge:"Internship" ,
    importance: "1"
  },
  { 
    title: "Troop 219 Website", 
    description: "Helped found Troop 219, then designed and developed a custom site for one of the first all-girls BSA troops in Northern California.", 
    date: "May 2019", 
    hashtags:"#HTML, #CSS, #JS, #Joomla", 
    badge:"Internship" ,
    importance: "1"
  }
];


export default function TimelineComponent() {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);

  const handlePrev = () => {
    setSelectedEvent((prev) => (prev > 0 ? prev - 1 : events.length - 1));
  };

  const handleNext = () => {
    setSelectedEvent((prev) => (prev < events.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="pb-8">
      <div className="text-center">
        <h1 className="text-5xl pb-[5%] font-semibold">My Journey So Far</h1>
      </div>

      <div className="flex justify-center gap-12 sm:gap-2 md:gap-4">
        {/* Left Side Timeline */}
        <div>
          <Timeline position="right">
            {events.map((event, index) => (
              <TimelineItem key={index}>
                {/* Date on left */}
                <TimelineOppositeContent
                  sx={{ 
                    fontSize: "0.9rem", 
                    color: "black",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: selectedEvent === index ? "scale(1.2)" : "scale(1.1)",
                    },
                  }}
                  align="right"
                >
                  {event.date}
                </TimelineOppositeContent>

                {/* Dot in middle */}
                <TimelineSeparator>
                  <TimelineDot
                    variant={selectedEvent === index ? "filled" : "outlined"}
                    sx={{
                      borderColor: "black",
                      borderWidth: "2px",
                      bgcolor: selectedEvent === index ? "black" : "transparent",
                      transform: selectedEvent === index ? "scale(1.3)" : "scale(1)",
                      transition: "all 0.2s ease-in-out",
                      padding: "7px",
                      cursor: "pointer",
                      "&:hover": {
                        transform: selectedEvent === index ? "scale(1.35)" : "scale(1.2)",
                        bgcolor: 'gray'
                      },
                    }}
                    onClick={() => setSelectedEvent(index)}
                  />
                  {index < events.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: "black" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* Right Side Details Panel */}
        <div className="w-[70%] flex flex-col items-center">
          <AnimatePresence mode="wait">
            {selectedEvent !== null && (
              <motion.div
                key={selectedEvent}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white border rounded-lg shadow-lg w-full"
              >
                <div
                  className="inline-block mt-3 px-3 py-1 text-xs font-semibold uppercase rounded-lg mb-[1%]"
                  style={{
                    backgroundColor:
                      events[selectedEvent].badge === "Internship"
                        ? "#7f7f7f"
                        : events[selectedEvent].badge === "Project"
                        ? "#a5a5a5"
                        : events[selectedEvent].badge === "Personal"
                        ? "#cccccc"
                        : "#f2f2f2",
                  }}
                >
                  {events[selectedEvent].badge}
                </div>
                <h3 className="font-bold text-2xl mb-2">{events[selectedEvent].title}</h3>
                <p className="text-sm text-gray-600 mb-2">{events[selectedEvent].date}</p>
                <p className="mb-4">{events[selectedEvent].description}</p>
                <p className="text-sm text-gray-600">{events[selectedEvent].hashtags}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <MdArrowBack size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <MdArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}