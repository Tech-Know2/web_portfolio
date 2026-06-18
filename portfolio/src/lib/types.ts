import { PortableTextBlock } from "@portabletext/types";

type SanityImage = {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
};

export type TimelineEvent = {
    _id: string;
    title: string;
    description: string;
    date: string;
    hashtags?: string;
    badge: "Internship" | "Project" | "Personal";
};

export type AcademicAchievement = {
    _id: string;
    title: string;
    score: string;
    date: string;
    order: number;
    highlight: boolean;
};

export type LanguageSkill = {
    _id: string;
    name: string;
    proficiency: string;
    order: number;
};

export type GalleryItem = {
    type: "image" | "video";
    image?: SanityImage;
    videoUrl?: string;
    caption?: string;
};

export type SanityFileAsset = {
    url: string;
    originalFilename: string;
};

export type ProjectFile = {
    title: string;
    file: {
        asset?: SanityFileAsset;
    };
};

export type projectType = {
    _id: string;
    slug: {
        current: string;
    };
    title: string;
    description: string;
    link: string;
    githubUrl: string;
    technologies: string[];
    highlight: boolean;
    startDate: string;
    endDate: string;
}

export type ProjectDetails = projectType & {
    coverImage?: SanityImage;
    featuredMedia?: {
        type: 'image' | 'video';
        image?: SanityImage;
        videoUrl?: string;
    };
    body?: PortableTextBlock[];
    gallery?: GalleryItem[];
    challenges?: {
        title: string;
        description: string;
    }[];
    files?: ProjectFile[];
};

export type Education = {
    _id: string;
    degree: string;
    institution: string;
    gpa?: string;
    startYear?: string;
    endYear: string;
    highlight: boolean;
    order: number;
};

export type Interest = {
    _id: string;
    title: string;
    category: string;
    order: number;
    highlight: boolean;
};

export type PlatformTool = {
    _id: string;
    name: string;
    category: string;
    order: number;
    highlight: boolean;
};