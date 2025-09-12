import Link from "next/link";
import { BsFillBookmarksFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="pb-[1%] pt-[2%]">
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-16">
            
            {/* Mobile: Blog left */}
            <div className="sm:hidden flex items-center">
              <Link href="/blog" title="Blog">
                <BsFillBookmarksFill size={23} className="text-black ml-[10px]" />
              </Link>
            </div>

            {/* Desktop Links (centered) */}
            <div className="hidden sm:flex sm:ml-6 flex-grow justify-center items-center gap-3">
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

            {/* Resume Button + Blog (Desktop), Resume Button (Mobile Right) */}
            <div className="flex items-center gap-3">
              <a
                href="/College Resume.pdf"
                download
                className="text-white bg-black hover:bg-neutral-800 py-2 px-4 text-md font-medium no-underline rounded"
              >
                Download Resume
              </a>
              
              {/* Desktop Blog Icon */}
              <div className="hidden sm:flex">
                <Link href="/blog" title="Blog">
                  <BsFillBookmarksFill size={23} className="text-black" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
