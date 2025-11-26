import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const TechItem = ({ name, icon, srcLight, srcDark, src, href = "/" }) => {
  const { theme } = useTheme();

  const imageSrc = srcDark && srcLight
    ? theme === "dark"
      ? srcDark
      : srcLight
    : src;

  return (
    <Link
      href={href}
      target="_blank"
      className="
        inline-flex items-center text-sm 
        bg-black/5 dark:bg-white/10 
        border border-dashed border-neutral-700/30 
        py-1 px-2 rounded-md 
        text-neutral-700 dark:text-neutral-300/70
        skill-inner-shadow
      "
    >
      <div className="size-4 shrink-0 flex items-center justify-center">
        {typeof imageSrc === "string" ? (
          <Image
            src={imageSrc}
            width={20}
            height={20}
            alt={name}
            className="size-4 object-contain"
          />
        ) : (
          imageSrc
        )}
      </div>

      <p className="ml-1 text-sm font-bold">{name}</p>
    </Link>
  );
};

export default TechItem;
