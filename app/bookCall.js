import Container from "@/components/helpingCompo/container";
import React from "react";

const BookFreeCall = () => {
  return (
    <Container className="h-fit my-16 px-6">
      <div className="py-12 border-2 border-dashed dark:border-neutral-600 border-neutral-400 rounded-2xl flex justify-between items-center w-full flex-col">
        <p className="dark:opacity-50 opacity-70 text-xl mb-3 text-center">
          Hey, you scrolled this far, let's talk.
        </p>

        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex justify-center sm:justify-end">
          <div className="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_5px_rgba(255,255,255,0.1)] self-end text-black dark:text-white cursor-pointer transition-all group">

            <div className="flex items-center gap-2 group-hover:gap-8 transition-all duration-300 relative z-20">

              <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                <img
                  alt="Profile"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/_next/image?url=%2Fassets%2Flogo.png&w=48&q=75"
                />
              </div>

              <div className="flex items-center gap-0 absolute left-[24px] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <div className="w-5 h-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-[8px] ml-1 mr-2">
                  You
                </div>
              </div>

              <span className="whitespace-nowrap relative block text-sm font-bold ml-0 group-hover:ml-4 transition-all duration-300 dark:text-neutral-300 text-neutral-700">
                Book a Free Call
              </span>

            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default BookFreeCall;
