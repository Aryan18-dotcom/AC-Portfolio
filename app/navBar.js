'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ShadowBox from '@/components/NavBar/ShadowBox'
import { Menu, X } from 'lucide-react'

const Links = [
    { href: "/works", title: "Work" },
    { href: "/projects", title: "Projects" },
    { href: "/blogs", title: "Blog" },
]

const MobileLinks = [
    { href: "/", title: "Home" },
    { href: "/works", title: "Work" },
    { href: "/projects", title: "Projects" },
    { href: "/blogs", title: "Blog" },
]

const SCROLL_THRESHOLD_REM = 4

/* ---------------- ANIMATIONS ---------------- */

const menuVariants = {
    closed: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.45,
            ease: [0.4, 0, 1, 1],
        },
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            staggerChildren: 0.06,
        },
    },
}

const itemVariants = {
    closed: {
        opacity: 0,
        y: 14,
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 320,
            damping: 22,
        },
    },
}

const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
}

/* ---------------- COMPONENT ---------------- */

const NavBar = () => {
    const [hovered, sethovered] = useState(null)
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    /* Scroll shrink */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD_REM * 16)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    /* Lock body scroll when menu open */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    }, [mobileOpen])

    const baseClasses =
        "mx-auto px-4 sticky top-3 left-0 z-20 rounded-full py-4 backdrop-blur-xl flex items-center justify-between transition-all duration-300 ease-in-out"
    const widthClass =
        scrolled ? "w-[90%] dark:bg-black/50 bg-neutral-white/10" : "w-full"

    return (
        <>
            {/* ---------------- NAV BAR ---------------- */}
            <div className={`${baseClasses} ${widthClass}`}>
                <div className="flex items-center justify-between md:justify-center md:w-fit w-full mr-2 gap-4">
                    <Link href="/">
                        <Image
                            src="/prof-pic.jpg"
                            alt="Profile"
                            height={120}
                            width={120}
                            className="size-9 rounded-full border border-neutral-800 transition-transform hover:scale-95"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-end justify-between">
                        {Links.map((link, indx) => (
                            <Link
                                onMouseEnter={() => sethovered(indx)}
                                onMouseLeave={() => sethovered(null)}
                                key={indx}
                                href={link.href}
                                className="text-[15px] relative font-medium py-px px-2 -ml-2 hover:text-neutral-200 dark:hover:text-neutral-700 transition-colors delay-100 duration-150"
                            >
                                {hovered === indx && (
                                    <motion.div
                                        layoutId="nav-hover-id"
                                        className="absolute inset-0 rounded-2xl bg-neutral-700 dark:bg-neutral-300 size-full shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-500)] dark:shadow-[inset_-2px_-2px_4px_1px_var(--color-neutral-400)] border-1.5 border-neutral-700 dark:border-neutral-300"
                                    ></motion.div>
                                )}
                                <span className="relative px-px">{link.title}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* MOBILE BUTTON */}
                    {!mobileOpen && (
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden p-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition shadow-[inset_-2px_2px_3px_2px_var(--color-neutral-300)] dark:shadow-[inset_-2px_2px_3px_2px_var(--color-neutral-700)] cursor-pointer"
                        >
                            <Menu size={20} />
                        </motion.button>
                    )}
                </div>

                <ShadowBox />
            </div>

            {/* ---------------- BACKDROP ---------------- */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[90] bg-black/25 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* ---------------- MOBILE MENU ---------------- */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-[100] bg-white dark:bg-neutral-950 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-8">
                            <span className="text-[10px] uppercase tracking-[0.25em] opacity-40 font-semibold">
                                Navigation
                            </span>

                            <motion.button
                                whileTap={{ scale: 0.9, rotate: 90 }}
                                onClick={() => setMobileOpen(false)}
                                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900"
                            >
                                <X size={22} />
                            </motion.button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-6">
                            {MobileLinks.map((link, indx) => (
                                <motion.div
                                    key={indx}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHovered(indx)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="relative"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
                                    >
                                        {link.title}
                                    </Link>

                                    {/* Underline microinteraction */}
                                    <motion.div
                                        variants={underlineVariants}
                                        initial="hidden"
                                        animate={hovered === indx ? "visible" : "hidden"}
                                        className="origin-left h-[2px] w-full bg-neutral-900 dark:bg-neutral-100 mt-1"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="pb-8 flex justify-center">
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-[10px] uppercase tracking-widest text-neutral-400"
                            >
                                © 2025 Aryan Chheda
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default NavBar
