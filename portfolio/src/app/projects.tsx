"use client";

import { client } from "@/sanity/lib/client";
import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { projectType } from "@/lib/types";

const Projects = () => {
  const [projects, setProjects] = useState<projectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch(`
      *[_type == "project"] | order(_createdAt asc) {
        _id,
        slug,
        title,
        description,
        link,
        githubUrl,
        technologies,
        highlight,
        startDate,
        endDate
      }
    `);

      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center pb-10">Personal Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold underline">{project.title}</h3>
              <p className="text-sm text-black">
                {project.startDate} - {project.endDate}
              </p>
              <p className="text-base text-black">{project.description}</p>
              <div className="flex flex-col gap-3 pt-4">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative flex w-fit items-center gap-2
                      text-black
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-full after:bg-black
                      after:origin-left after:scale-x-0
                      after:transition-transform after:duration-300
                      hover:after:scale-x-100
                    "
                  >
                    <span>Check it out</span>
                    <FiChevronRight />
                  </Link>
                )}

                {project.slug && (
                  <Link
                    href={`/project/${project.slug.current}`}
                    className="
                      relative flex w-fit items-center gap-2
                      text-black
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-full after:bg-black
                      after:origin-left after:scale-x-0
                      after:transition-transform after:duration-300
                      hover:after:scale-x-100
                    "
                  >
                    <span>Read More</span>
                    <FiChevronRight />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;