import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import { ProjectDetails } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import InfoComponent from "./info";
import ProjectDetailsComponent from "./projectDetails";
import ProjectChallengesComponent from "./projectChallengesComponent";
import ProjectGalleryComponent from "./projectGalleryComponent";
import ProjectFilesComponent from "./projectFilesComponent";

const PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    link,
    githubUrl,
    technologies,
    highlight,
    startDate,
    endDate,
    slug,
    body,
    challenges,
    files[]{
      title,
      file{
        asset->{
          url,
          originalFilename
        }
      }
    },
    gallery,
    coverImage,
    featuredMedia
  }
`;

interface PageProps {
  params: Promise<{
    projectSlug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectSlug } = await params;

  const project = await client.fetch<ProjectDetails>(
    PROJECT_QUERY,
    {
      slug: projectSlug,
    }
  );

  if (!project) {
    return (
      <main>
        <Navbar />
        <div>
          Sorry, the project you&apos;re looking for isn&apos;t available right now.
        </div>
        <Footer />
      </main>

    );
  }

  return (
    <main>
      <Navbar />

      <InfoComponent project={project} />

      <div className="h-8" />

      <ProjectDetailsComponent body={project.body} />

      <div className="h-8" />

      <ProjectChallengesComponent challenges={project.challenges} />

      <div className="h-8" />

      <ProjectGalleryComponent gallery={project.gallery} />

      <div className="h-8" />

      <ProjectFilesComponent files={project.files} />

      <Footer />
    </main>
  );
}