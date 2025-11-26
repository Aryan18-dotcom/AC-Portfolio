"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
    const [done, setDone] = useState(false);

    // Disable scroll + auto-hide after 2.4s
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => { 
            setDone(true) 
            document.body.style.overflow = "auto"; 
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="loader"
                    className="
            fixed inset-0 z-50 flex items-center justify-center 
            bg-white dark:bg-neutral-900 
            overflow-hidden
          "
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.96,
                        filter: "blur(6px)",
                        transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                >
                    {/* --- BACKGROUND SHIMMER GRADIENT --- */}
                    <motion.div
                        className="absolute inset-0 opacity-70 dark:opacity-30"
                        animate={{
                            background: [
                                "radial-gradient(circle at 30% 30%, #d1d1d1, transparent 60%)",
                                "radial-gradient(circle at 70% 50%, #b5b5b5, transparent 60%)",
                                "radial-gradient(circle at 50% 80%, #c9c9c9, transparent 60%)",
                                "radial-gradient(circle at 30% 30%, #d1d1d1, transparent 60%)",
                            ],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* --- AMBIENT FLOATING PARTICLES --- */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="
                absolute w-2 h-2 rounded-full 
                bg-neutral-400/30 dark:bg-neutral-600/30
              "
                            style={{
                                left: `${20 + i * 12}%`,
                                top: `${20 + (i % 3) * 20}%`,
                            }}
                            animate={{
                                y: [0, -12, 0],
                                x: [0, 6, -4, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 2 + i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* --- MAIN LOADER CONTAINER --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.7, ease: "easeOut" },
                        }}
                        className="flex flex-col items-center justify-center"
                    >
                        {/* --- GLOW BEHIND SVG --- */}
                        <motion.div
                            className="
                absolute w-44 h-44 rounded-full blur-[40px]
                bg-neutral-400/30 dark:bg-neutral-600/30
              "
                            animate={{
                                scale: [1, 1.25, 1],
                                opacity: [0.3, 0.55, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* --- FLOATING SVG --- */}
                        <motion.div
                            animate={{ y: [0, -5, 0, 4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.svg
                                width="200"
                                height="70"
                                viewBox="0 0 10 5"
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
                            >
                                <defs>
                                    <linearGradient id="elegantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--gradient-stop-1)" stopOpacity="1" />
                                        <stop offset="50%" stopColor="var(--gradient-stop-2)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="var(--gradient-stop-1)" stopOpacity="1" />
                                    </linearGradient>
                                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.1" result="blur" />
                                        <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                                        <feMerge>
                                            <feMergeNode in="offsetBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                <motion.path
                                    d="M1 0h1v1H1z M0 1h1v4H0z M2 3h1v2H2z M1 2h1v1H1z M2 1h1v1H2z M2 2h1v1H2z M5 0h2v1H5z M4 1h1v3H4z M5 4h2v1H5z"
                                    fill="url(#elegantGradient)"
                                    stroke="url(#elegantGradient)"
                                    strokeWidth="0.12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{
                                        pathLength: 0,
                                        fillOpacity: 0,
                                        filter: "url(#softGlow)",
                                    }}
                                    animate={{
                                        pathLength: 1,
                                        fillOpacity: 1,
                                    }}
                                    transition={{
                                        pathLength: { duration: 3.5, ease: "easeOut" },
                                        fillOpacity: { duration: 1.5, ease: "easeOut", delay: 1.8 },
                                        filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />
                                <motion.rect
                                    x="8"
                                    y="4"
                                    width="1"
                                    height="1"
                                    fill="url(#elegantGradient)"
                                    filter="url(#softGlow)"
                                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                                    animate={{
                                        scale: [0, 1.2, 1],
                                        opacity: 1,
                                        rotate: 360,
                                    }}
                                    transition={{
                                        scale: { duration: 0.5, ease: "easeOut", delay: 2.5 },
                                        opacity: { duration: 0.1, delay: 2.5 },
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        repeatDelay: 2,
                                    }}
                                />
                            </motion.svg>
                        </motion.div>

                        {/* --- LOADER GLOW BAR --- */}
                        <motion.div
                            className="
                h-1 w-32 rounded-full mt-5 
                bg-neutral-500/25 dark:bg-neutral-700/25
                blur-[3px]
              "
                            animate={{
                                scaleX: [1, 1.25, 1],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
