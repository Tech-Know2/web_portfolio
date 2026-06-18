"use client";

import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { TimelineEvent } from "@/lib/types";

type Props = {
  events?: TimelineEvent[];
};

export default function TimelineComponent({ events = [] }: Props) {
  const [selectedEvent, setSelectedEvent] = useState(0);

  if (!Array.isArray(events) || events.length === 0) {
    return (
      <div className="text-center py-10 text-black">
        No timeline events found.
      </div>
    );
  }

  const handlePrev = () => {
    setSelectedEvent((prev) =>
      prev > 0 ? prev - 1 : events.length - 1
    );
  };

  const handleNext = () => {
    setSelectedEvent((prev) =>
      prev < events.length - 1 ? prev + 1 : 0
    );
  };

  const active = events[selectedEvent];

  return (
    <div className="pb-8 max-w-7xl mx-auto px-6">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 pb-10">
          My Journey So Far
        </h1>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-8">
        <div>
          <Timeline position="right">
            {events.map((event, index) => (
              <TimelineItem key={event._id}>
                <TimelineOppositeContent
                  sx={{ fontSize: "0.9rem", color: "black" }}
                  align="right"
                >
                  {new Date(event.date).toLocaleDateString()}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot
                    variant={
                      selectedEvent === index
                        ? "filled"
                        : "outlined"
                    }
                    sx={{
                      borderColor: "black",
                      bgcolor:
                        selectedEvent === index
                          ? "black"
                          : "transparent",
                      cursor: "pointer",
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

        {/* Details */}
        <div className="w-[70%] flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="p-6 bg-white border rounded-lg shadow-lg w-full"
            >
              <div
                className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-lg mb-2"
                style={{
                  backgroundColor:
                    active.badge === "Internship"
                      ? "#edcd2b"
                      : active.badge === "Project"
                        ? "#4cc219"
                        : "#e36f10",
                }}
              >
                {active.badge}
              </div>

              <h3 className="font-bold text-2xl mb-2">
                {active.title}
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                {new Date(active.date).toLocaleDateString()}
              </p>

              <p className="mb-4">{active.description}</p>

              <p className="text-sm text-gray-600">
                {active.hashtags}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-6 items-center mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition"
            >
              <MdArrowBack size={26} />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition"
            >
              <MdArrowForward size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="p-6 bg-white border rounded-lg shadow-lg w-[90%]"
          >
            <div
              className="inline-block px-3 py-1 text-xs font-semibold uppercase rounded-lg mb-2"
              style={{
                backgroundColor:
                  active.badge === "Internship"
                    ? "#edcd2b"
                    : active.badge === "Project"
                      ? "#4cc219"
                      : "#e36f10",
              }}
            >
              {active.badge}
            </div>

            <h3 className="font-bold text-2xl mb-2">
              {active.title}
            </h3>

            <p className="text-sm text-gray-600 mb-2">
              {new Date(active.date).toLocaleDateString()}
            </p>

            <p className="mb-4">{active.description}</p>

            <p className="text-sm text-gray-600">
              {active.hashtags}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 mt-4">
          <button onClick={handlePrev}>
            <MdArrowBack />
          </button>
          <button onClick={handleNext}>
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}