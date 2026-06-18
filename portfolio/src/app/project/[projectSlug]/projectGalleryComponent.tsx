import ProjectSection from "./projectSection";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { GalleryItem } from "@/lib/types";

interface ProjectGalleryComponentProps {
    gallery?: GalleryItem[];
}

export default function ProjectGalleryComponent({
    gallery,
}: ProjectGalleryComponentProps) {
    if (!gallery?.length) {
        return null;
    }

    return (
        <ProjectSection title="Gallery">
            <div className="grid md:grid-cols-2 gap-8">
                {gallery.map((item, index) => (
                    <div
                        key={index}
                        className=""
                    >
                        {item.type === "image" && (
                            <div className="aspect-video bg-white flex items-center justify-center">
                                {item.type === "image" && item.image && (
                                    <div className="relative w-full aspect-video">
                                        <Image
                                            src={urlFor(item.image).width(1200).url()}
                                            alt={item.caption ?? "Project image"}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {item.type === "video" && item.videoUrl && (
                            <Link
                                href={item.videoUrl}
                                target="_blank"
                                className="underline hover:text-gray-600"
                            >
                                Watch Video
                            </Link>
                        )}

                        {item.caption && (
                            <div className="p-4 text-sm text-gray-600">
                                {item.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </ProjectSection>
    );
}