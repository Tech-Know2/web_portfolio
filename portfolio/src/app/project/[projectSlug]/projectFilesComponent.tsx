import ProjectSection from "./projectSection";

interface SanityFileAsset {
  url: string;
  originalFilename: string;
}

interface ProjectFile {
  title: string;
  file: {
    asset?: SanityFileAsset;
  };
}

interface ProjectFilesComponentProps {
    files?: ProjectFile[];
}

export default function ProjectFilesComponent({
    files,
}: ProjectFilesComponentProps) {
    if (!files?.length) {
        return null;
    }

    return (
        <ProjectSection title="Downloads">
            <ul className="divide-y divide-gray-200">
                {files.map((file, index) => (
                    <li
                        key={index}
                        className="py-4 flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium">
                                {file.title}
                            </p>

                            <p className="text-sm text-gray-500">
                                {file.file?.asset?.originalFilename}
                            </p>
                        </div>

                        {file.file?.asset?.url && (
                            <a
                                href={file.file.asset.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-gray-600"
                            >
                                Download
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </ProjectSection>
    );
}