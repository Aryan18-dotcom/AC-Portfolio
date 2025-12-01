"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoveRight, Link as LinkIcon, Github, Globe } from "lucide-react";

const CustomLink = ({ href, children, className }) => <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;

export default function ProjectCard({ data, index }) {
  const { theme } = useTheme();   // ⭐ detect theme change

  const spanClass =
    index % 4 === 0 ? "col-span-6" :
      index % 4 === 1 ? "col-span-3" :
        index % 4 === 2 ? "col-span-3" :
          "col-span-6";

    const isLive = data.live && data.live !== "#";
  const isGithub = data.github && data.github !== "#";
  const isSocial = data.social && data.social !== "#";

  return (
    <motion.div
      key={theme}   // ⭐ forces re-render on theme change
      initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.1 > 0.3 ? 0.2 : index * 0.1 }}
      className={`md:${spanClass}`}
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
          boxShadow: "0px 12px 26px rgba(0,0,0,0.25)"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="
          group h-full flex flex-col justify-between
          dark:bg-neutral-900/90 bg-neutral-100/90 
          backdrop-blur rounded-md p-2

          shadow-[inset_0px_1px_12px_3px_var(--color-neutral-200)]
          dark:shadow-[inset_1px_1px_5px_1px_var(--color-neutral-800)]
          
          border border-neutral-300 dark:border-neutral-800
          relative overflow-hidden cursor-pointer
        "
      >

        {/* Corners */}
        <div className="
          absolute inset-0 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none

          shadow-[inset_1px_1px_5px_1px_var(--color-neutral-200)]
          dark:shadow-[inset_0px_1px_12px_3px_var(--color-neutral-800)]
          
          border border-neutral-300 dark:border-neutral-800
        ">
          <CornerIcon className="text-neutral-500 dark:text-neutral-400 absolute top-0 -left-1 rotate-90" />
          <CornerIcon className="text-neutral-500 dark:text-neutral-400 absolute -top-1 right-0 rotate-180" />
          <CornerIcon className="text-neutral-500 dark:text-neutral-400 absolute bottom-0 -right-1 -rotate-90" />
          <CornerIcon className="text-neutral-500 dark:text-neutral-400 absolute -bottom-1 left-0 rotate-0" />
        </div>

        <img
          src={data.image}
          className="w-full h-[12rem] mb-4 object-cover rounded-xl opacity-90"
        />

          <div className="flex flex-col p-2">
          <h2 className="text-lg font-semibold tracking-wide text-neutral-700 dark:text-neutral-300">
            {data.title}
          </h2>

          <p className="text-sm text-neutral-600 dark:text-neutral-500 mt-1 leading-relaxed">
            {data.desc}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap p-2">
          {data.tech.map((t, i) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1 rounded-full 
                bg-neutral-200 dark:bg-neutral-800
                border border-neutral-400 dark:border-neutral-700
                shadow-[inset_0px_-1px_4px_0px_var(--color-neutral-400)]
                dark:shadow-[inset_0px_-1px_4px_0px_var(--color-neutral-700)]
              "
            >
              {t}
            </span>
          ))}
        </div>

        {(isLive || isGithub || isSocial) && (
          <div className="flex gap-4 text-sm mt-4 font-medium text-blue-500 dark:text-blue-400 p-2">
            {isLive && (
              <CustomLink href={data.live} className="hover:underline inline-flex items-center gap-1">
                <Globe className='size-4' /> Live
              </CustomLink>
            )}
            {isGithub && (
              <CustomLink href={data.github} className="hover:underline inline-flex items-center gap-1">
                <Github className='size-4' /> GitHub
              </CustomLink>
            )}
            {isSocial && (
              <CustomLink href={data.social} className="hover:underline inline-flex items-center gap-1">
                <LinkIcon className='size-4' /> Social
              </CustomLink>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function CornerIcon({ className }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    >
      <path d="M3 3 v12" />
      <path d="M3 15 h12" />
    </svg>
  );
}
