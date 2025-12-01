'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ShadowBox from '@/components/NavBar/ShadowBox'
import { Menu, X } from 'lucide-react'   // Icons

const Links = [
    { href: "/works", title: "Work" },
    { href: "/projects", title: "Projects" },
    { href: "/blogs", title: "Blog" },
]

const SCROLL_THRESHOLD_REM = 4;

const NavBar = () => {
    const [hovered, sethovered] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu state

    useEffect(() => {
        const SCROLL_THRESHOLD_PX = SCROLL_THRESHOLD_REM * 16; 

        const handleScroll = () => {
            const isScrolledPastThreshold = window.scrollY > SCROLL_THRESHOLD_PX;
            if (isScrolledPastThreshold !== scrolled) {
                setScrolled(isScrolledPastThreshold);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const baseClasses =
        "mx-auto px-4 sticky top-3 left-0 z-20 rounded-full py-4 backdrop-blur-xl flex items-center justify-between transition-all duration-300 ease-in-out";
    const widthClass =
        scrolled ? "w-[90%] dark:bg-black/50 bg-neutral-white/10" : "w-full";

    return (
        <>
            <div className={`${baseClasses} ${widthClass}`}>
                <div className="flex items-center justify-between md:justify-center md:w-fit w-full mr-2 gap-4">
                    <Link href="/">
                        <Image
                            src="/prof-pic.jpg"
                            alt="Aryan's profile picture"
                            height={120}
                            width={120}
                            className="size-9 md:size-10 rounded-full border border-neutral-800 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-neutral-700 dark:border-neutral-600"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-end justify-between">
                        {Links.map((link, indx) => (
                            <Link
                                onMouseEnter={() => sethovered(indx)}
                                onMouseLeave={() => sethovered(null)}
                                key={indx}
                                href={link.href}
                                className="text-[15px] relative font-medium py-px px-2 -ml-2 hover:text-neutral-200 dark:hover:text-neutral-700 transition-colors duration-150"
                            >
                                {hovered === indx && (
                                    <motion.div
                                        layoutId="nav-hover-id"
                                        className="absolute inset-0 rounded-2xl bg-neutral-700 dark:bg-neutral-300 size-full shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-500)] dark:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-400)] border-1.5 border-neutral-700 dark:border-neutral-300"
                                    ></motion.div>
                                )}
                                <span className="relative">{link.title}</span>
                            </Link>
                        ))}
                    </div>

                    {/* HAMBURGER FOR MOBILE */}
                    <button
                        className="md:hidden p-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition shadow-[inset_-2px_2px_3px_2px_var(--color-neutral-300)] dark:shadow-[inset_-2px_2px_3px_2px_var(--color-neutral-700)]"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={19} /> : <Menu size={19} />}
                    </button>
                </div>

                <ShadowBox />
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-20 left-0 w-full bg-neutral-100 dark:bg-neutral-900 py-6 shadow-xl z-40 rounded-xl"
                    >
                        <div className="flex flex-col items-center gap-6">
                            {Links.map((link, indx) => (
                                <Link
                                    key={indx}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium hover:text-neutral-500 dark:hover:text-neutral-300 transition"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default NavBar
