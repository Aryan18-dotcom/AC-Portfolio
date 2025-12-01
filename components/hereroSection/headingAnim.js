"use client"

import React from 'react'
import { motion } from 'motion/react'

const HeadingAnimation = () => {
    const headingParts = [
        "Hi,",
        "I'm",
        "Aryan —",
        "A",
        "Full",
        "Stack",
        "web developer",
        "."
    ]

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.09,
                ease: "easeInOut"
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(6px)",
            scale: 0.98
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <motion.div
            className="flex flex-col gap-2 overflow-hidden"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h1 className="">

                {/* Animate each word */}
                {headingParts.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={item}
                        className={`inline-block ${index >= 3 ? "text-secondary" : ""
                            } text-2xl md:text-[35px] font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-900 via-neutral-700/90 to-neutral-100 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-500`}
                    >
                        {word}&nbsp;
                    </motion.span>

                ))}

            </h1>

        </motion.div>
    )
}

export default HeadingAnimation
