"use client";

import { client } from "@/sanity/lib/client";
import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { packageType } from "@/lib/types";

const Packages = () => {
    const [packages, setPackages] = useState<packageType[]>([]);

    useEffect(() => {
        const fetchPackages = async () => {
            const data = await client.fetch(`*[_type == "package"] | order(order asc, _createdAt asc) {_id,
          name,
          slug,
          description,
          category,
          repositoryUrl,
          packageUrl,
          installCommand,
          highlight,
          order
        }
      `);

            setPackages(data);
        };

        fetchPackages();
    }, []);

    return (<section className="pt-8 pb-16"> <div className="max-w-7xl mx-auto px-6">
        {/* Header */} <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center pb-4">
            Open Source Packages </h1>

        <p className="text-base sm:text-lg text-black text-center max-w-2xl mx-auto mb-12">
            Explore the open-source packages, libraries, and tools Ive built
            for developers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {packages.map((pkg) => (
                <div
                    key={pkg._id}
                    className={`bg-white p-4 sm:p-6 rounded-lg space-y-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${pkg.highlight ? "ring-2 ring-black/10" : ""}`}
                >
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold underline">
                            {pkg.name}
                        </h3>

                        <span className="text-xs font-medium uppercase tracking-wide text-gray-600">
                            {pkg.category}
                        </span>
                    </div>

                    <p className="text-base text-black">{pkg.description}</p>

                    {pkg.installCommand && (
                        <div className="bg-gray-100 rounded-md p-3 overflow-x-auto">
                            <code className="text-sm text-black whitespace-nowrap">
                                {pkg.installCommand}
                            </code>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 pt-4">
                        {pkg.repositoryUrl && (
                            <Link
                                href={pkg.repositoryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative flex w-fit items-center gap-2
                                    text-black
                                    after:absolute after:left-0 after:-bottom-1
                                    after:h-[2px] after:w-full after:bg-black
                                    after:origin-left after:scale-x-0
                                    after:transition-transform after:duration-300
                                    hover:after:scale-x-100
                                    "
                            >
                                <span>View Source</span>
                                <FiChevronRight />
                            </Link>
                        )}

                        {pkg.packageUrl && (
                            <Link
                                href={pkg.packageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    relative flex w-fit items-center gap-2
                                    text-black
                                    after:absolute after:left-0 after:-bottom-1
                                    after:h-[2px] after:w-full after:bg-black
                                    after:origin-left after:scale-x-0
                                    after:transition-transform after:duration-300
                                    hover:after:scale-x-100
                                    "
                            >
                                <span>Install Package</span>
                                <FiChevronRight />
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>

    );
};

export default Packages;
