"use client"
import React from 'react'
import { motion } from 'motion/react'
import { NotebookText, Send } from 'lucide-react'
import Link from 'next/link'

const CTAs = () => {
    return (
        <div>
            <div className='mt-8 flex gap-4'>
                <Link className="hover:cursor-pointer" href="/resume">
                    <motion.div 
                        whileHover={{ scale: 1.02, y: -3, transition:{ duration:0.2, ease:"easeInOut" } }}
                        data-slot="button" 
                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-50 hover:shadow-[inset_2px_-2px_6px_2px_var(--color-neutral-300)] border-2 border-neutral-300/50 h-9 px-4 py-2 has-[&>svg]:px-3 inset-shadow-indigo-500"
                    >
                        <NotebookText size="22" />
                        Resume / CV
                    </motion.div>
                </Link>
                <Link className="hover:cursor-pointer" href="/contact">
                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-neutral-900 dark:bg-neutral-200 text-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-300 h-9 px-4 py-2 has-[&>svg]:px-3 inset-shadow-indigo-500"
                    >
                        <motion.div
                            variants={{
                                initial: {
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                    scale: 1,
                                },
                                hover: {
                                    x: 2,
                                    y: -3,
                                    rotate: 9,
                                    scale: 1.05,
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                        >
                            <Send size="20" />
                        </motion.div>

                        Get in touch
                    </motion.div>
                </Link>
            </div>
        </div>
    )
}

export default CTAs