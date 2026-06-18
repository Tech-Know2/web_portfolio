"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { GoDash } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { AcademicAchievement, Education, Interest, LanguageSkill, PlatformTool, projectType } from "../lib/types";

type Props = {
  languageSkills: LanguageSkill[];
  projects: projectType[];
  academicAchievements: AcademicAchievement[];
  education: Education[];
  interests: Interest[];
  platformTools: PlatformTool[];
};

export default function AboutMe({
  languageSkills,
  projects,
  academicAchievements,
  education,
  interests,
  platformTools
}: Props) {
  return (
    <section className="pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center">About Me</h1>

        {/* Main container for columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Language Skills */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <LanguageSkills skills={languageSkills} />
          </div>
          {/* Education Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <EducationSection education={education} />
          </div>
          {/* Passions and Interests Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <PassionsInterests interests={interests} />
          </div>
          {/* Platforms and Tools */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md">
            <PlatformsTools platformTools={platformTools} />
          </div>
          {/* Projects - this takes up the last two grid spots */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md col-span-1 sm:col-span-2 lg:col-span-2">
            <Projects projects={projects} />
          </div>
          {/* Test Scores Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md col-span-full">
            <TestScores achievements={academicAchievements} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Language Skills Section
type LanguageSkillsProps = {
  skills: LanguageSkill[];
};

const LanguageSkills = ({ skills }: LanguageSkillsProps) => {
  const proficient = skills.filter(
    (skill) => skill.proficiency === "proficient"
  );

  const familiar = skills.filter(
    (skill) => skill.proficiency === "familiar"
  );

  const learning = skills.filter(
    (skill) => skill.proficiency === "learning"
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black pb-2">
        Language Proficiency
      </h2>
      <>
        {/* Proficient */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide">
            Proficient
          </h3>

          <ul className="space-y-1 text-black">
            {proficient.map((skill) => (
              <li
                key={skill._id}
                className="flex items-center"
              >
                <GoDash className="mr-2" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Familiar */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide">
            Familiar
          </h3>

          <ul className="space-y-1 text-black">
            {familiar.map((skill) => (
              <li
                key={skill._id}
                className="flex items-center"
              >
                <GoDash className="mr-2" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 uppercase tracking-wide">
            Learning
          </h3>

          <ul className="space-y-1 text-black">
            {learning.map((skill) => (
              <li
                key={skill._id}
                className="flex items-center"
              >
                <GoDash className="mr-2" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    </motion.div>
  );
};

// Education Section
type EducationSectionProps = {
  education: Education[];
};

const EducationSection = ({
  education,
}: EducationSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="space-y-3"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black pb-2">
        Education
      </h2>

      {education.map((edu, index) => (
        <motion.div
          key={edu._id}
          className="flex items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-medium">
              {edu.degree}
            </h3>

            <p className="text-black">
              {edu.institution}
            </p>

            {edu.gpa && (
              <p className="text-black">
                {edu.gpa}
              </p>
            )}

            <p className="text-black">
              {edu.startYear
                ? `${edu.startYear} - ${edu.endYear}`
                : edu.endYear}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Passions and Interests Section
type PassionsInterestsProps = {
  interests: Interest[];
};

const PassionsInterests = ({
  interests,
}: PassionsInterestsProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black pb-2">
        Passions & Interests
      </h2>

      <ul className="space-y-2 text-black text-lg">
        {interests.map((interest) => (
          <li
            key={interest._id}
            className="flex items-center"
          >
            <GoDash className="mr-2 text-black" />
            {interest.title}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Platforms and Tools Section
type PlatformsToolsProps = {
  platformTools: PlatformTool[];
};

const PlatformsTools = ({
  platformTools,
}: PlatformsToolsProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black pb-2">
        Platforms & Tools
      </h2>

      <ul className="text-lg text-black space-y-2">
        {platformTools.map((tool) => (
          <li
            key={tool._id}
            className="flex items-center"
          >
            <GoDash className="mr-3 text-black" />
            {tool.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

type TestScoresProps = {
  achievements: AcademicAchievement[];
};

const TestScores = ({
  achievements,
}: TestScoresProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black pb-2">
        Test Scores & Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement._id}
            className="bg-white border border-black p-4 rounded-md shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg text-black">
                {achievement.title}
              </h3>

              <p className="text-sm text-gray-600">
                {achievement.date}
              </p>
            </div>

            <p className="font-bold text-xl text-right text-black">
              {achievement.score}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

type ProjectsProps = {
  projects: projectType[];
};

// Projects Section
const Projects = ({ projects }: ProjectsProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [expandedProject, setExpandedProject] =
    useState<string | null>(null);

  const toggleDescription = (id: string) => {
    setExpandedProject(
      expandedProject === id ? null : id
    );
  };

  const highlightedProjects = projects.filter(
    (project) => project.highlight
  );

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center border-b-2 border-black pb-2">
        Highlighted Projects
      </h2>

      <ul className="space-y-4">
        {highlightedProjects.map((project) => (
          <li
            key={project._id}
            className="text-lg text-black relative"
          >
            <div
              className="flex flex-row cursor-pointer"
              onClick={() =>
                toggleDescription(project._id)
              }
            >
              <div className="flex items-center">
                <FiChevronRight
                  className={`mr-3 text-black transform ${expandedProject === project._id
                    ? "rotate-90"
                    : "rotate-0"
                    } transition-transform duration-300`}
                />

                {project.title}
              </div>
            </div>

            {expandedProject === project._id && (
              <motion.p
                className="text-black mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  height: { duration: 0.3 },
                }}
              >
                {project.description}
              </motion.p>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};