"use client";
import Tooltip from "@/components/tooltip";

const SocialLinks = ({ title, icon, href }) => (
  <Tooltip text={title} src={href}>
    <div
      className="
        p-1 size-7 rounded-md 
        flex items-center justify-center
        text-neutral-500 dark:text-neutral-600 hover:text-white 
        hover:bg-neutral-700 dark:hover:bg-neutral-200/20
        transition-all cursor-pointer -ml-2
      "
    >
      {icon}
    </div>
  </Tooltip>
);

export default SocialLinks;
