"use client";
import React, { useState } from "react";
import Image from "next/image";

import SocialLinks from "./SocialLinks";
import TechItem from "./TechItem";
import { GithubIcon, Globe, LinkedinIcon } from "lucide-react";

const ExperienceItem = ({
  companyImg,
  companyName,
  role,
  start,
  end,
  location,
  children,
  tech,
  defaultOpen = false,
}) => {

  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="
      flex flex-col gap-4 w-full 
      border-b border-neutral-300/90 dark:border-white/5 
      shadow-[0_1px_0_0_rgba(255,255,255,0.03)] 
      pb-4
    ">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">

        <div className="flex items-center gap-4">
          <Image
            alt={companyName}
            width={100}
            height={100}
            src={companyImg}
            className="size-12 rounded-md"
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-2">

              <h3 className="text-lg font-bold text-neutral-600 dark:text-neutral-300">{companyName}</h3>

              {/* Social Icons */}
              <div className="flex items-center gap-1 ml-2">
                <SocialLinks title="Website" href="/" icon={<Globe size={16} />} />
                <SocialLinks title="LinkedIn" href="/" icon={<LinkedinIcon size={16} />} />
                <SocialLinks title="GitHub" href="/" icon={<GithubIcon size={16} />} />
              </div>

              {/* Toggle Button */}
              {!defaultOpen && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="
                    text-neutral-700 dark:text-gray-300 bg-neutral-300 dark:bg-neutral-200/20 hover:text-white 
                    transition-colors p-1 rounded-md 
                    hover:bg-neutral-700 dark:hover:bg-neutral-800
                  "
                >
                  <svg
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </button>
              )}
            </div>

            <p className="text-xs text-neutral-500/70 dark:text-neutral-400/50">{role}</p>
          </div>
        </div>

        <div className="text-secondary text-neutral-500/90 dark:text-neutral-300/40 flex flex-col md:text-right text-sm tracking-tight">
          <p>{start} - {end}</p>
          <p>{location}</p>
        </div>
      </div>

      {/* Dropdown Body */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${isOpen ? "max-h-[2000px]" : "max-h-0 opacity-60"}
        `}
      >
        <div className="pt-2">

          <h4 className="text-md mt-4 mb-2 font-semibold text-neutral-600 dark:text-neutral-300">
            Technologies & Tools
          </h4>

          <div className="flex flex-wrap gap-2">
            {tech?.map((item, i) => <TechItem key={i} {...item} />)}
          </div>

          <div className="flex flex-col mt-4 gap-2">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
