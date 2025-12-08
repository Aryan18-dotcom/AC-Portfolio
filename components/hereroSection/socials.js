'use client'
import { ArrowUpRight, icons } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import SectionHeading from '../sectionHeading/page'
import { localIcons } from '@/utils/data/social-icons'

const Socials = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            }
        },
        hover: {
            y: -4,
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    }

    const arrowVariants = {
        initial: { scale:0, y: 0, rotate: 0 },
        hover: {
            rotate: 360,
            scale: 1.2,
            y: -17,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    }

    const socials = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/aryan_chheda7",
            username: "aryan_chheda7",
            icon: "instagram"
        },
        {
            name: "X (Twitter)",
            url: "https://x.com/iamaryan",
            username: "@iamaryan",
            icon: "twitter"
        },
        {
            name: "LinkedIn",
            url: "https://in.linkedin.com/in/aryan-chheda-19ab54363",
            username: "Aryan Chheda",
            icon: "linkedin"
        },
        {
            name: "GitHub",
            url: "https://github.com/Aryan18-dotcom",
            username: "Aryan18-dotcom",
            icon: "github"
        },
        {
            name: "Email",
            url: "mailto:aryanchheda18@gmail.com",
            username: "AryanChheda18@gmail.com",
            icon: "gmail"
        },
        {
            name: "Pintrest",
            url: "https://in.pinterest.com/aryanchheda18",
            username: "aryanchheda18",
            icon: "pintrest"
        }
    ]

    return (
        <div className='container-coll md:mt-16 mt-12'>
        <SectionHeading sectionTitle="Socials" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {socials.map((item, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="relative"
                    whileHover="hover"
                >

                    <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener"
                        className="relative group/link flex items-center md:gap-4 md:p-4 md:pr-2 pr-1 p-2 gap-2 cursor-pointer transition-colors select-none
                            hover:bg-neutral-300 dark:hover:bg-neutral-700 
                            rounded-l-2xl rounded-b-2xl dark:bg-neutral-700/30 bg-neutral-200 backdrop-blur-md"
                    >
                                // Error Fixed, Lets try to comite and deploy on the versel.
                        <div className="relative size-12 shrink-0 rounded-xl">
                            <Image
                                src={localIcons[item.icon]}
                                alt={item.name}
                                width="48"
                                height="48"
                                className="md:size-full size-8.5 rounded-xl"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-medium text-neutral-800 dark:text-neutral-200 underline-offset-4 group-hover/link:underline sm:text-sm">
                                {item.name}
                            </h3>
                            <p className="md:text-sm text-neutral-500 dark:text-neutral-400 text-xs">
                                {item.username}
                            </p>
                        </div>

                        <motion.div variants={arrowVariants}>
                            <ArrowUpRight size="24" className="text-neutral-500 dark:text-neutral-400" />
                        </motion.div>
                    </Link>
                </motion.div>
            ))}

        </div>
        </div>
    )
}

export default Socials
