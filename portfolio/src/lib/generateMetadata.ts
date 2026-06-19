import { Metadata } from "next";
import { ProjectDetails } from "./types";
import { client } from "@/sanity/lib/client";
import { ProjectPageProps } from "@/app/project/[projectSlug]/page";
import { PROJECT_QUERY } from "./projectQuery";

export async function generateMetadata(
    { params }: ProjectPageProps
): Promise<Metadata> {
    const { projectSlug } = await params;

    const project = await client.fetch<ProjectDetails>(
        PROJECT_QUERY,
        { slug: projectSlug }
    );

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    const title = `${project.title} | My Portfolio`;
    const description =
        project.description ||
        `Learn more about ${project.title}.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://cooperharris.vercel.app/project/${projectSlug}`,
            siteName: "Cooper's Portfolio",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: `https://cooperharris.vercel.app/project/${projectSlug}`,
        },
        keywords: [
            ...(project.technologies || []),
            project.title,
            "software project",
            "portfolio",
            "cooper harris",
            "james harris"
        ],
    };
}