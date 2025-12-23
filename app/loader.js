"use client"
import React, { useCallback, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
    // 1. CHANGE: Start with 'false' so the loader is visible by default
    const [done, setDone] = useState(false);
    const [isClient, setIsClient] = useState(false);
    
    // Use refs to track status without causing extra re-renders
    const isAnimationFinished = useRef(false);
    const isPageLoaded = useRef(false);

    // Gatekeeper function: Only finishes when BOTH conditions are met
    const tryFinishLoading = useCallback(() => {
        if (isAnimationFinished.current && isPageLoaded.current) {
            setTimeout(() => {
                setDone(true);
                document.body.style.overflow = "auto";
            }, 2000); // Your 2s delay
        }
    }, []);

    useEffect(() => {
        setIsClient(true);
        document.body.style.overflow = "hidden";

        // REAL SITE LOAD LOGIC
        const handleReadyStateChange = () => {
            if (document.readyState === "complete") {
                isPageLoaded.current = true;
                tryFinishLoading();
            }
        };

        // If the site is already loaded (common in fast production builds)
        if (document.readyState === "complete") {
            isPageLoaded.current = true;
            tryFinishLoading();
        } else {
            // Listen for the document to be fully ready
            window.addEventListener("load", handleReadyStateChange);
            document.addEventListener("readystatechange", handleReadyStateChange);
            
            return () => {
                window.removeEventListener("load", handleReadyStateChange);
                document.removeEventListener("readystatechange", handleReadyStateChange);
            };
        }
    }, [tryFinishLoading]);

    // ANIMATION COMPLETION LOGIC
    const handleAnimationComplete = useCallback(() => {
        isAnimationFinished.current = true;
        tryFinishLoading();
    }, [tryFinishLoading]);

    if (!isClient) return null;

    return (
        <AnimatePresence mode="wait">
            {!done && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-neutral-900 overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.96,
                        filter: "blur(6px)",
                        transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                >
                    {/* --- BACKGROUND SHIMMER --- */}
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
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* --- MAIN CONTAINER --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0, 4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.svg
                                width="200" height="70" viewBox="0 0 10 5"
                                className="relative"
                            >
                                <defs>
                                    <linearGradient id="elegantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--gradient-stop-1, #444)" />
                                        <stop offset="50%" stopColor="var(--gradient-stop-2, #888)" />
                                        <stop offset="100%" stopColor="var(--gradient-stop-1, #444)" />
                                    </linearGradient>
                                </defs>

                                <motion.path
                                    d="M1 0h1v1H1z M0 1h1v4H0z M2 3h1v2H2z M1 2h1v1H1z M2 1h1v1H2z M2 2h1v1H2z M5 0h2v1H5z M4 1h1v3H4z M5 4h2v1H5z"
                                    fill="url(#elegantGradient)"
                                    stroke="url(#elegantGradient)"
                                    strokeWidth="0.12"
                                    initial={{ pathLength: 0, fillOpacity: 0 }}
                                    animate={{ pathLength: 1, fillOpacity: 1 }}
                                    transition={{
                                        pathLength: { duration: 3.5, ease: "easeOut" },
                                        fillOpacity: { duration: 1.5, ease: "easeOut", delay: 1.8 },
                                    }}
                                    // THIS TRIGGERS THE LOGIC
                                    onAnimationComplete={handleAnimationComplete}
                                />
                            </motion.svg>
                        </motion.div>

                        <div className="mt-4 text-[10px] uppercase tracking-[0.2em] opacity-40 dark:text-white">
                            Initialising Production Build
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;