interface ProjectSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function ProjectSection({
    title,
    children,
}: ProjectSectionProps) {
    return (
        <section className="w-full max-w-6xl mx-auto bg-white shadow-xl text-black">
            <div className="px-8 py-8 md:px-12">
                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                    {title}
                </h2>

                {children}
            </div>
        </section>
    );
}