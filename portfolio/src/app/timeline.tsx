"use client";

import React, { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from "framer-motion";

const events = [
  { title: "Started Programming", description: "Began programming by creating small whack-a-mole games in Scratch.", date: "January 2016", hashtags:"#Scratch, #Block" },
  { title: "Elementary School Graduation", description: "Graduated elementary school.", date: "June 2018", hashtags:"" },
  { title: "Web Development", description: "Learned HTML, CSS, and JS as part of my cStem pathway in 7th grade.", date: "August 2018", hashtags:"#HTML, #CSS, #JS" },
  { title: "Upgraded to Unity", description: "Transitioned from Scratch to Unity with C# in 7th grade.", date: "January 2019", hashtags:"#C#, #Unity" },
  { title: "Red Block the Game", description: "Built my first game using a Brackeys tutorial on Unity.", date: "February 2019", hashtags:"#C#, #Unity, #Tutorial" },
  { title: "Space Farm Tycoon", description: "A city builder for Mars colonization, built in Scratch for a science project.", date: "February 2019", hashtags:"#Scratch, #Blocks" },
  { title: "Admob Fundamentals", description: "Added monetization to my endless runner game.", date: "March 2019", hashtags:"#Monetization, #Unity, #Ads" },
  { title: "QuiCase", description: "Launched a Shopify dropshipping site for phone cases.", date: "April 2019", hashtags:"#Shopify, #Entrepreneur" },
  { title: "Troop 219", description: "Created a website for an all-girls Scout BSA troop I helped establish.", date: "May 2019", hashtags:"#HTML, #CSS, #JS, #Joomla" },
  { title: "Cloud Mining", description: "Rented Azure servers for mining Litecoin and Bitcoin.", date: "July 2019", hashtags:"#Crypto, #BTC, #LTC" },
  { title: "Furry Prints", description: "Launched a print-on-demand store for pet products using Shopify.", date: "August 2019", hashtags:"#Shopify, #Entrepreneur" },
  { title: "Michelangelo's - Internship", description: "Helped bring a local business online during the pandemic.", date: "March 2020", hashtags:"#Shopify, #Internship" },
  { title: "Middle School Graduation", description: "Graduated with a 4.0 in my CSteam pathway.", date: "June 2020", hashtags:"#HTML, #CSS, #JS, #C#" },
  { title: "Eagle Scout Project", description: "Earned the rank of Eagle after 2 years of work on my project.", date: "July 2022", hashtags:"#BSA, #Eagle" },
  { title: "Rook Servers", description: "Launched my first business offering web hosting, development, and game services.", date: "January 2023", hashtags:"#Entrepreneur, #CyberPanel, #Pterodactyl" },
  { title: "Table Top Games", description: "Launched an indie game studio with classmates.", date: "January 2023", hashtags:"#Unity, #Entrepreneur" },
  { title: "Table Top Empires", description: "Developed a real-time, turn-based strategy game with Unity and Steam.", date: "January 2023", hashtags:"#Unity, #Steam, #C#" },
  { title: "Stater", description: "Developing an app integrating MoneyGram, Stellar, and Plaid for an alternative to traditional banking.", date: "January 2023", hashtags:"#MongoDB, #Typescript, #Stellar" },
  { title: "High School Graduation", description: "Graduated with a 4.5 GPA from Whitney High School.", date: "June 2024", hashtags:"#Java, #SQL, #React" },
  { title: "ASU Polytechnic", description: "Started my Software Engineering degree at ASU Poly.", date: "June 2020", hashtags:"" },
  { title: "Servotor", description: "The evolution of Rook Servers, built on open-source and community tools.", date: "August 2024", hashtags:"#CyberPanel, #Pterodactyl" },
];

export default function TimelineComponent() {
  const [eventsData] = useState(events);

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl pb-[5%] font-semibold">My Journey So Far</h1>
      </div>
      <Timeline position="alternate" sx={{ marginBottom: -1 }}>
        {eventsData.map((event, index) => (
          <TimelineItem key={index} sx={{ marginBottom: -4 }}>
            <TimelineSeparator sx={{ display: 'flex', alignItems: 'center' }}>
              <TimelineDot sx={{ bgcolor: 'black' }} />
              {index < eventsData.length - 1 && <TimelineConnector sx={{ bgcolor: 'black' }} />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                style={{ padding: 0 }}
              >
                <div
                  className="p-2 bg-white border rounded-lg shadow-lg text-left hover:scale-105 hover:shadow-2xl transition-all px-[2%] py-[2%] mb-1"
                  style={{
                    width: '60%',
                    height: 'auto',
                    margin: '0 auto',
                  }}
                >
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-base mb-4">{event.description}</p>
                  <p className="text-sm text-gray-600 mb-2">{event.hashtags}</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}