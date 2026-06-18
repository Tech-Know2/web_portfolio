import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { BsFillBookmarksFill } from "react-icons/bs";

export default async function Navbar() {
  const resume = await client.fetch(`
      *[_type == "resume"][0]{
        "url": resume.asset->url,
        label
      }
    `);

  return (
    <div className="pb-[1%] pt-[2%]">
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between h-16 relative">

            {/* Empty div to keep center alignment */}
            <div className="flex-1"></div>

            {/* Desktop Links (centered) */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-3">
              <Link
                href="/"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Home
              </Link>
              <Link
                href="/#about-me"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                About Me
              </Link>
              <Link
                href="/#timeline"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Timeline
              </Link>
              <Link
                href="/#projects"
                className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium"
              >
                Projects
              </Link>
            </div>

            {/* Right side: Resume + Blog */}
            <div className="flex items-center gap-3">
              {resume?.url && (
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black hover:bg-neutral-800 py-2 px-4 text-md font-medium rounded"
                >
                  {resume.label || "Download Resume"}
                </a>
              )}

              {/* Blog Icon */}
              <Link href="/blog" title="Blog">
                <BsFillBookmarksFill size={23} className="text-black" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};