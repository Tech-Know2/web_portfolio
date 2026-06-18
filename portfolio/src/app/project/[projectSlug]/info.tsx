"use client";

import { urlFor } from "@/lib/image";
import { ProjectDetails } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface InfoComponentProps {
    project: ProjectDetails;
}

export default function InfoComponent({
    project,
}: InfoComponentProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-6xl mx-auto bg-white shadow-xl text-black mt-6"
        >
            <div className="max-w-6xl mx-auto px-8 pt-6">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-200"
                >
                    <FiArrowLeft className="h-4 w-4" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </div>
            <div className="px-8 py-8 md:px-12">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {project.title}
                </h1>

                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 pt-4">
                    Project Description
                </h2>

                <p className="mt-2 text-gray-600 text-base md:text-lg max-w-4xl leading-relaxed">
                    {project.description}
                </p>
            </div>

            {project.coverImage && (
                <div className="">
                    <div className="relative w-full h-[300px] md:h-[500px] bg-white flex items-center justify-center">
                        <Image
                            src={urlFor(project.coverImage).width(1800).url()}
                            alt={project.title}
                            fill
                            priority
                            className="object-contain"
                        />

                        <div className="text-gray-500 text-sm">
                            Cover image configured but image URL logic has not been implemented yet.
                        </div>
                    </div>
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-10 px-8 py-8 md:px-12 border-t border-gray-200">
                <div>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                        Project Information
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <div className="text-gray-500">Start Date</div>
                            <div>{project.startDate}</div>
                        </div>

                        <div>
                            <div className="text-gray-500">End Date</div>
                            <div>{project.endDate}</div>
                        </div>

                        {project.link && (
                            <div>
                                <div className="text-gray-500">Live Application</div>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="underline hover:text-gray-600"
                                >
                                    View Project
                                </Link>
                            </div>
                        )}

                        {project.githubUrl && (
                            <div>
                                <div className="text-gray-500">Source Code</div>

                                <Link
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="underline hover:text-gray-600"
                                >
                                    GitHub Repository
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                        Technologies
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((technology) => (
                            <span
                                key={technology}
                                className="border border-gray-300 px-3 py-1 text-sm"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}