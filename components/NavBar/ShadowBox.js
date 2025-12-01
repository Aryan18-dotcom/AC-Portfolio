"use client";
import { motion } from "framer-motion";
import { SunMedium, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ShadowBox = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  const handleThemeChange = async () => {
    if (isClicking) return; // Prevent double clicks
    setIsClicking(true);

    // onThemeChangeStart(true)

    // Play audio safely
    const audio = new Audio("/SoundEffects/mouse-click.mp3");
    audio.volume = 0.6;

    // Play + wait for audio to finish (non-blocking)
    audio.play().catch(() => {});
    audio.onended = () => setIsClicking(false);

    // Change theme
    setTheme(isDark ? "light" : "dark");

    // Safety fail fallback: re-enable button after 500ms
    setTimeout(() => setIsClicking(false), 500);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/20" />
    );
  }

  return (
    <>
    <motion.button
      initial={{
        boxShadow: isDark
          ? "inset -2px 2px 3px 2px var(--color-neutral-700)"
          : "inset -2px 2px 3px 2px var(--color-neutral-300)",
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: isDark
          ? "inset 2px -2px 3px 2px var(--color-neutral-700)"
          : "inset 2px -2px 3px 2px var(--color-neutral-300)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      onClick={handleThemeChange}
      disabled={isClicking}
      className={`flex items-center justify-center h-8 w-8 md:size-10 rounded-lg md:rounded-xl border border-white/10
        cursor-pointer transition-opacity
        ${isClicking ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
    >
      {isDark ? <Moon size={20} /> : <SunMedium size={20} />}
    </motion.button>
    </>
  );
};

export default ShadowBox;
