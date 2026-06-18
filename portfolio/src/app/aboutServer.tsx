import { client } from "@/sanity/lib/client";
import AboutMe from "./aboutme";

export default async function AboutServer() {
    const [languageSkills, projects, academicAchievements, education, interests, platformTools] =
        await Promise.all([
            client.fetch(`
                *[_type == "languageSkill"] | order(order asc) {
                    _id,
                    name,
                    proficiency,
                    order
                }
            `),
            client.fetch(`
                *[_type == "project" && highlight == true]
                | order(_createdAt asc) {
                    _id,
                    title,
                    description,
                    link,
                    githubUrl,
                    technologies,
                    highlight,
                    startDate,
                    endDate
                }
            `),
            client.fetch(`
                *[_type == "academicAchievement" && highlight == true]
                | order(order asc) {
                    _id,
                    title,
                    score,
                    date,
                    order,
                    highlight
                }
            `),
            client.fetch(`
                *[_type == "education" && highlight == true]
                | order(order asc) {
                    _id,
                    degree,
                    institution,
                    gpa,
                    startYear,
                    endYear,
                    highlight,
                    order
                }
            `),
            client.fetch(`
            *[_type == "interest" && highlight == true]
                | order(order asc) {
                    _id,
                    title,
                    category,
                    order,
                    highlight
                }
            `),
            client.fetch(`
            *[_type == "platformTool" && highlight == true]
                | order(order asc) {
                    _id,
                    name,
                    category,
                    order,
                    highlight
                }
            `)
        ]);

    return (
        <AboutMe
            languageSkills={languageSkills}
            projects={projects}
            academicAchievements={academicAchievements}
            education={education}
            interests={interests}
            platformTools={platformTools}
        />
    );
}