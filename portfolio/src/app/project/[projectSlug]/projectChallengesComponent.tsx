import ProjectSection from "./projectSection";

interface Challenge {
    title: string;
    description: string;
}

interface ProjectChallengesComponentProps {
    challenges?: Challenge[];
}

export default function ProjectChallengesComponent({
    challenges,
}: ProjectChallengesComponentProps) {
    if (!challenges?.length) {
        return null;
    }

    return (
        <ProjectSection title="Technical Challenges">
            <div className="space-y-8">
                {challenges.map((challenge, index) => (
                    <div
                        key={index}
                        className="border-l-2 border-gray-300 pl-5"
                    >
                        <h3 className="font-semibold text-lg">
                            {challenge.title}
                        </h3>

                        <p className="mt-2 text-gray-700 leading-relaxed">
                            {challenge.description}
                        </p>
                    </div>
                ))}
            </div>
        </ProjectSection>
    );
}