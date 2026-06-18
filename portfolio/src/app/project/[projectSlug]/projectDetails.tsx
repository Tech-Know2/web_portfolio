import ProjectSection from "./projectSection";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

export default function ProjectDetailsComponent({
    body,
}: {
    body?: PortableTextBlock[];
}) {
    if (!body?.length) {
        return null;
    }

    return (
        <ProjectSection title="Project Details">
            <div className="prose prose-neutral max-w-none">
                <PortableText value={body} />
            </div>
        </ProjectSection>
    );
}